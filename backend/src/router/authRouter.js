import express from "express";
import AuthController from "../app/controller/authController.js";
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: API xác thực người dùng (Đăng ký, Đăng nhập, Đăng xuất, Refresh Token)
 */

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: Đăng ký tài khoản mới
 *     description: Tạo tài khoản người dùng mới bằng email và mật khẩu. Hệ thống sẽ kiểm tra email có trùng lặp hay không trước khi tạo tài khoản.
 *     tags: [Auth]
 *     security: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Địa chỉ email của người dùng
 *                 example: "linhbarao@gmail.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Mật khẩu (sẽ được hash trước khi lưu)
 *                 example: "123456"
 *               fullname:
 *                 type: string
 *                 description: Họ và tên người dùng (mặc định "No name")
 *                 example: "Nguyễn Văn A"
 *     responses:
 *       201:
 *         description: Tạo tài khoản thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Tạo tài khoản thành công"
 *       400:
 *         description: Dữ liệu không hợp lệ hoặc email đã tồn tại
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "email đã tồn tại"
 *       500:
 *         description: Lỗi hệ thống
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Lỗi hệ thống"
 */
router.post("/signup", AuthController.signUp);

/**
 * @swagger
 * /api/auth/signin:
 *   post:
 *     summary: Đăng nhập
 *     description: |
 *       Đăng nhập bằng email và mật khẩu.
 *       - Trả về **accessToken** (JWT) trong body
 *       - Lưu **refreshToken** vào cookie HttpOnly
 *     tags: [Auth]
 *     security: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email đã đăng ký
 *                 example: "linhbarao@gmail.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Mật khẩu
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Đăng nhập thành công
 *         headers:
 *           Set-Cookie:
 *             description: Cookie chứa refreshToken (HttpOnly)
 *             schema:
 *               type: string
 *               example: "refreshToken=abc123; HttpOnly; Path=/; Max-Age=1209600"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Đăng nhập thành công"
 *                 accessToken:
 *                   type: string
 *                   description: JWT Access Token
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       400:
 *         description: Tài khoản hoặc mật khẩu không chính xác
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "tài khoản hoặc mật khẩu không chính xác"
 *       500:
 *         description: Lỗi hệ thống
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Lỗi hệ thống"
 */
router.post("/signin", AuthController.signIn);

/**
 * @swagger
 * /api/auth/signout:
 *   post:
 *     summary: Đăng xuất
 *     description: |
 *       Đăng xuất người dùng hiện tại.
 *       - Xóa session (refreshToken) trong database
 *       - Xóa cookie refreshToken phía client
 *     tags: [Auth]
 *     security: []
 *     parameters:
 *       - in: cookie
 *         name: refreshToken
 *         required: true
 *         schema:
 *           type: string
 *         description: Refresh token được lưu trong cookie HttpOnly
 *     responses:
 *       200:
 *         description: Đăng xuất thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Đăng xuất thành công"
 *       400:
 *         description: Không có refresh token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Không có refresh token"
 */
router.post("/signout", AuthController.signOut);

/**
 * @swagger
 * /api/auth/refresh-token:
 *   get:
 *     summary: Làm mới Access Token
 *     description: |
 *       Sử dụng refreshToken (từ cookie) để tạo accessToken mới.
 *       Dùng khi accessToken hết hạn mà không cần đăng nhập lại.
 *     tags: [Auth]
 *     security: []
 *     parameters:
 *       - in: cookie
 *         name: refreshToken
 *         required: true
 *         schema:
 *           type: string
 *         description: Refresh token được lưu trong cookie HttpOnly
 *     responses:
 *       200:
 *         description: Làm mới token thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Làm mới token thành công"
 *                 accessToken:
 *                   type: string
 *                   description: JWT Access Token mới
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       400:
 *         description: Không có refresh token hoặc token không hợp lệ
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Không có refresh token"
 *       500:
 *         description: Lỗi hệ thống
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Lỗi hệ thống"
 */
router.get("/refresh-token", AuthController.refreshToken);

/**
 * @swagger
 * /api/auth/me:
 *   get:
 *     summary: Lấy thông tin người dùng hiện tại
 *     description: Trả về thông tin chi tiết của người dùng đang đăng nhập (dựa trên accessToken).
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Thông tin người dùng
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: uuid
 *                   description: ID người dùng
 *                   example: "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
 *                 name:
 *                   type: string
 *                   description: Họ tên
 *                   example: "Nguyễn Văn A"
 *                 email:
 *                   type: string
 *                   format: email
 *                   description: Email
 *                   example: "user@example.com"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2026-01-15T10:30:00.000Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2026-03-01T08:00:00.000Z"
 *       400:
 *         description: Không tìm thấy người dùng
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Không có người dùng"
 *       500:
 *         description: Lỗi hệ thống
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Lỗi hệ thống"
 */
router.get("/me", AuthController.fetchMe);

export default router;
