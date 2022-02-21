const express = require('express');
const router = express.Router();

//@route    localhost:5000/api/training
//@method   GET
//@access   Public
router.get('/training',(req, res) => {
    res.send('hello training 555')
})

module.exports = router;