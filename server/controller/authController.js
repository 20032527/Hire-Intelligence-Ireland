const bcrypt = require("bcryptjs"); // Ref: https://www.npmjs.com/package/bcryptjs
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");
const { JWT_SECRET_KEY } = require("../config.js"); 


const register = async (req, res) => {
 // Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
  try {
    const { name, email, password, role, phone, gadgets } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }
    // Hashing password before saving for security
    // Ref: https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const user = new User({
      name,
      email,
     password: hashedPassword,
      role,
      phone,

      // Restricts gadgets field to admin users
      // Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
      gadgets: role === "admin" ? gadgets : undefined,
    });

    await user.save();

    res.status(201).json({ message: "Registration successful", user });
  } catch (error) {

    // Handles server-side failures
    // Ref: https://expressjs.com/en/guide/error-handling.html
    res.status(500).json({ message: "Registration failed", error: error.message });
  }
};


const login = async (req, res) => {
  try {

    // Finds user by email
    // Ref: https://mongoosejs.com/docs/api/model.html#Model.findOne()

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(401).json({ message: "User not found" });


    // Validates password against stored hash
    // Ref: https://www.npmjs.com/package/bcryptjs#password-verification
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({ message: "Invalid credentials" });


    // Generates JWT for authenticated sessions
    // Ref: https://datatracker.ietf.org/doc/html/rfc7519
    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET_KEY, { expiresIn: "7d" });

    res.status(200).json({ token, user });
  } catch (error) {

    // Handles authentication errors
    // Ref: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};

module.exports = { register, login };
