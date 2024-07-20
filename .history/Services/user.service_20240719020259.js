const { prisma } = require("../db/db");

const addFormData = async ({ data }) => {
  const { name, email, phone, course, reason, note } = data;
  try {
    const isUserExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (isUserExists) {
      return resizeBy.status(400).jsmon({ error: "User already exists" });
    }
    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        course,
        reason,
        note,
        password: hashedPassword,
      },
    });
    return user;
  } catch (e) {
    return e;
  }
};

module.exports = addFormData;
