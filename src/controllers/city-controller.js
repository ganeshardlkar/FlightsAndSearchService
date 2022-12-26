const { CityService } = require('../services/index');

const cityService = new CityService();

// POST - data -> req.body
const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully created a city',
            error: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error creating city',
            error: error
        });
    }
}
// DELETE - /city/:id
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a city',
            error: {}
        });
    } catch (error) {
        console.log(error);
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error deleting city',
            error: error
        });
    }
}

// GET - /city/:id
const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a city',
            error: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error getting city',
            error: error
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully updated a city',
            error: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error updating city',
            error: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message: 'Successfully fetched all cities',
            error: {}
        });
    } catch(error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get all cities',
            error: error
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}