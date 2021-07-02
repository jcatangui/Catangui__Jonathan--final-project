import validator from "validator";

const validationUsers = (req, res, next) => {
  const errors = [];
  const reqProperties = ["name", "password", "email"];

  reqProperties.forEach((property) => {
    if (!req.body.hasOwnProperty(property)) {
      errors.push(`Missing Property:  ${property} `);
    }
  });

  if (req.body.password == undefined) {
    return res.status(400).json({ message: "validation error", errors });
  }

  if (!validator.isLength(req.body.password, 8))
    errors.push("Password must be minimum 8 characters");

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

export default validationUsers;
