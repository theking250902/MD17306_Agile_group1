var express = require('express');
var router = express.Router();
const cartController = require('../../components/carts/CartController');
const userController = require('../../components/users/UserController');

//localhost:3000/cpanel/cart
router.get('/', async (req, res, next) => {
    //hien thi trang danh sach sp
    const carts = [await cartController.getAllCarts()];
    const users = await userController.getAllUsers();
    let data;
    for(let i=1;i<=carts.length;i++){
        if(carts[i.id_user==users[i].id]){
            data += carts[i];
        }
    }
    res.render('product/list', { carts });
    //     const users = await userController.getAllUsers();
    // res.render('product/list', { users });
});
router.get('/:id/delete', async (req, res, next) => {
    // hien thi trang danh sach sp
    try {
        const { id } = req.params;
        await productController.deleteProductById(id);
        return res.json({ status: true })
    }
    catch (error) {
        return res.json({ status: false })
    }

});
router.get('/new', async (req, res, next) => {
    // hien thi add sp
    const categories = await categoryController.getAllCategories();
    res.render('product/new', { categories });

});
// xu ly add sp
router.post('/new', [uploadFile.single('image'),], async (req, res, next) => {
    try {
        let { body, file } = req;
        if (file) {
            // up image and get link image
            let image = `http://${CONFIG.CONSTANTS.IP}:3000/images/${file.filename}`;
            body = { ...body, image: image }
        }
        let { name, price, quantity, image, category } = body;
        await productController
            .addNewProduct(name, price, quantity, image, category);
        return res.redirect('/cpanel/product');
    } catch (error) {
        console.log('Add new product error: ', error)
        next(error);
    }
})
router.get('/testUploadImage', async (req, res, next) => {
    // hien thi add sp
    const categories = await categoryController.getAllCategories();
    res.render('product/new', { categories });

});
router.post('/testUploadImage', [uploadFile.single('image'),], async (req, res, next) => {
    try {
        let image;
        let { body, file } = req;
        console.log("Hinh ne: ", file);
        (async () => {
            image = await uploadFiles(file.path, file.filename);
            //console.log(image);
        })();

    } catch (error) {
        console.log('Add new product error: ', error)
        next(error);
    }
})
//xu ly cap nhat sp
router.post('/:id/edit', [uploadFile.single('image'),], async (req, res, next) => {
    try {
        let { body, file } = req;
        let { id } = req.params;
        if (file) {
            let image = `http://${CONFIG.CONSTANTS.IP}:3000/images/${file.filename}`;
            body = { ...body, image: image }
        }
        let { name, price, quantity, image, category } = body;
        console.log(body);
        await productController
            .updateProduct(id, name, price, quantity, image, category);
        return res.redirect('/cpanel/product');
    } catch (error) {
        console.log('Add new product error: ', error)
        next(error);
    }
})

// hien thi trang cap nhat sp /cpanel/product/:id/edit
router.get('/:id/edit', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await productController.getProductById(id);
        const categories = await categoryController.getAllCategories();
        console.log(product);
        console.log(categories);
        for (let index = 0; index < categories.length; index++) {
            const element = categories[index];
            categories[index].selected = false;
            if (element._id.toString() == product.category.toString()) {
                categories[index].selected = true;
            }
        }
        res.render('product/edit', { product, categories });
    } catch (error) {
        next(error);
    }
});

module.exports = router;