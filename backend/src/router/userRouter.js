import express from "express";
import userController from "../app/controller/userController.js";
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: API quản lý thông tin người dùng
 */

/**
 * @swagger
 * /api/user/info:
 *   get:
 *     summary: Lấy thông tin người dùng
 *     description: |
 *       Trả về thông tin của người dùng hiện tại dựa trên accessToken.
 *       Thông tin được lấy từ middleware xác thực (req.user).
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lấy thông tin người dùng thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User info"
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       format: uuid
 *                       description: ID người dùng
 *                       example: "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
 *                     name:
 *                       type: string
 *                       description: Họ tên người dùng
 *                       example: "Nguyễn Văn A"
 *                     email:
 *                       type: string
 *                       format: email
 *                       description: Địa chỉ email
 *                       example: "user@example.com"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2026-01-15T10:30:00.000Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2026-03-01T08:00:00.000Z"
 *       401:
 *         description: Không có quyền truy cập (chưa đăng nhập hoặc token hết hạn)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Unauthorized"
 *       500:
 *         description: Lỗi hệ thống
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 *                 error:
 *                   type: string
 *                   description: Chi tiết lỗi
 *                   example: "Something went wrong"
 */
router.get("/info", userController.Info);

export default router;
