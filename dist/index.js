"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _router = require('./router'); var _router2 = _interopRequireDefault(_router);

const app = _express2.default.call(void 0, );
const port = process.env.PORT || 3030;

app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: false }));
app.use(_cors2.default.call(void 0, ));

app.use(_router2.default);

app.listen(port);
