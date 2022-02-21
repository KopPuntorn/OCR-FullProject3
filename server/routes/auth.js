const express = require('express');
//const { currentUser } = require('../../client/src/functions/auth');
const router = express.Router();


const { register, login, currentUser } = require('../controllers/auth');
//middleware
const { authCheck, adminCheck } = require('../middleware/auth');




//@route    localhost:5000/api/register
//@method   POST
//@access   Public

router.post('/register', register);


//@route    localhost:5000/api/login
//@method   POST
//@access   Public
router.post('/login', login);


//@route    localhost:5000/api/current-user
//@method   POST
//@access   Public
router.post('/current-user', authCheck, currentUser);

//@route    localhost:5000/api/current-admin
//@method   POST
//@access   Public
router.post('/current-admin', authCheck,  adminCheck, currentUser);


module.exports = router;