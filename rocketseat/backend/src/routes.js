const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');


const routes = express.Router();
const upload = multer(uploadConfig);

//GET POST PUT DELETE

//REQ.QUERY = Acessar query params (para filtros - GET)
//REQ.PARAMS = Acessar route params (para edição, delete, put)
//REQ.BODY = Accesar corpo de requisição (Para criar e editar registros, post)

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;
