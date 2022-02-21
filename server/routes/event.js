const express = require('express');
const router = express.Router();

const { createEvent,
        listEvent, 
        readEvent, 
        updateEvent, 
        removeEvent 
} = require('../controllers/event');

//@route    localhost:5000/api/event
//@method   POST
//@access   Public
router.post('/event', createEvent);

//@route    localhost:5000/api/event
//@method   GET
//@access   Public
router.get('/event/:id', listEvent);

//@route    localhost:5000/api/event
//@method   GET
//@access   Public
router.put('/event/:id',readEvent);

//@route    localhost:5000/api/event
//@method   PUT
//@access   Public
router.get('/event/:id', updateEvent);
//@route    localhost:5000/api/event
//@method   DELETE
//@access   Public
router.get('/event/:id',removeEvent);
module.exports = router;