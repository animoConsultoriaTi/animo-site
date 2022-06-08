const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
  response.render('pages/about', {
    title: 'Ânimo Consultoria - Niterói-RJ',
  });
});

module.exports = router;
