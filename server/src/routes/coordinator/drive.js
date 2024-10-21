const express = require('express');
const router = express.Router();
const Drive = require('../../models/driveModel');
const protectCoordinatorAuth = require('../../middleware/coordinatorAuth'); // Middleware for coordinator auth
const User = require('../../models/studentModel');
const StudentCred = require('../../models/studentCred');
const Student  = require('../../models/studentModel');
router.post('/create', protectCoordinatorAuth, async (req, res) => {
    try {
        const {
            drive_name,
            company_name,
            company_logo,
            about,
            type_of_role,
            location,
            ctc,
            duration,
            number_of_positions,
            deadline,
            drive_date,
            rounds, // Directly use this
            criteria
        } = req.body;

        const newDrive = new Drive({
            drive_name,
            company_name,
            company_logo,
            about,
            type_of_role,
            location,
            ctc,
            duration,
            number_of_positions,
            deadline,
            drive_date,
            rounds, 
            criteria,
            coordinator: req.user.id // Assuming coordinator is authenticated and req.user contains the coordinator info
        });

        await newDrive.save();
        res.status(201).json({ message: 'Drive created successfully', drive: newDrive });

    } catch (error) {
        console.error('Error creating drive:', error.message);
        res.status(500).json({ error: 'Failed to create drive' });
    }
});

router.put('/update/:id', protectCoordinatorAuth, async (req, res) => {
    try {
        const driveId = req.params.id;

        // Find the drive to ensure it belongs to the logged-in coordinator
        const drive = await Drive.findOne({ _id: driveId, coordinator: req.user.id });
        if (!drive) {
            return res.status(404).json({ message: 'Drive not found or unauthorized' });
        }

        const updateData = {
            drive_name: req.body.drive_name,
            company_name: req.body.company_name,
            company_logo: req.body.company_logo,
            about: req.body.about,
            type_of_role: req.body.type_of_role,
            location: req.body.location,
            ctc: req.body.ctc,
            duration: req.body.duration,
            number_of_positions: req.body.number_of_positions,
            deadline: req.body.deadline,
            drive_date: req.body.drive_date,
            rounds: req.body.rounds, 
            criteria: req.body.criteria
        };

        Object.keys(updateData).forEach(key => updateData[key] === undefined || updateData[key] === null && delete updateData[key]);

        const updatedDrive = await Drive.findByIdAndUpdate(driveId, updateData, { new: true });

        res.json({ message: 'Drive updated successfully', drive: updatedDrive });
    } catch (error) {
        console.error('Error updating drive:', error.message);
        res.status(500).json({ error: 'Failed to update drive' });
    }
});

router.delete('/delete/:id', protectCoordinatorAuth, async (req, res) => {
    try {
        const driveId = req.params.id;

        const drive = await Drive.findOne({ _id: driveId, coordinator: req.user.id });
        if (!drive) {
            return res.status(404).json({ message: 'Drive not found or unauthorized' });
        }

        await drive.remove(); // Remove the drive
        res.json({ message: 'Drive deleted successfully' });
    } catch (error) {
        console.error('Error deleting drive:', error.message);
        res.status(500).json({ error: 'Failed to delete drive' });
    }
});


const getUsersByUsernames = async (usernames) => {
    try {
        const studentCreds = await StudentCred.find({ username: { $in: usernames } });
        const credIds = studentCreds.map(cred => cred._id);
        return await User.find({ creds: { $in: credIds } });
    } catch (error) {
        console.error("Error fetching users by usernames:", error.message);
        throw error;
    }
};

router.put('/update-selected/:driveId/:roundNumber', protectCoordinatorAuth, async (req, res) => {
    try {
        const { driveId, roundNumber } = req.params;
        const { usernames } = req.body;

        const drive = await Drive.findOne({ _id: driveId, coordinator: req.user.id });
        if (!drive) {
            return res.status(404).json({ message: 'Drive not found or unauthorized' });
        }

        const round = drive.rounds.find(round => round.round_number === parseInt(roundNumber));
        if (!round) {
            return res.status(404).json({ message: 'Round not found' });
        }

        const users = await getUsersByUsernames(usernames);
        const userIds = users.map(user => user._id);

        // Use a Set to ensure unique entries
        round.selected_students = Array.from(new Set([
            ...(round.selected_students || []),
            ...userIds,
        ]));

        const isLastRound = roundNumber == drive.rounds.length;

        await Student.updateMany(
            { 'applied_drives.drive_id': driveId },
            {
                $set: {
                    'applied_drives.$[elem].status': {
                        $cond: {
                            if: { $in: ['$$elem.student_id', round.selected_students] },
                            then: isLastRound ? 'Accepted' : 'Shortlisted',
                            else: 'Rejected'
                        }
                    }
                }
            },
            {
                arrayFilters: [{ 'elem.drive_id': driveId }]
            }
        );


        await drive.save();
        res.json({ message: 'Students added successfully for the round', drive });
    } catch (error) {
        console.error('Error adding students:', error.message);
        res.status(500).json({ error: 'Failed to add students' });
    }
});

router.delete('/update-selected/:driveId/:roundNumber', protectCoordinatorAuth, async (req, res) => {
    try {
        const { driveId, roundNumber } = req.params;
        const { usernames } = req.body;

        const drive = await Drive.findOne({ _id: driveId, coordinator: req.user.id });
        if (!drive) {
            return res.status(404).json({ message: 'Drive not found or unauthorized' });
        }

        const round = drive.rounds.find(round => round.round_number === parseInt(roundNumber));
        if (!round) {
            return res.status(404).json({ message: 'Round not found' });
        }

        const users = await getUsersByUsernames(usernames);
        const userIds = users.map(user => user._id);

        round.selected_students = (round.selected_students || []).filter(
            studentId => !userIds.includes(studentId)
        );

        await drive.save();
        res.json({ message: 'Students removed successfully for the round', drive });
    } catch (error) {
        console.error('Error removing students:', error.message);
        res.status(500).json({ error: 'Failed to remove students' });
    }
});











module.exports = router;

// Sample request body for creating a drive
// {
//     "drive_name": "Summer Internship 2024",
//     "company_name": "Tech Innovations Inc.",
//     "company_logo": "https://example.com/logo.png",
//     "about": "Join us for an exciting summer internship program where you will work on innovative projects.",
//     "type_of_role": "Internship",
//     "location": ["New York", "Remote"],
//     "ctc": "₹30,000 per month",
//     "duration": "3 months",
//     "number_of_positions": 5,
//     "deadline": "2024-05-15T00:00:00Z",
//     "drive_date": "2024-06-01T00:00:00Z",
//     "rounds": [
//         {
//             "round_number": 1,
//             "round_name": "Technical Interview",
//             "description": "A technical interview focusing on your programming skills."
//         },
//         {
//             "round_number": 2,
//             "round_name": "HR Interview",
//             "description": "An HR interview to assess your fit for the company."
//         }
//     ],
//     "criteria": {
//         "tenth_percentage": 85,
//         "twelfth_percentage": 90,
//         "graduation_degree": "B.Tech",
//         "graduation_year": [2024],
//         "cgpa": 8.5,
//         "stream": ["CSE", "ECE"],
//         "work_experience_count": 0
//     }
// }
