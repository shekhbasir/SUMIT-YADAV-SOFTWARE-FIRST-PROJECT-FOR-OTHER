import MovementMember from "../models/MovementMember.js";

/* =====================================
   DASHBOARD STATISTICS

   GET /api/admin/dashboard
===================================== */

export const getDashboardStats = async (req, res) => {
  try {
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const [totalMembers, todayJoined, wardStats, recentMembers] =
      await Promise.all([
        MovementMember.countDocuments(),

        MovementMember.countDocuments({
          createdAt: {
            $gte: today,
          },
        }),

        MovementMember.aggregate([
          {
            $group: {
              _id: "$ward",
              count: {
                $sum: 1,
              },
            },
          },

          {
            $sort: {
              _id: 1,
            },
          },
        ]),

        MovementMember.find()
          .sort({
            createdAt: -1,
          })
          .limit(10)
          .select("name age ward movementId createdAt"),
      ]);

    const wards = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };

    wardStats.forEach((item) => {
      wards[item._id] = item.count;
    });

    return res.status(200).json({
      success: true,

      stats: {
        totalMembers,
        todayJoined,
        wards,
      },

      recentMembers,
    });
  } catch (error) {
    console.error("DASHBOARD ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to load dashboard.",
    });
  }
};

/* =====================================
   GET ALL MEMBERS

   GET /api/admin/members

   Query:
   ?page=1
   ?limit=20
   ?ward=5
   ?search=ram
===================================== */

export const getAllMembers = async (req, res) => {
  try {
    const page = Math.max(Number(req.query.page) || 1, 1);

    const limit = Math.min(Math.max(Number(req.query.limit) || 20, 1), 100);

    const skip = (page - 1) * limit;

    const filter = {};

    /* Ward Filter */

    if (req.query.ward) {
      const ward = Number(req.query.ward);

      if (Number.isInteger(ward) && ward >= 1 && ward <= 5) {
        filter.ward = ward;
      }
    }

    /* Search */

    if (req.query.search) {
      const search = String(req.query.search)
        .trim()
        .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

      if (search) {
        filter.$or = [
          {
            name: {
              $regex: search,
              $options: "i",
            },
          },

          {
            mobile: {
              $regex: search,
              $options: "i",
            },
          },

          {
            movementId: {
              $regex: search,
              $options: "i",
            },
          },
        ];
      }
    }

    const [total, members] = await Promise.all([
      MovementMember.countDocuments(filter),

      MovementMember.find(filter)
        .sort({
          createdAt: -1,
        })
        .skip(skip)
        .limit(limit)
        .select("name age mobile address ward movementId status createdAt"),
    ]);

    return res.status(200).json({
      success: true,

      pagination: {
        total,
        page,
        limit,

        totalPages: Math.ceil(total / limit),
      },

      members,
    });
  } catch (error) {
    console.error("GET MEMBERS ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch members.",
    });
  }
};

/* =====================================
   GET SINGLE MEMBER

   GET /api/admin/members/:id
===================================== */

export const getSingleMember = async (req, res) => {
  try {
    const member = await MovementMember.findById(req.params.id);

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member not found.",
      });
    }

    return res.status(200).json({
      success: true,
      member,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch member.",
    });
  }
};
