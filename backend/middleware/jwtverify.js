import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const authHeader = req.headers["authorization"];
  // Value of the authorization header is typically: "Bearer JWT", hence splitting with empty space and getting second part of the split
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    console.log(token);

    return res.status(404).send({ message: "token not found" });
  }
  try {
    const data = jwt.verify(token, process.env.JWTKEY);
    req.user = data;
    console.log(`Valid token:  ${token}`);
    console.log(authHeader);
    next();
  } catch (err) {
    console.error(err);
    return res.status(403).send({ message: "invalid token" });
  }
};

// Can use this for course project!
