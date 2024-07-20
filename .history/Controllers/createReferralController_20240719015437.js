const { prisma } = require("../db/db");

const createReferralController = async (req, res) => {
  const { name, email, phone, referralCode } = req.body;
  try {
    const referral = await prisma.referral.create({
      data: {
        name,
        email,
        phone,
        course,
        reason,
        note,
      },
    });
    res.json(referral);
  } catch (e) {
    res.json(e);
  }
};

module.exports = createReferralController;
