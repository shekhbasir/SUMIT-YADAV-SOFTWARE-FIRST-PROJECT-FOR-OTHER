import crypto from "crypto";

import MovementMember from "../models/MovementMember.js";

/* =========================================
   HELPERS
========================================= */

const normalizeMobile = (mobile) => {
  return String(mobile).replace(/\s+/g, "").replace(/-/g, "").trim();
};

const generateMovementId = () => {
  const year = new Date().getFullYear();

  const random = crypto.randomBytes(4).toString("hex").toUpperCase();

  return `SY-BSM-${year}-${random}`;
};

/* =========================================
   JOIN MOVEMENT
   POST /api/movement/join
========================================= */

export const joinMovement = async (req, res) => {
  try {
    const { name, age, mobile, address, ward } = req.body;

    /* ===============================
       BASIC VALIDATION
    =============================== */

    if (!name || !age || !mobile || !address || !ward) {
      return res.status(400).json({
        success: false,

        message: "कृपया सबै आवश्यक जानकारी भर्नुहोस्।",
      });
    }

    const cleanName = String(name).trim();

    const cleanAddress = String(address).trim();

    const cleanMobile = normalizeMobile(mobile);

    const numericAge = Number(age);

    const numericWard = Number(ward);

    /* ===============================
       NAME VALIDATION
    =============================== */

    if (cleanName.length < 2 || cleanName.length > 100) {
      return res.status(400).json({
        success: false,

        message: "कृपया सही नाम प्रविष्ट गर्नुहोस्।",
      });
    }

    /* ===============================
       AGE VALIDATION
    =============================== */

    if (!Number.isInteger(numericAge) || numericAge < 16 || numericAge > 120) {
      return res.status(400).json({
        success: false,

        message: "कृपया सही उमेर प्रविष्ट गर्नुहोस्।",
      });
    }

    /* ===============================
       MOBILE VALIDATION

       Nepal mobile format:
       98XXXXXXXX
       97XXXXXXXX
    =============================== */

    if (!/^(?:\+977)?9[678]\d{8}$/.test(cleanMobile)) {
      return res.status(400).json({
        success: false,

        message: "कृपया सही मोबाइल नम्बर प्रविष्ट गर्नुहोस्।",
      });
    }

    /* ===============================
       WARD VALIDATION
    =============================== */

    if (!Number.isInteger(numericWard) || numericWard < 1 || numericWard > 5) {
      return res.status(400).json({
        success: false,

        message: "कृपया Ward नम्बर 1 देखि 5 सम्म चयन गर्नुहोस्।",
      });
    }

    /* ===============================
       ADDRESS VALIDATION
    =============================== */

    if (cleanAddress.length < 2 || cleanAddress.length > 200) {
      return res.status(400).json({
        success: false,

        message: "कृपया सही ठेगाना प्रविष्ट गर्नुहोस्।",
      });
    }

    /* ===============================
       CHECK DUPLICATE MOBILE
    =============================== */

    const existingMember = await MovementMember.findOne({
      mobile: cleanMobile,
    });

    if (existingMember) {
      return res.status(409).json({
        success: false,

        alreadyJoined: true,

        message: "यो मोबाइल नम्बरबाट पहिले नै Movement मा Join गरिएको छ।",

        movementId: existingMember.movementId,
      });
    }

    /* ===============================
       CREATE MEMBER
    =============================== */

    const member = await MovementMember.create({
      name: cleanName,

      age: numericAge,

      mobile: cleanMobile,

      address: cleanAddress,

      ward: numericWard,

      movementId: generateMovementId(),
    });

    /* ===============================
       SUCCESS RESPONSE

       Important:
       सिर्फ जरूरी data वापस भेज रहे हैं।
       Mobile वापस नहीं भेज रहे।
    =============================== */

    return res.status(201).json({
      success: true,

      message: "तपाईं सफलतापूर्वक हाम्रो Movement मा सहभागी हुनुभएको छ।",

      member: {
        name: member.name,

        age: member.age,

        ward: member.ward,

        movementId: member.movementId,

        joinedAt: member.createdAt,
      },
    });
  } catch (error) {
    console.error("JOIN MOVEMENT ERROR:", error);

    /* Duplicate MongoDB error */

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,

        message: "यो जानकारी पहिले नै प्रयोग गरिएको छ।",
      });
    }

    return res.status(500).json({
      success: false,

      message: "Movement Join गर्न समस्या भयो। कृपया फेरि प्रयास गर्नुहोस्।",
    });
  }
};
