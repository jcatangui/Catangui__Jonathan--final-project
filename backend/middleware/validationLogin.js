import validator from "validator";

const validationLogin = (req, res, next) => {
  const errors = [];
  const reqProperties = ["email", "password"];

  reqProperties.forEach((property) => {
    if (!req.body.hasOwnProperty(property)) {
      errors.push(`Missing Property:  ${property} `);
    }
  });

  if (req.body.email == undefined) {
    return res.status(400).json({ message: "validation error", errors });
  }

  if (!validator.isEmail(req.body.email)) errors.push("Incorrect Email Format");

  if (errors.length) {
    return res.status(400).json({
      message: "validation error",
      errors,
    });
  }
  next();
};

export default validationLogin;
