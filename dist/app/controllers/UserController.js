"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }var _ApiMarvel = require('../services/ApiMarvel'); var _ApiMarvel2 = _interopRequireDefault(_ApiMarvel);

class UserController {
    async index(request, response) {
        try {
            const { page, title } = request.params;
            const { data } = await _ApiMarvel2.default.getCharacters(_nullishCoalesce(page, () => ( 1)), title);

            return response.json(data);
        } catch (error) {
            return response.status(error.status || 400).json(error);
        }
    }

    async show(request, response) {
        try {
            const { id } = request.params;
            const data = await _ApiMarvel2.default.getCharacter(id);

            return response.json(data);
        } catch (error) {
            return response.status(error.status || 400).json(error);
        }
    }
}

exports. default = new UserController();
