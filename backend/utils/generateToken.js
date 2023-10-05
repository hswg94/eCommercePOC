import jwt from "jsonwebtoken";

const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
  });
};

export default generateToken;
