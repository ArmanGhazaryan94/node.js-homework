import Product from '../models/ProductSchema';

const getAllProducts = (req, res) => {
    Product
        .find()
        .then(data => res.json(data))
        .catch(error => res.send(error));
};

const getProductByID = (req, res) => {
    const ID = parseInt(req.params.id);
    Product.findById(ID)
        .then(data => data
            ? res.json(data)
            : res
                .status(404)
                .json({
                    code: 404,
                    message: 'Not found'
                })
        )
        .catch(error => res.send(error))
};

const getProductReviews = (req, res) => {
    const ID = parseInt(req.params.id);
    Product.findById(ID)
        .then(data => data
            ? res.json([ data.title, data.body ])
            : res
                .status(404)
                .json({
                    code: 404,
                    message: 'Not found'
                })
        )
        .catch(error => res.send(error))
};

const deleteProduct = (req, res) => {
    const ID = parseInt(req.params.id);
    Product.findByIdAndDelete(ID)
        .then(data => data
            ? res.json([ data.title, data.body ])
            : res
                .status(404)
                .json({
                    code: 404,
                    message: 'Not found'
                })
        )
        .catch(error => res.send(error))
};

const createProduct = (req, res) => {
    const { title, body } = req.body;
    const newProduct = {
        title,
        body
    };
    const product = new Product(newProduct);
    product
        .save()
        .then(data => res.json(data))
        .catch(err => res.send(err))
};

export {
    createProduct,
    getProductReviews,
    getProductByID,
    getAllProducts,
    deleteProduct
}