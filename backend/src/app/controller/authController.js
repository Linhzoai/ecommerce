import bcrypt from "bcrypt";
import db from "../../../models/index.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";
const { User, Session } = db;

const saltRound = 10;
const ACCESS_TOKEN_TTL = "15m";
const REFRESH_TOKEN_TTL = 14 * 24 * 60 * 60 * 1000;

class AuthController {
  signUp = async (req, res) => {
    try {
      const { email, password, fullname = "No name" } = req.body;
      //kiểm tra trường dl bi thiếu
      if ((!email || !password, !fullname))
        return res.status(400).json({ message: "Trường dữ liệu bị thiếu" });
      //kiểm tra xem email đã tồn tại chưa
      const user = await User.findOne({ where: { email } });
      if (user) return res.status(400).json({ message: "email đã tồn tại" });

      //tạo hashpassword
      const hashpassword = await bcrypt.hash(password, saltRound);

      //tạo user mới
      const newUser = await User.create({
        email,
        password: hashpassword,
        name: fullname,
      });

      return res.status(201).json({ message: "Tạo tài khoản thành công" });
    } catch (err) {
      console.log("Lỗi khi tạo tài khoản: ", err);
      return res.status(500).json({ message: "Lỗi hệ thống" });
    }
  };

  signIn = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password)
        return res.status(400).json({ message: "Trường dữ liệu bị thiếu" });

      //kiểm tra email có tồn tại không
      const user = await User.findOne({ where: { email } });
      if (!user) {
        console.log("email không tồn tại");
        return res
          .status(400)
          .json({ message: "tài khoản hoặc mật khẩu không chính xác" });
      }

      //so sánh mật khẩu
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        console.log("mật khẩu không chính xác");
        return res
          .status(400)
          .json({ message: "tài khoản hoặc mật khẩu không chính xác" });
      }

      //tạo access token và refresh token
      const accessToken = jwt.sign(
        { userId: user.id },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: ACCESS_TOKEN_TTL,
        },
      );
      const refreshToken = crypto.randomBytes(64).toString("hex");
      //lưu refresh token vào db
      await Session.create({
        userId: user.id,
        refreshToken: refreshToken,
        expired_at: new Date(Date.now() + REFRESH_TOKEN_TTL),
      });
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: REFRESH_TOKEN_TTL,
      });
      res.status(200).json({ message: "Đăng nhập thành công", accessToken });
    } catch (err) {
      console.log("Lỗi khi đăng nhập: ", err);
      return res.status(500).json({ message: "Lỗi hệ thống" });
    }
  };

  signOut = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken)
      return res.status(400).json({ message: "Không có refresh token" });
    await Session.destroy({ where: { refreshToken } });
    res.clearCookie("refreshToken");
    return res.status(200).json({ message: "Đăng xuất thành công" });
  };

  refreshToken = async (req, res) => {
    try {
      const refreshToken = req.cookies.refreshToken;
      if (!refreshToken)
        return res.status(400).json({ message: "Không có refresh token" });
      const session = await Session.findOne({ where: { refreshToken } });
      if (!session)
        return res.status(400).json({ message: "Không có refresh token" });
      const accessToken = jwt.sign(
        { userId: session.userId },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: ACCESS_TOKEN_TTL },
      );
      return res
        .status(200)
        .json({ message: "Làm mới token thành công", accessToken });
    } catch (err) {
      console.log("Lỗi khi làm mới token: ", err);
      return res.status(500).json({ message: "Lỗi hệ thống" });
    }
  };
  fetchMe = async (req, res) => {
    try {
      const userId = req.user.id;
      const user = await User.findOne({ where: { id: userId } });
      if (!user)
        return res.status(400).json({ message: "Không có người dùng" });
      return res.status(200).json(user);
    } catch (err) {
      console.log("Lỗi khi lấy thông tin người dùng: ", err);
      return res.status(500).json({ message: "Lỗi hệ thống" });
    }
  };
}

export default new AuthController();
