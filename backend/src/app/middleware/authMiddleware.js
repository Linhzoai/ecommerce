import jwt from "jsonwebtoken";
import db from "../../../models/index.js";
const { User } = db;
const authMiddleware =  (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({ message: "Không có access token" });
    }
    const token = authHeader.split(" ")[1];
    try {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async(err, decodedUser)=>{
            if(err){
                console.log("Lỗi khi xác thực jwt", err);
                return res.status(401).json({ message: "Token không hợp lệ" });
            }
            const user = await User.findByPk(decodedUser.userId);
            if(!user){
                console.log("Không tìm thấy user")
                return res.status(401).json({ message: "Token không hợp lệ" });
            }
            req.user = user;
            next();
        })
    } catch (error) {
        return res.status(401).json({ message: "Token không hợp lệ" });
    }
}
export default authMiddleware;