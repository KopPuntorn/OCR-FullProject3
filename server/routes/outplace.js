const express = require('express');
const router = express.Router();
const { authCheck } = require('../middleware/auth')

const { create,
        list, 
        read, 
        update, 
        remove
     
} = require('../controllers/outplace');
const { uploadFile } = require('../middleware/uploadfile')

//@route    localhost:5000/api/event
//@method   POST
//@access   Public
router.get('/outplace', authCheck, list);

//@route    localhost:5000/api/event
//@method   GET
//@access   Public
router.get('/outplace/:id', authCheck, read);

//@route    localhost:5000/api/event
//@method   GET
//@access   Public
router.post('/outplace', authCheck, uploadFile , create);

//@route    localhost:5000/api/event
//@method   PUT
//@access   Public
router.put('/outplace/:id', authCheck, update);
//@route    localhost:5000/api/event
//@method   DELETE
//@access   Public
router.delete('/outplace/:id', authCheck, remove);
module.exports = router;