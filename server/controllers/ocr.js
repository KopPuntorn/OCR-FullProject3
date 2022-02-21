const multer = require('multer')
const { createWorker } = require('tesseract.js');
const worker = createWorker();
const fs = require('fs');







exports.ocr = async(req, res) => {
        //const { data } = req.body;


        await worker.load();
        await worker.loadLanguage('tha');
        await worker.initialize('tha');
        console.log("Recognizing...");


/*         const { data: { text } } = await worker.recognize(/Users/false/Desktop/OCR-FullProject3/server/public/beforeOcr/${req.file.filename})
        await worker.terminate()
/*         let re = new RegExp('ศ ธ\s.')
        let newRe = text.match(re) /
/         console.log("Recognized text:", text);
        res.json(text);  */
        const newData = { 
                dateFirst: '25/08/2558',
                numTo: 'ศ ธ 0514.10/6524',
                locate: 'ศ ธ 0514.10/6524',
                dateGen: '28/08/2558',
                from: 'บ ั ณ ฑ ิ ต ว ิ ท ย า ล ั ย',
                to: 'ค ณะ ว ิ จ เย จ ก า ส ต ร์',
                name: 'ก า ร เส น อ ชื ่ อ ผู ้ ร ั บ ท ุ น ว ิ จ ั ย ส ํ า ห ร ั บ ค ณา จ า ร ย ์ บ ั ณ ฑิ ต ศึ ก ษา ฯ ป ร ะ จ ํ า ป ี ก า ร ศึ ก ษา 2558',
            }
        res.json(newData);





}