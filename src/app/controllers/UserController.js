import apiMarvel from '../services/apiMarvel';
// import SetPagination from '../../setPagination';

// const page = new SetPagination();

// `/${page}`

class UserController {
    async index(request, response) {
        try {
            // const { offset } = pagination;

            const { data } = await apiMarvel.get();

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

export default new UserController();
