import express from "express";
import cardController from "../app/controller/cardController.js";
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: API quản lý giỏ hàng (Thêm, Xem, Cập nhật, Xóa sản phẩm trong giỏ)
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     CartItem:
 *       type: object
 *       properties:
 *         quantity:
 *           type: integer
 *           description: Số lượng sản phẩm trong giỏ
 *           example: 2
 *         choiceSize:
 *           type: string
 *           description: Size đã chọn
 *           example: "M"
 *         id:
 *           type: string
 *           format: uuid
 *           description: ID sản phẩm
 *           example: "f47ac10b-58cc-4372-a567-0e02b2c3d479"
 *         name:
 *           type: string
 *           description: Tên sản phẩm
 *           example: "Áo thun basic cotton"
 *         price:
 *           type: number
 *           format: decimal
 *           description: Giá sản phẩm
 *           example: 250000
 *         images:
 *           type: array
 *           description: Danh sách hình ảnh sản phẩm
 *           items:
 *             type: string
 *           example: ["https://example.com/img1.jpg"]
 *         size:
 *           type: array
 *           description: Danh sách tất cả size của sản phẩm
 *           items:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               quantity:
 *                 type: integer
 *         material:
 *           type: string
 *           description: Chất liệu
 *           example: "Cotton"
 *         description:
 *           type: string
 *           description: Mô tả sản phẩm
 *           example: "Áo thun cotton 100%"
 *         total:
 *           type: number
 *           format: decimal
 *           description: Tổng tiền (price × quantity)
 *           example: 500000
 */

/**
 * @swagger
 * /api/cart:
 *   post:
 *     summary: Thêm sản phẩm vào giỏ hàng
 *     description: |
 *       Thêm sản phẩm vào giỏ hàng của người dùng hiện tại.
 *       - Nếu sản phẩm **cùng size đã có** trong giỏ → cộng thêm số lượng
 *       - Nếu chưa có → tạo mới item trong giỏ
 *       - Kiểm tra size có hợp lệ hay không
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productId
 *               - size
 *             properties:
 *               productId:
 *                 type: string
 *                 format: uuid
 *                 description: ID sản phẩm cần thêm
 *                 example: "f47ac10b-58cc-4372-a567-0e02b2c3d479"
 *               quantity:
 *                 type: integer
 *                 minimum: 1
 *                 default: 1
 *                 description: Số lượng cần thêm (mặc định 1)
 *                 example: 2
 *               size:
 *                 type: string
 *                 description: Size sản phẩm
 *                 example: "M"
 *     responses:
 *       200:
 *         description: Thêm/cập nhật giỏ hàng thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Thêm sản phẩm vào giỏ hàng thành công"
 *       400:
 *         description: Dữ liệu không hợp lệ (thiếu thông tin, size không tồn tại, sản phẩm không tồn tại)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Sản phẩm không có size này"
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
router.post("/", cardController.addToCart);

/**
 * @swagger
 * /api/cart:
 *   get:
 *     summary: Lấy danh sách sản phẩm trong giỏ hàng
 *     description: |
 *       Trả về tất cả sản phẩm trong giỏ hàng của người dùng hiện tại,
 *       bao gồm thông tin chi tiết sản phẩm và tổng tiền của mỗi item.
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lấy danh sách thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Lấy danh sách sản phẩm trong giỏ hàng thành công"
 *                 product:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/CartItem'
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
router.get("/", cardController.getCart);

/**
 * @swagger
 * /api/cart/delete:
 *   delete:
 *     summary: Xóa một sản phẩm khỏi giỏ hàng
 *     description: |
 *       Xóa một sản phẩm cụ thể (theo productId + size) khỏi giỏ hàng.
 *       Cần truyền cả **productId** và **size** để xác định chính xác item cần xóa.
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productId
 *               - size
 *             properties:
 *               productId:
 *                 type: string
 *                 format: uuid
 *                 description: ID sản phẩm cần xóa
 *                 example: "f47ac10b-58cc-4372-a567-0e02b2c3d479"
 *               size:
 *                 type: string
 *                 description: Size của sản phẩm cần xóa
 *                 example: "M"
 *     responses:
 *       200:
 *         description: Xóa sản phẩm thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Xóa sản phẩm trong giỏ hàng thành công"
 *       400:
 *         description: Thông tin không đầy đủ hoặc sản phẩm không có trong giỏ
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Sản phẩm không có trong giỏ hàng"
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
router.delete("/delete", cardController.deleteItemCart);

/**
 * @swagger
 * /api/cart:
 *   delete:
 *     summary: Xóa toàn bộ giỏ hàng
 *     description: Xóa tất cả sản phẩm trong giỏ hàng của người dùng hiện tại.
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Xóa toàn bộ giỏ hàng thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Xóa toàn bộ sản phẩm trong giỏ hàng thành công"
 *       400:
 *         description: Giỏ hàng rỗng
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Giỏ hàng rỗng"
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
router.delete("/", cardController.deleteCart);

/**
 * @swagger
 * /api/cart:
 *   patch:
 *     summary: Cập nhật số lượng sản phẩm trong giỏ hàng
 *     description: |
 *       Cập nhật số lượng của một sản phẩm cụ thể (theo productId + size) trong giỏ hàng.
 *       Số lượng mới sẽ **thay thế** số lượng cũ (không cộng dồn).
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productId
 *               - size
 *               - quantity
 *             properties:
 *               productId:
 *                 type: string
 *                 format: uuid
 *                 description: ID sản phẩm
 *                 example: "f47ac10b-58cc-4372-a567-0e02b2c3d479"
 *               size:
 *                 type: string
 *                 description: Size sản phẩm
 *                 example: "M"
 *               quantity:
 *                 type: integer
 *                 minimum: 1
 *                 description: Số lượng mới
 *                 example: 3
 *     responses:
 *       200:
 *         description: Cập nhật giỏ hàng thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Cập nhật giỏ hàng thành công"
 *       400:
 *         description: Thông tin không đầy đủ hoặc sản phẩm không có trong giỏ
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Sản phẩm không có trong giỏ hàng"
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
router.patch("/", cardController.updateCart);

export default router;
