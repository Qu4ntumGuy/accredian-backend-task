const createReferralController = async (req, res) => {
  const { prisma } = require("../db/db");
  const { name, email, phone, referralCode } = req.body;
  try {
    const referral = await prisma.referral.create({
      data: {
        name,
        email,
        phone,
        referralCode,
      },
    });
    res.json(referral);
  } catch (e) {
    res.json(e);
  }
};
