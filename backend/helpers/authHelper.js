import bcrypt from "bcrypt";
export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};
export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
// Controller : req,res handling
// service : business logics
// validation : joi validation in routes
// service : db connections - repo (db update delete findOne)
// service- axios : post,get opertaions , .env: URL loading
// useState : single use state
// products models : mongoose validation



//category -> api call db -> subcategory -> frontend