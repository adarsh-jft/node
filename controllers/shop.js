const Product = require('../models/product');
const Cart = require('../models/cart');



exports.getProduct = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product_list', { prods: products, docTitle: 'Shop', path: '/products' });

    });
    // console.log();
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
}

exports.getProductID = (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id, product => {
        res.render('shop/product_detail', { product: product, path: '/products' })
    })
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', { prods: products, docTitle: 'Shop', path: '/', hasProducts: products.length > 0 });

    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/carts', { path: '/carts' })
}

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, (product) => {
        Cart.addProduct(prodId, product.prodId)
    })
    res.redirect('/carts')
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', { path: '/checkout' })
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', { path: '/orders' })
}