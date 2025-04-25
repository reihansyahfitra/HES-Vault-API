var express = require('express');
var router = express.Router();
const { authenticate } = require('../middlewares/authMiddleware');
const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

/* GET users listing. */
router.get('/', authenticate, async function(req, res, next) {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        team: {
          select: {
            name: true
          }
        },
        created_at: true
      }
    });
    res.json(users);
  } catch (e) {
    next(e);
  }
});

router.get('/me', authenticate, async function(req, res, next) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        profile_picture: true,
        team: {
          select: {
            id: true,
            name: true,
            slug: true
          }
        },
        created_at: true
      }
    });
    if (!user) return next(createError(404, 'User not found'));
    res.json(user);
  } catch (e) {
    next(e);
  }
})

module.exports = router;
