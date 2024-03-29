import jwt from "jsonwebtoken"

// auth
export async function auth (req, res, next) {
  try {
    // get token from header
    const token =
      req.cookies.token ||
      req.body.token ||
      req.header("authorization").replace("Bearer ", "")

    // check if token exist
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token, authorization denied",
      })
    }

    try {
      // verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      console.log(decoded)
      req.user = decoded
    } catch (error) {
      // verfiy token failed
      return res.status(401).json({
        success: false,
        message: "Token is not valid",
      })
    }
    next()
  } catch (error) {
    console.log("Error in auth middleware: " + error)
    return res.status(500).json({ success: false, message: error.message })
  }
}

// isStudent
export async function isStudent (req, res, next) {
  try {
    // get user from request object
    const user = req.user

    // check if user is student
    if (user.accountType !== "Student") {
      return res.status(401).json({
        success: false,
        message: "This is a protected router for Students only",
      })
    }
    next()
  } catch (error) {
    console.log("Error in isStudent middleware: " + error)
    return res.status(500).json({ success: false, message: error.message })
  }
}

// isInstructor
export async function isInstructor (req, res, next) {
  try {
    // get user from request object
    const user = req.user

    // check if user is instructor
    if (user.accountType !== "Instructor") {
      return res.status(401).json({
        success: false,
        message: "This is a protected router for instructor only",
      })
    }
    next()
  } catch (error) {
    console.log("Error in isInstructor middleware: " + error)
    return res.status(500).json({ success: false, message: error.message })
  }
}

// isAdmin
export async function isAdmin (req, res, next) {
  try {
    // get user from request object
    const user = req.user

    // check if user is admin
    if (user.accountType !== "Admin") {
      return res.status(401).json({
        success: false,
        message: "This is a protected router for admin only",
      })
    }
    next()
  } catch (error) {
    console.log("Error in isAdmin middleware: " + error)
    return res.status(500).json({ success: false, message: error.message })
  }
}
