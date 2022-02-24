const express = require('express');
const router = express.Router();
const { authCheck } = require('../middleware/auth')

const { create,
        list, 
        read, 
        update, 
        remove
     
} = require('../controllers/outmoney');
const { uploadFile } = require('../middleware/uploadfile')

//@route    localhost:5000/api/event
//@method   POST
//@access   Public
router.get('/outmoney', authCheck, list);

//@route    localhost:5000/api/event
//@method   GET
//@access   Public
router.get('/outmoney/:id', authCheck, read);

//@route    localhost:5000/api/event
//@method   GET
//@access   Public
router.post('/outmoney', authCheck, uploadFile , create);

//@route    localhost:5000/api/event
//@method   PUT
//@access   Public
router.put('/outmoney/:id', authCheck, update);
//@route    localhost:5000/api/event
//@method   DELETE
//@access   Public
router.delete('/outmoney/:id', authCheck, remove);
module.exports = router;