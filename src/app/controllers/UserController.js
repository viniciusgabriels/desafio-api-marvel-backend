import ApiMarvel from '../services/ApiMarvel';

class UserController {
    async index(request, response) {
        try {
            const { page, title } = request.query;
            const data = await ApiMarvel.getCharacters(
                page != null ? page : 1,
                title
            );

            return response.json(data);
        } catch (error) {
            return response.status(error.status || 400).json(error);
        }
    }

    async show(request, response) {
        try {
            const { id } = request.params;
            const data = await ApiMarvel.getCharacter(id);

            return response.json(data);
        } catch (error) {
            return response.status(error.status || 400).json(error);
        }
    }
}

export default new UserController();
