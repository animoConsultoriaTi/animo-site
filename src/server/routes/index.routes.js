const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
  response.render('pages/index', {
    title: 'Ânimo Consultoria - Niterói-RJ',
  });
});

module.exports = router;
