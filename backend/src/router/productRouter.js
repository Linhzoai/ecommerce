import express from "express";
import productController from "../app/controller/productController.js";
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Product
 *   description: API quản lý sản phẩm (Xem, Thêm, Sản phẩm liên quan)
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ProductSize:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Tên size
 *           example: "M"
 *         quantity:
 *           type: integer
 *           description: Số lượng tồn kho của size
 *           example: 50
 *     Product:
 *       type: object
 *       properties:
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
 *           description: Giá sản phẩm (VNĐ)
 *           example: 250000
 *         description:
 *           type: string
 *           description: Mô tả chi tiết sản phẩm
 *           example: "Áo thun cotton 100%, thoáng mát, phù hợp mọi hoạt động."
 *         images:
 *           type: array
 *           description: Danh sách URL hình ảnh sản phẩm
 *           items:
 *             type: string
 *           example: ["https://example.com/img1.jpg", "https://example.com/img2.jpg"]
 *         size:
 *           type: array
 *           description: Danh sách size và số lượng tồn kho
 *           items:
 *             $ref: '#/components/schemas/ProductSize'
 *         material:
 *           type: string
 *           description: Chất liệu sản phẩm
 *           example: "Cotton"
 *         type:
 *           type: integer
 *           description: Số lượng size khả dụng (trường ảo)
 *           example: 4
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2026-01-15T10:30:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2026-03-01T08:00:00.000Z"
 */

/**
 * @swagger
 * /api/product:
 *   get:
 *     summary: Lấy danh sách tất cả sản phẩm
 *     description: |
 *       Lấy danh sách sản phẩm có hỗ trợ **sắp xếp** và **phân trang**.
 *
 *       **Các giá trị sắp xếp (sort):**
 *       | Giá trị | Mô tả |
 *       |---------|-------|
 *       | 1 | Mặc định (không sắp xếp) |
 *       | 2 | Mặc định (không sắp xếp) |
 *       | 3 | Sản phẩm mới nhất |
 *       | 4 | Giá từ thấp đến cao |
 *       | 5 | Giá từ cao đến thấp |
 *     tags: [Product]
 *     security: []
 *     parameters:
 *       - in: query
 *         name: sort
 *         schema:
 *           type: integer
 *           enum: [1, 2, 3, 4, 5]
 *           default: 1
 *         description: "Kiểu sắp xếp: 1-2 mặc định, 3 mới nhất, 4 giá thấp→cao, 5 giá cao→thấp"
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *           minimum: 1
 *         description: Số trang hiện tại
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           nullable: true
 *         description: Số sản phẩm trên mỗi trang (không truyền = lấy tất cả)
 *     responses:
 *       200:
 *         description: Lấy danh sách sản phẩm thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Lấy danh sách sản phẩm thành công"
 *                 products:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Product'
 *                 total:
 *                   type: integer
 *                   description: Tổng số sản phẩm
 *                   example: 50
 *                 page:
 *                   type: integer
 *                   description: Trang hiện tại
 *                   example: 1
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
router.get("/", productController.GetAllProduct);

/**
 * @swagger
 * /api/product/{id}:
 *   get:
 *     summary: Lấy thông tin chi tiết sản phẩm theo ID
 *     description: Trả về thông tin đầy đủ của một sản phẩm dựa trên ID.
 *     tags: [Product]
 *     security: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID của sản phẩm (UUID)
 *         example: "f47ac10b-58cc-4372-a567-0e02b2c3d479"
 *     responses:
 *       200:
 *         description: Lấy sản phẩm thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Lấy sản phẩm thành công"
 *                 product:
 *                   $ref: '#/components/schemas/Product'
 *       400:
 *         description: Thiếu ID hoặc không tìm thấy sản phẩm
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Không tìm thấy sản phẩm"
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
router.get("/:id", productController.GetProductById);

/**
 * @swagger
 * /api/product:
 *   post:
 *     summary: Thêm sản phẩm mới
 *     description: |
 *       Tạo một sản phẩm mới trong hệ thống.
 *       - Kiểm tra trùng tên sản phẩm
 *       - Tất cả các trường đều bắt buộc
 *     tags: [Product]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *               - description
 *               - images
 *               - size
 *               - material
 *             properties:
 *               name:
 *                 type: string
 *                 description: Tên sản phẩm
 *                 example: "Áo thun basic cotton"
 *               price:
 *                 type: number
 *                 format: decimal
 *                 description: Giá sản phẩm
 *                 example: 250000
 *               description:
 *                 type: string
 *                 description: Mô tả sản phẩm
 *                 example: "Áo thun cotton 100%, thoáng mát"
 *               images:
 *                 type: array
 *                 description: Danh sách URL hình ảnh
 *                 items:
 *                   type: string
 *                 example: ["https://example.com/img1.jpg"]
 *               size:
 *                 type: array
 *                 description: Danh sách size và số lượng tồn
 *                 items:
 *                   $ref: '#/components/schemas/ProductSize'
 *                 example: [{"name": "S", "quantity": 30}, {"name": "M", "quantity": 50}]
 *               material:
 *                 type: string
 *                 description: Chất liệu
 *                 example: "Cotton"
 *     responses:
 *       200:
 *         description: Thêm sản phẩm thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Thêm sản phẩm thành công"
 *       400:
 *         description: Dữ liệu thiếu hoặc sản phẩm đã tồn tại
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Sản phẩm đã tồn tại"
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
router.post("/", productController.AddProduct);

/**
 * @swagger
 * /api/product/{id}/related:
 *   get:
 *     summary: Lấy sản phẩm liên quan
 *     description: |
 *       Trả về danh sách tối đa **4 sản phẩm liên quan** dựa trên cùng chất liệu (material).
 *       Sản phẩm liên quan được sắp xếp theo thời gian tạo mới nhất và loại trừ sản phẩm hiện tại.
 *     tags: [Product]
 *     security: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID của sản phẩm gốc
 *         example: "f47ac10b-58cc-4372-a567-0e02b2c3d479"
 *     responses:
 *       200:
 *         description: Lấy sản phẩm liên quan thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Lấy sản phẩm liên quan thành công"
 *                 relatedProducts:
 *                   type: array
 *                   maxItems: 4
 *                   items:
 *                     $ref: '#/components/schemas/Product'
 *       400:
 *         description: Không có ID hoặc không tìm thấy sản phẩm
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Không tìm thấy sản phẩm"
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
router.get("/:id/related", productController.RelateProduct);

// router.put("/product/:id", productController.updateProduct);

// router.delete("/product/:id", productController.deleteProduct);

export default router;
