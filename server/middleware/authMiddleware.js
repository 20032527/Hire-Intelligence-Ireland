const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config");

/* Verifies JWT before allowing access */
/* Ref: https://jwt.io/introduction */
const auth = (req, res, next) => {
  try {

    /* Read token from Authorization header */
    /* Ref: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization */

    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "No token provided" });

    /* Extract Bearer token */
    const token = authHeader.split(" ")[1];

    /* Validate and decode JWT */
    /* Ref: https://github.com/auth0/node-jsonwebtoken */

    const decoded = jwt.verify(token, JWT_SECRET_KEY);

    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
};

module.exports = {
  auth
};
