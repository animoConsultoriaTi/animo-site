
import { Router } from 'express';
import { prismic } from '../../utils/prismic.js';

export const routes = Router();


routes.get('/', async (request, response) => {
  try {
    const servicesRaw = await prismic.getAllByType('service', {
      orderings: ["my.service.title"]
    });
    const services = servicesRaw.map(s => {
      return s.data;
    });
    
    const partnersRaw = await prismic.getAllByType('partner');
    const partners = partnersRaw.map(p => {
      return p.data;
    });
    
    return response.render('pages/index', {
      title: "Ânimo Consultoria - Niterói-RJ",
      partners,
      services
    });
  } catch(error) {
    return response.status(500).render('error', {
      error
    })
  }
})

routes.get('*', async (request, response) => {
  try {
    const data = await prismic.getAllByType('service');
    const services = data.map(s => {
      return s.data;
    });
    
    return response.render('404', {
      title: 404,
      services
    });
  } catch(error) {
    return response.status(500).render('error', {
      error
    })
  }
});

