import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  // const token = req.cookies.token;
  const token_a = req.headers.authorization;
  console.log(token_a);
  const token = JSON.parse(token_a);
  // console.log(req.cookies);
  console.log(token);

  if (!token) return res.status(401).json({ message: "Not Authenticated!" });

  jwt.verify(token, "JWT_SECRET_KEY", async (err, payload) => {
    if (err) return res.status(403).json({ message: "Token is not Valid!" });
    req.userId = payload.id;

    next();
  });
};
