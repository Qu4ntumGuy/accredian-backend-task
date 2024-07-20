const { prisma } = require("../db/db");

const addFormData = async ({ data }) => {
  const { name, email, phone, course, reason, note } = data;

  try {
    // Check if user already exists
    // const isUserExists = await prisma.user.findUnique({
    //   where: {
    //     email: email, // Ensure to use the correct field name
    //   },
    // });

    // if (isUserExists) {
    //   return { error: "User already filled the form." };
    // }

    // Create new user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        course,
        reason,
        note,
      },
    });

    return user;
  } catch (e) {
    console.error(e); // Log the error for debugging
    return { error: "An error occurred while adding form data." };
  }
};

module.exports = addFormData;
