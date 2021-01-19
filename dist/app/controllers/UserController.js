"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _apiMarvel = require('../services/apiMarvel'); var _apiMarvel2 = _interopRequireDefault(_apiMarvel);
// import SetPagination from '../../setPagination';

// const page = new SetPagination();

// `/${page}`

class UserController {
    async index(request, response) {
        try {
            // const { offset } = pagination;

            const { data } = await _apiMarvel2.default.get();

            return response.json(data);
        } catch (error) {
            return response.status(error.status || 400).json(error);
        }
    }

    /* async show(request, response) {
        try {
            const {page} = request.params;

            const { data } = await apiMarvel.get(`/${page}`);

            return response.json(data);
        } catch (error) {
            return response.status(error.status || 400).json(error);
        }
    } */
}

exports. default = new UserController();
