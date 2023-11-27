const Species = require('../models/speciesSchema');
const asyncHandler = require('express-async-handler');

// @desc    Get all species
// @route   GET /species
// @access  private
const getAllSpecies = asyncHandler(async (req, res) => {
    const species = await Species.find().lean();
    if (!species.length) {
        return res.status(404).json({ message: 'No species found' });
    }
    res.json(species);
});

// @desc    Get a single species by ID
// @route   GET /species/:id
// @access  private
const getSpeciesById = asyncHandler(async (req, res) => {
    const species = await Species.findById(req.params.id).lean();
    if (!species) {
        return res.status(404).json({ message: 'Species not found' });
    }
    res.json(species);
});

// @desc    Create a new species
// @route   POST /species
// @access  private
const createSpecies = asyncHandler(async (req, res) => {
    const { name, spores, mycelium, fruitbody } = req.body;
    // Add validation as needed
    const newSpecies = await Species.create({ name, spores, mycelium, fruitbody });
    res.status(201).json(newSpecies);
});

// @desc    Update a species
// @route   PATCH /species/:id
// @access  private
const updateSpecies = asyncHandler(async (req, res) => {
    const updatedSpecies = await Species.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean();
    if (!updatedSpecies) {
        return res.status(404).json({ message: 'Species not found' });
    }
    res.json(updatedSpecies);
});

// @desc    Delete a species
// @route   DELETE /species/:id
// @access  private
const deleteSpecies = asyncHandler(async (req, res) => {
    const deletedSpecies = await Species.findByIdAndDelete(req.params.id);
    if (!deletedSpecies) {
        return res.status(404).json({ message: 'Species not found' });
    }
    res.status(200).json({ message: 'Species deleted successfully' });
});

module.exports = { getAllSpecies, createSpecies, getSpeciesById, updateSpecies, deleteSpecies };
