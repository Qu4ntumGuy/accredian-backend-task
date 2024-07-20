const addFormData = require("../Services/user.service");

const createReferralController = async (req, res) => {
  const data = req.body;
  try {
    const result = await addFormData({ data });
    if (result.error) {
      return res.status(400).json({ error: result.error });
    }

    return res.status(201).json(result);
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = createReferralController;
