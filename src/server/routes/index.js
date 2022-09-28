import { Router } from 'express';
import { strapi } from '../../utils/strapi.js';

export const routes = Router();

routes.get('/', async (request, response) => {
  try {
    const {
      data: { data: partners },
    } = await strapi.get('partners');

    const {
      data: { data: services },
    } = await strapi.get('services?sort=title');

    return response.render('pages/index', {
      title: 'Ânimo Consultoria - Niterói-RJ',
      partners,
      services,
    });
  } catch (error) {
    return response.status(500).render('error', {
      error,
    });
  }
});

routes.get('*', async (request, response) => {
  try {
    return response.render('404', {
      title: 404,
      services: [],
    });
  } catch (error) {
    return response.status(500).render('error', {
      error,
    });
  }
});
