import Sequelize from 'sequelize';
import products from './products.json';
import ProductModel from '../models/Product';
import sequelize from '../database/connection';

const Product = ProductModel(sequelize, Sequelize);

exports.getAllProducts = (req, res) => {
    Product
        .findAll()
        .then(data => res.json(data))
        .catch(error => res.send(error));
};

exports.getProductByID = (req, res) => {
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

exports.getProductReviews = (req, res) => {
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

exports.createProduct = (req, res) => {
    const { title, body } = req.body;
    const newProduct = {
        title,
        body
    };
    Product.create(newProduct)
        .then(data => res.json(data))
        .catch(error => res.send(error));
};