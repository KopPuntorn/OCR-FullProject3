const multer = require('multer')
const { createWorker } = require('tesseract.js');
const worker = createWorker();
const fs = require('fs');



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/beforeOcr')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)}

})





exports.beforeupload = multer({ storage: storage }).single('file')