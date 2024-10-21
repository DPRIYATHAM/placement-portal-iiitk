const express = require('express');
const bcrypt = require('bcryptjs');
const CoordinatorCred = require('../../models/coordinatorCred'); 
const Coordinator = require('../../models/coordinatorModel');
const protectRoute = require('../../middleware/coordinatorAuth');
const router = express.Router();



router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingUser = await CoordinatorCred.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newCred = new CoordinatorCred({
            username,
            password: hashedPassword,
            lastLogin: new Date(),
        });

        await newCred.save();
        res.status(201).json({ message: 'User registered successfully', credId: newCred._id });
    } catch (error) {
        res.status(500).json({ error: 'Failed to register user' });
    }
});

router.post('/complete-profile',protectRoute, async (req, res) => {
    const { credId, name, email_id, phone_no, company_name } = req.body;
    try {
        const cred = await CoordinatorCred.findById(credId);
        if (!cred) {
            return res.status(404).json({ error: 'Credentials not found' });
        }

        const existingProfile = await Coordinator.findOne({ creds: userId });

        if (existingProfile) {
            return res.status(409).json({
                message: "Profile already exists. No need to complete again."
            });
        }


        const newCoordinator = new Coordinator({
            creds: cred._id,
            name,
            email_id,
            phone_no,
            company_name,
        });

        await newCoordinator.save();
        res.status(201).json({ message: 'Coordinator profile completed' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to complete profile' });
    }
});


module.exports = router;