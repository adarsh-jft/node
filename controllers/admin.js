const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    console.log('hi')

    res.render('admin/edit_product', { docTitle2: 'Add Products', path: '/admin/add_product', editing: false })
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageURL = req.body.imageURL;
    const description = req.body.description;
    const price = req.body.price;
    // console.log(price)
    const product = new Product(title, imageURL, description, price);
    product.save();
    res.redirect('/');
}

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return req.direct('/')
    }
    res.render('admin/edit_product', { docTitle2: 'Edit Products', path: '/admin/edit_product', editing: editMode })
};


exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products', { prods: products, path: '/products' });
    })
};