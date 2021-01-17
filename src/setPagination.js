export default class SetPagination {
    constructor() {
        this.offset = 0;
        this.limit = 100;
        this.page = '';
    }

    pagination() {
        this.page = `&limit=${this.limit}&offset=${this.offset}`;
    }
}
