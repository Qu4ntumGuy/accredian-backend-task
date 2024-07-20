const { prisma } = require("../db/db");

const addFormData = async ({ data }) => {
  const { name, email, phone, course, reason, note } = data;
  console.log(data);
  try {
    const isUserExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (isUserExists) {
      return { error: "User already filled the form." };
    }
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        phone: phone,
        course: course,
        reason: reason,
        note: note,
      },
    });
    return user;
  } catch (e) {
    return e;
  }
};

module.exports = addFormData;
