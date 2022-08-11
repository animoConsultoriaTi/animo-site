const { Router } = require('express');

const routes = Router();

routes.get('*', (request, response) => {
  return response.render('404', {
    title: 'Não Encontrado',
  });
});

module.exports = routes;
