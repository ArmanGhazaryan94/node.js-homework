import products from './products.json';

exports.getAllProducts = (req, res) => {
    res.json(products);
};

exports.getProductByID = (req, res) => {
    const ID = parseInt(req.params.id);
    const product = products.find(el => el.id === ID);
    if(product){
        res.json(product);
    } else {
        res
            .status(404)
            .json({
                code: 404,
                message: 'Not found'
            })
    }
};

exports.getProductReviews = (req, res) => {
    const ID = parseInt(req.params.id);
    const product = products.find(el => el.id === ID);
    if(product){
        const reviews = [ product.title, product.body ];
        res.json({ reviews });
    } else {
        res
            .status(404)
            .json({
                code: 404,
                message: 'Not found'
            })
    }
};

exports.createProduct = (req, res) => {
    const newProduct = {
        ...req.body,
        id: products[products.length - 1].id + 1,
    };
    products.push(newProduct);
    res.json(newProduct);
};