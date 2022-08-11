const { Router } = require('express');

const prisma = require('../database');

const routes = Router();

routes.get('*', async (request, response) => {
  const services = await prisma.service.findMany();

  return response.render('404', {
    title: 404,
    services,
  });
});

module.exports = routes;
