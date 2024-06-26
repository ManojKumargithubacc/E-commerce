import JWT from "jsonwebtoken";

//Protected routes
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(req.header.authorization, process.env.JWT_SECRET);
    next();
  } catch (error) {
    console.log(error);
  }
};
