import axios from "axios";
import * as cheerio from "cheerio";

const OFFICIAL_SITE = "https://www.bishrampurmun.gov.np";
const NEWS_URL = `${OFFICIAL_SITE}/news-notices`;

const CACHE_DURATION = 10 * 60 * 1000;

let newsCache = {
  data: [],
  lastFetched: 0,
};

/* ================================
   HELPERS
================================ */

const cleanText = (text = "") => {
  return text
    .replace(/\s+/g, " ")
    .replace(/^Read more about\s+/i, "")
    .trim();
};

const makeAbsoluteUrl = (url = "") => {
  try {
    return new URL(url, OFFICIAL_SITE).href;
  } catch {
    return null;
  }
};

const createId = (url) => {
  return Buffer.from(url).toString("base64").replace(/[+/=]/g, "");
};

const parseDate = (text = "") => {
  const match = text.match(/(\d{2}\/\d{2}\/\d{4})\s*-\s*(\d{2}:\d{2})/);

  if (!match) {
    return {
      raw: "Official Update",
      timestamp: 0,
    };
  }

  const raw = `${match[1]} - ${match[2]}`;

  const date = new Date(`${match[1]} ${match[2]}`);

  return {
    raw,
    timestamp: Number.isNaN(date.getTime()) ? 0 : date.getTime(),
  };
};

/* ================================
   AXIOS CONFIG
================================ */

const officialClient = axios.create({
  timeout: 20000,

  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) " +
      "AppleWebKit/537.36 Chrome Safari/537.36",

    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",

    "Accept-Language": "ne-NP,ne;q=0.9,en-US;q=0.8,en;q=0.7",
  },
});

/* ================================
   EXTRACT NEWS
================================ */

const extractNewsFromPage = (html) => {
  const $ = cheerio.load(html);

  const items = [];

  $("a[href*='/content/']").each((_, element) => {
    const anchor = $(element);

    const title = cleanText(anchor.text());

    const href = anchor.attr("href");

    if (!title || !href) return;

    if (title.length < 3 || title.length > 500) {
      return;
    }

    const url = makeAbsoluteUrl(href);

    if (!url) return;

    const container = anchor.closest(
      "article, .node, .views-row, .view-content > div, li",
    );

    let surroundingText = cleanText(
      container.length ? container.text() : anchor.parent().text(),
    );

    if (!/\d{2}\/\d{2}\/\d{4}/.test(surroundingText)) {
      surroundingText = cleanText(anchor.parent().parent().text());
    }

    const dateData = parseDate(surroundingText);

    items.push({
      id: createId(url),
      title,
      url,
      date: dateData.raw,
      timestamp: dateData.timestamp,
      source: "विश्रामपुर गाउँपालिका",
      sourceUrl: OFFICIAL_SITE,
      category: "सूचना तथा समाचार",
    });
  });

  return items;
};

/* ================================
   GET TOTAL PAGES
================================ */

const getTotalPages = (html) => {
  const $ = cheerio.load(html);

  let maxPage = 0;

  $("a[href*='page=']").each((_, element) => {
    const href = $(element).attr("href") || "";

    const match = href.match(/[?&]page=(\d+)/);

    if (match) {
      const page = Number(match[1]);

      if (page > maxPage) {
        maxPage = page;
      }
    }
  });

  return Math.min(maxPage, 50);
};

/* ================================
   FETCH SINGLE PAGE
================================ */

const fetchNewsPage = async (page = 0) => {
  const url = page === 0 ? NEWS_URL : `${NEWS_URL}?page=${page}`;

  const response = await officialClient.get(url);

  return response.data;
};

/* ================================
   FETCH ALL NEWS
================================ */

const fetchAllOfficialNews = async () => {
  console.log("Fetching Bishrampur official news...");

  const firstPageHtml = await fetchNewsPage(0);

  const firstPageNews = extractNewsFromPage(firstPageHtml);

  const totalPages = getTotalPages(firstPageHtml);

  console.log(`Detected ${totalPages + 1} pages`);

  const allNews = [...firstPageNews];

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  const BATCH_SIZE = 5;

  for (let i = 0; i < pageNumbers.length; i += BATCH_SIZE) {
    const batch = pageNumbers.slice(i, i + BATCH_SIZE);

    const results = await Promise.allSettled(
      batch.map(async (page) => {
        const html = await fetchNewsPage(page);

        return extractNewsFromPage(html);
      }),
    );

    results.forEach((result) => {
      if (result.status === "fulfilled") {
        allNews.push(...result.value);
      } else {
        console.log("One page failed:", result.reason?.message);
      }
    });
  }

  /* Remove duplicates */

  const uniqueMap = new Map();

  allNews.forEach((item) => {
    if (!uniqueMap.has(item.url)) {
      uniqueMap.set(item.url, item);
    }
  });

  const uniqueNews = Array.from(uniqueMap.values());

  /* Latest first */

  uniqueNews.sort((a, b) => b.timestamp - a.timestamp);

  console.log(`Total news found: ${uniqueNews.length}`);

  return uniqueNews;
};

/* ================================
   CACHE
================================ */

const getOfficialNews = async (forceRefresh = false) => {
  const now = Date.now();

  const cacheValid =
    newsCache.data.length > 0 && now - newsCache.lastFetched < CACHE_DURATION;

  if (cacheValid && !forceRefresh) {
    return {
      news: newsCache.data,
      cached: true,
    };
  }

  const news = await fetchAllOfficialNews();

  newsCache = {
    data: news,
    lastFetched: Date.now(),
  };

  return {
    news,
    cached: false,
  };
};

/* =========================================
   CONTROLLER: GET NEWS
========================================= */

export const getBishrampurNews = async (req, res) => {
  try {
    const { limit = "60" } = req.query;

    const { news, cached } = await getOfficialNews();

    let result = [...news];

    if (limit !== "all") {
      const numericLimit = Math.min(Math.max(Number(limit) || 60, 1), 500);

      result = result.slice(0, numericLimit);
    }

    res.status(200).json({
      success: true,

      total: result.length,

      available: news.length,

      cached,

      lastUpdated: new Date(newsCache.lastFetched).toISOString(),

      source: {
        name: "विश्रामपुर गाउँपालिका, बारा",
        type: "Official Website",
        url: NEWS_URL,
      },

      news: result,
    });
  } catch (error) {
    console.error("NEWS ERROR:", error.message);

    /* If website fails but cache exists */

    if (newsCache.data.length > 0) {
      return res.status(200).json({
        success: true,

        total: newsCache.data.length,

        cached: true,

        stale: true,

        news: newsCache.data,
      });
    }

    res.status(500).json({
      success: false,

      message: "विश्रामपुर गाउँपालिकाको समाचार प्राप्त गर्न सकिएन।",

      error: error.message,
    });
  }
};

/* =========================================
   CONTROLLER: FORCE REFRESH
========================================= */

export const refreshBishrampurNews = async (req, res) => {
  try {
    const { news } = await getOfficialNews(true);

    res.status(200).json({
      success: true,

      message: "Official news refreshed successfully",

      total: news.length,

      lastUpdated: new Date(newsCache.lastFetched).toISOString(),

      news,
    });
  } catch (error) {
    console.error("REFRESH ERROR:", error.message);

    res.status(500).json({
      success: false,

      message: "News refresh failed",

      error: error.message,
    });
  }
};
