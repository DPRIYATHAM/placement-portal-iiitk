const express = require('express');
const bcrypt = require('bcryptjs');
const StudentCred = require('../../models/studentCred'); 
const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newStudentCred = new StudentCred({
            username,
            password: hashedPassword,
            lastLogin: new Date(),
        });

        await newStudentCred.save();
        res.status(201).json({ message: 'Registration successful, please complete your profile.' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


module.exports = router;