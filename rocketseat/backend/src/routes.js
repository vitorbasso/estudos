const express = require('express');

const routes = express.Router();


//GET POST PUT DELETE

//REQ.QUERY = Acessar query params (para filtros - GET)
//REQ.PARAMS = Acessar route params (para edição, delete, put)
//REQ.BODY = Accesar corpo de requisição (Para criar e editar registros, post)


routes.post('/users', (req, res) => {
    return res.json(req.body);
});

module.exports = routes;
