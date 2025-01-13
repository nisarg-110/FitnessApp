const Class = require('../models/Class');

// POST: Add a new class
async function addClass(req, res) {
    const { name, trainer, category, duration, capacity } = req.body;
    if (duration <= 0 || capacity <= 0) {
        return res.status(400).send('Invalid input');
    }
    const newClass = new Class({ name, trainer, category, duration, capacity });
    await newClass.save();
    res.status(201).send(newClass);

};

// GET: Retrieve all classes
async function getClasses(req, res) {
    const classes = await Class.find();
    res.json(classes);
};

// PUT: Update a class by ID
async function updateClassById(req, res) {
    const { id } = req.params;
    const updates = req.body;
    const updatedClass = await Class.findByIdAndUpdate(id, updates, { new: true });
    res.json(updatedClass);
};

// DELETE: Delete a class by ID
async function deleteClassById(req, res) {
    const { id } = req.params;
    await Class.findByIdAndDelete(id);
    res.status(204).send();
};

module.exports = {
    addClass,
    updateClassById,
    deleteClassById,
    getClasses
}