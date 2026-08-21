import MovementMember from "../models/MovementMember.js";

/* =====================================
   GENERATE UNIQUE MOVEMENT ID
===================================== */

const generateMovementId = () => {
  const random = Math.random().toString(36).substring(2, 7).toUpperCase();

  const year = new Date().getFullYear();

  return `SYB-${year}-${random}`;
};

/* =====================================
   JOIN MOVEMENT

   POST /api/movement/join
===================================== */

export const joinMovement = async (req, res) => {
  try {
    let { name, age, mobile, address, ward } = req.body;

    /* ================================
       CLEAN DATA
    ================================ */

    name = name?.trim();
    mobile = mobile?.trim();
    address = address?.trim();

    age = Number(age);
    ward = Number(ward);

    /* ================================
       VALIDATION
    ================================ */

    if (!name || !age || !mobile || !address || !ward) {
      return res.status(400).json({
        success: false,
        message: "कृपया सबै आवश्यक जानकारी भर्नुहोस्।",
      });
    }

    if (name.length < 2) {
      return res.status(400).json({
        success: false,
        message: "कृपया सही नाम लेख्नुहोस्।",
      });
    }

    if (!Number.isInteger(age) || age < 16 || age > 120) {
      return res.status(400).json({
        success: false,
        message: "कृपया सही उमेर दिनुहोस्।",
      });
    }

    if (!/^\d{10,15}$/.test(mobile)) {
      return res.status(400).json({
        success: false,
        message: "कृपया सही मोबाइल नम्बर दिनुहोस्।",
      });
    }

    if (!Number.isInteger(ward) || ward < 1 || ward > 5) {
      return res.status(400).json({
        success: false,
        message: "कृपया सही Ward नम्बर छान्नुहोस्।",
      });
    }

    /* ================================
       CHECK DUPLICATE MOBILE
    ================================ */

    const existingMember = await MovementMember.findOne({
      mobile,
    });

    if (existingMember) {
      return res.status(200).json({
        success: true,

        alreadyJoined: true,

        message: "तपाईं पहिले नै अभियानमा सहभागी हुनुहुन्छ।",

        member: {
          name: existingMember.name,
          age: existingMember.age,
          mobile: existingMember.mobile,
          address: existingMember.address,
          ward: existingMember.ward,
          movementId: existingMember.movementId,
          status: existingMember.status,
          createdAt: existingMember.createdAt,
        },
      });
    }

    /* ================================
       GENERATE UNIQUE ID
    ================================ */

    let movementId;
    let exists = true;

    while (exists) {
      movementId = generateMovementId();

      const found = await MovementMember.findOne({
        movementId,
      });

      exists = !!found;
    }

    /* ================================
       CREATE MEMBER
    ================================ */

    const member = await MovementMember.create({
      name,
      age,
      mobile,
      address,
      ward,
      movementId,
      status: "active",
    });

    /* ================================
       SUCCESS
    ================================ */

    return res.status(201).json({
      success: true,

      alreadyJoined: false,

      message: "तपाईं सफलतापूर्वक विश्रामपुर विकास अभियानमा सहभागी हुनुभएको छ।",

      member: {
        name: member.name,
        age: member.age,
        mobile: member.mobile,
        address: member.address,
        ward: member.ward,
        movementId: member.movementId,
        status: member.status,
        createdAt: member.createdAt,
      },
    });
  } catch (error) {
    console.error("JOIN MOVEMENT ERROR:", error);

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "यो मोबाइल नम्बरबाट पहिले नै Movement मा सहभागिता गरिएको छ।",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Movement Join गर्न समस्या भयो। कृपया फेरि प्रयास गर्नुहोस्।",
    });
  }
};
