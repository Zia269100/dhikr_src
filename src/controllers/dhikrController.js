const Dhikr = require('../models/Dhikr');

// Get global total
exports.getTotal = async (req, res) => {
    try {
        let doc = await Dhikr.findOne();
        if (!doc) {
            // If no record exists, create it
            doc = await Dhikr.create({ total: 0 });
        }
        res.json({ total: doc.total });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

// Save user's dhikr to global count
exports.saveDhikr = async (req, res) => {
    const { count } = req.body;

    if (!count || count <= 0) {
        return res.status(400).json({ message: 'Invalid count' });
    }

    try {
        let doc = await Dhikr.findOne();
        if (!doc) {
            doc = await Dhikr.create({ total: count });
        } else {
            doc.total += count;
            await doc.save();
        }
        res.json({ message: 'Dhikr saved', total: doc.total });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};
