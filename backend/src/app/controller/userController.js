
class UserController {
   Info = async (req, res) =>{
    try {
        const user = req.user;
        return res.status(200).json({
            message: "User info",
            data: {
                name: user.name,
                email: user.email,
                updatedAt: user.updatedAt,
                createdAt: user.createdAt,
            },
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
   } 
}
export default new UserController();