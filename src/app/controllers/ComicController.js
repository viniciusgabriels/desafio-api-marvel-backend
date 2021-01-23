import ApiMarvel from '../services/ApiMarvel';

class ComicController {
    async show(request, response) {
        try {
            const { id } = request.params;
            const data = await ApiMarvel.getComic(id);

            return response.json(data);
        } catch (error) {
            return response.status(error.status || 400).json(error);
        }
    }
}

export default new ComicController();
