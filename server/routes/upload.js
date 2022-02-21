const express = require('express')

const router = express.Router();

const { uploadFile } = require('../middleware/uploadfile');
const { upload } = require('../controllers/upload');
const { authCheck, adminCheck } = require('../middleware/auth');
const { ocr } = require('../controllers/ocr');
const { beforeupload } = require('../middleware/beforeupload')


//@route    localhost:5000/api/upload/beforeupload
//@method   POST
//@access   Public


//@route    localhost:5000/api/upload
//@method   POST
//@access   Public
router.post('/upload', authCheck, beforeupload, ocr);



//@route    localhost:5000/api/upload
//@method   GET
//@access   Public
/* router.get('/upload', listEvent);

//@route    localhost:5000/api/upload/:id
//@method   GET
//@access   Public
router.put('/upload/:id',readEvent);

//@route    localhost:5000/api/event/upload/:id
//@method   PUT
//@access   Public
router.get('/upload/:id', updateEvent);
//@route    localhost:5000/api/event/upload/:id
//@method   DELETE
//@access   Public
router.get('/upload/:id',removeEvent); */


module.exports = router;