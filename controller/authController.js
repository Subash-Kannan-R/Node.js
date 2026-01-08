export const authController = (req, res) => {
  const { email, password } = req.body || {};
  console.log("Request Body:", req.body);
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  res.status(200).json({
    success: true,
    message: "Login successful",
    user: { email },
  });
};
