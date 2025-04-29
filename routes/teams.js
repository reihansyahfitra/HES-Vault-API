const express = require('express');
const router = express.Router();
const teamController = require('../controller/teamController');
const { authenticate } = require('../middlewares/authMiddleware');
const { isAdmin } = require('../middlewares/adminAuthMiddleware');
const { validateTeamCreate, validateTeamUpdate } = require('../middlewares/teamValidation');

// Get all teams (admin only)
router.get('/', authenticate, isAdmin, teamController.getAllTeams);

// Get team by ID
router.get('/:id', authenticate, isAdmin, teamController.getTeamById);

// Create new team (admin only)
router.post('/', authenticate, isAdmin, validateTeamCreate, teamController.createTeam);

// Update team (admin only)
router.put('/:id', authenticate, isAdmin, validateTeamUpdate, teamController.updateTeam);

// Delete team (admin only)
router.delete('/:id', authenticate, isAdmin, teamController.deleteTeam);

// Get users in a team (admin only)
router.get('/:id/users', authenticate, isAdmin, teamController.getTeamUsers);

module.exports = router;