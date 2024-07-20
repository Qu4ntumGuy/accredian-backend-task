const { prisma } = require("../db/db");
const addFormData = require("../Services/user.service");

const createReferralController = async (req, res) => {
  const data = req.body;
  try {
    const user = addFormData({ data });
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = createReferralController;
