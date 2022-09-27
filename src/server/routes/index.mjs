
import { Router } from "express";
import { prismic } from "../../utils/prismic.js";

export const routes = Router();

routes.get('*', async (request, response) => {
  try {
    const data = await prismic.getAllByType("service");
    const services = data.map(s => {
      return s.data;
    });
    
    return response.render('404', {
      title: 404,
      services
    });
  } catch(error) {
    return response.render('error', {
      title: "Error",
      error
    })
  }
});

