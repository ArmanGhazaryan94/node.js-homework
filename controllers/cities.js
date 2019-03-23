import City from '../models/CitySchema';
import Product from "../models/ProductSchema";

const getAllCities = (req, res) => {
    City
        .find()
        .then(data => res.json(data))
        .catch(err => res.send())
};

const getRandomCity = (req, res) => {
    City
        .count()
        .exec((err, count) => {
            const random = Math.floor(Math.random() * count);

            City
                .findOne()
                .skip(random)
                .exec((err, result) => {
                    res.json(result)
                })
        })

};

const createCity = (req, res) => {
    const { name, capital, location, country } = req.body;
    const newCity = {
        name,
        capital,
        location,
        country
    };
    const city = new City(newCity);
    city
        .save()
        .then(data => res.json(data))
        .catch(err => res.send(err))

};

const updateCity = (req, res) => {
    const { id } = req.params;
    City
        .findByIdAndUpdate(id, req.body)
        .then(data => res.json(data))
        .catch(err => res.send(err))

};

const deleteCity = (req, res) => {
    const { id } = req.params;
    City
        .findByIdAndDelete(id)
        .then(data => data
            ? res.json(data)
            : res.status(404).json({
                code: 404,
                message: 'not found'
            }))
        .catch(err => res.send(err))

};

export {
    createCity,
    updateCity,
    deleteCity,
    getAllCities,
    getRandomCity
}