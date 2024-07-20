const { prisma } = require("../db/db");
const addFormData = require("../Services/user.service");

const createReferralController = async (req, res) => {
  const data = req.body;
  try {
    addFormData({ data });
    const users = await prisma.user.findMany();
    console.log(users);
    if (users.length === 0) {
      res.json({ error: "No users found" });
      return;
    }
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
