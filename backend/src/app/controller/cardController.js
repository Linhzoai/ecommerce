import db from "../../../models/index.js";
const {Cart, Product} = db;

class cardController {

    //Thêm sản phẩm vào giỏ hàng
    addToCart = async (req, res) =>{
        try{
            const userId = req.user.id;
            const {productId, quantity: quantity = 1, size} = req.body;
            if(!productId) return res.status(400).json({message: "Sản phẩm không tồn tại"});
            if(!quantity || quantity <= 0) return res.status(400).json({message: "Vui lòng chọn số lượng"});
            const product = await Product.findByPk(productId);
            if(!product) return res.status(400).json({message: "Sản phẩm không tồn tại"});
            if(!product.size.some((s)=> s.name===size)) return res.status(400).json({message: "Sản phẩm không có size này"});
            const card = await Cart.findOne({where: {userId, productId, size}});
            if(card){
                card.quantity +=quantity;
                await card.save();
                return res.status(200).json({message: "Cập nhật giỏ hàng thành công"});
            }
            else{
                await Cart.create({userId, productId, size, quantity});
                return res.status(200).json({message: "Thêm sản phẩm vào giỏ hàng thành công"});
            }
        }
        catch(err){
            console.log("Lỗi khi thêm sản phẩm vào giỏ hàng: ", err);
            return res.status(500).json({message: "Lỗi hệ thống"});
        }
    }

    //Lấy danh sách sản phẩm trong giỏ hàng
    getCart = async (req, res) =>{
       try{
        const userId = req.user.id;
        const cart = await Cart.findAll({
            where: {userId},
            include: [{model: Product, attributes: ["id", "name", "price", "image"]}]
        })
        return res.status(200).json({message: "Lấy danh sách sản phẩm trong giỏ hàng thành công", cart});
       }
       catch(err){
        console.log("Lỗi khi lấy sản phẩm trong giỏ hàng: ", err);
        return res.status(500).json({message: "Lỗi hệ thống"});
       }
    }

    //xóa 1 sản phẩm trong giỏ hàng
    deleteItemCart = async (req, res) =>{
        try{
            const userId = req.user.id;
            const {productId, size} = req.body;
            if(!productId || !size) return res.status(400).json({message: "Thông tin sản phẩm không đầy đủ"});
            const cart = await Cart.findOne({where: {userId, productId, size}});
            if(!cart) return res.status(400).json({message: "Sản phẩm không có trong giỏ hàng"});
            await cart.destroy();
            return res.status(200).json({message: "Xóa sản phẩm trong giỏ hàng thành công"});
        }
        catch(err){
            console.log("Lỗi khi xóa sản phẩm trong giỏ hàng");
            return res.status(500).json({message: "Lỗi hệ thống"});
        }
    }

    //xoa toàn bộ sản phẩm trong giở hàng
    deleteCart = async (req, res) =>{
        try{
            const userId = req.user.id;
            const cart = await Cart.findAll({where: {userId}});
            if(!cart) return res.status(400).json({message: "Giỏ hàng rỗng"});
            await Cart.destroy({where: {userId}});
            return res.status(200).json({message: "Xóa toàn bộ sản phẩm trong giỏ hàng thành công"});
        }
        catch(err){
            console.log("Lỗi khi xóa toàn bộ sản phẩm trong giỏ hàng: ", err);
            return res.status(500).json({message: "Lỗi hệ thống"});
        }
    }

    //cập nhật số lượng sản phẩm trong giỏ hàng
    updateCart = async (req, res) =>{
        try{
            const userId = req.user.id;
            const {productId, size, quantity} = req.body;
            if(!productId || !size || !quantity) return res.status(400).json({message: "Thông tin sản phẩm không đầy đủ"});
            const cart = await Cart.findOne({where: {userId, productId, size}});
            if(!cart) return res.status(400).json({message: "Sản phẩm không có trong giỏ hàng"});
            cart.quantity = quantity;
            await cart.save();
            return res.status(200).json({message: "Cập nhật giỏ hàng thành công"});
        }
        catch(err){
            console.log("Lỗi khi cập nhật giỏ hàng: ", err);
            return res.status(500).json({message: "Lỗi hệ thống"});
        }
    }
    

}

export default new cardController();
