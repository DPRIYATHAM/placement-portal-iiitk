const express = require('express');
const router = express.Router();
const protectAuth = require('../../middleware/coordinatorAuth'); // Assuming you have a middleware to protect coordinator routes
const Coordinator = require('../../models/coordinatorModel');

// Fetch coordinator info
router.get('/', protectAuth, async (req, res) => {
    try {
        const coordinator = await Coordinator.findById(req.user.id).select('-creds.password -creds.lastLogin');

        // if (!coordinator) {
        //     return res.status(404).send('Coordinator not found');
        // }

        res.json({
            name: coordinator.name,
            email_id: coordinator.email_id,
            phone_no: coordinator.phone_no,
            company_name: coordinator.company_name,
        });
    } catch (error) {
        console.error('Error fetching coordinator:', error);
        res.status(500).send('Error fetching coordinator');
    }
});

// Update coordinator info
router.post('/', protectAuth, async (req, res) => {
    try {
        const updateData = {
            name: req.body.name,
            email_id: req.body.email_id,
            phone_no: req.body.phone_no,
            company_name: req.body.company_name,
        };

        // Remove undefined or null fields
        Object.keys(updateData).forEach(key => updateData[key] === undefined || updateData[key] === null && delete updateData[key]);

        const coordinator = await Coordinator.findByIdAndUpdate(req.user.id, updateData, { new: true });

        // if (!coordinator) {
        //     return res.status(404).send('Coordinator not found');
        // }

        res.json({
            message: 'Profile updated successfully',
            coordinator: coordinator
        });
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).send('Server error');
    }
});

module.exports = router;
