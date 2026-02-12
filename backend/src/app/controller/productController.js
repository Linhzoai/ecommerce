import db from "../../../models/index.js";
import { Op } from "sequelize";
const { Product } = db;

class ProductController {
  AddProduct = async (req, res) => {
    try {
      const { name, price, description, images, size, material } = req.body;
      if (!name || !price || !description || !images || !size || !material) {
        return res.status(400).json({ message: "Trường dữ liệu bị thiếu" });
      }
      //kiểm tra sản phẩm có tồn tại không
      const product = await Product.findOne({ where: { name } });
      if (product) {
        return res.status(400).json({ message: "Sản phẩm đã tồn tại" });
      }
      //tạo sản phẩm mới
      const newProduct = await Product.create({
        name,
        price,
        description,
        images,
        size,
        material,
      });
      if (!newProduct) {
        return res.status(400).json({ message: "Thêm sản phẩm thất bại" });
      }
      return res.status(200).json({ message: "Thêm sản phẩm thành công" });
    } catch (error) {
      console.log("Lỗi khi thêm sản phẩm: ", error);
      return res.status(500).json({ message: "Lỗi hệ thống" });
    }
  };

  GetAllProduct = async (req, res) => {
    try {
      //Sắp xếp sản phẩm (0: giữ nguyên,1: giữ nguyên,2: giữ nguyên, 3: sản phẩm mới nhất, 4: giá thấp đến cao, 5: giá cao đến thấp)
      //Phân trang sản phẩm (page: số trang, limit: số sản phẩm trên mỗi trang)
      let {sort: sort=1, page: page=1,limit: limit=null } = req.query;
      const sortOption = {
        3: ["createdAt", "DESC"],
        4: ["price", "ASC"],
        5: ["price", "DESC"],
      }
      if(limit !== null){
        limit = Number(limit);
      }
      const products = await Product.findAll({
        order: sortOption[sort] ? [sortOption[sort]] : undefined,
        limit: limit,
        offset: (page - 1) * limit,
      });
      return res .status(200) .json({ message: "Lấy danh sách sản phẩm thành công", products ,total: products.length, page: page});
    } catch (err) {
      console.log("Lỗi khi lấy danh sách sản phẩm: ", err);
      return res.status(500).json({ message: "Lỗi hệ thống" });
    }
  };

  GetProductById = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ message: "Thiếu id sản phẩm" });
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(400).json({ message: "Không tìm thấy sản phẩm" });
      }
      return res
        .status(200)
        .json({ message: "Lấy sản phẩm thành công", product });
    } catch (err) {
      console.log("Lỗi khi lấy sản phẩm: ", err);
      return res.status(500).json({ message: "Lỗi hệ thống" });
    }
  };

  RelateProduct = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ message: "Không có id sản phẩm" });

      const product = await Product.findByPk(id);
      if (!product)
        return res.status(400).json({ message: "Không tìm thấy sản phẩm" });

      const relatedProducts = await Product.findAll({
        where: {
          id: { [Op.ne]: id, },
          material: product.material,
        },
        limit: 4,
        order: [["createdAt", "DESC"]],
      });
      return res.status(200).json({ message: "Lấy sản phẩm liên quan thành công", relatedProducts, });
    } catch (err) {
      console.log("Lỗi khi lấy sản phẩm liên quan: ", err);
      return res.status(500).json({ message: "Lỗi hệ thống" });
    }
  };
}

export default new ProductController();
