const express = require('express');
const router = express.Router();
const speciesController = require('../controllers/speciesController');

// Define routes for different CRUD operations
router.route('/')
    .get(speciesController.getAllSpecies)
    .post(speciesController.createSpecies);


// will need to update the routes to handle updating the subdocuments like the following: spores, fruiting bodies, etc.
router.route('/:id')
    .get(speciesController.getSpeciesById)
    .patch(speciesController.updateSpecies)
    .delete(speciesController.deleteSpecies);

module.exports = router;
