const Person = require('../models/person')
const fs = require('fs');


exports.create = async(req, res) => {
    try {
        const { data } = req.body;
        const newData = { 
            name: data[0],
            pic : req.file.filename,
            dateFirst: data[1],
            numTo: data[2],
            locate: data[3],
            dateGen: data[4],
            from: data[5],
            to: data[6],
        }
        
        res.json(await new Person(newData).save())
    } catch (err) {
        console.log(err);
        res.status(400).send('Create Person Failed')
    }
}
exports.list = async(req, res) => {
    res.json(await Person.find({}).sort({ createdAt: -1}).exec())
}
exports.read = async(req, res) => {
    res.send('Hello read Event')
}
exports.update = async(req, res) => {
    res.send('Hello update Event')
}
exports.remove = async(req, res) => {
    try {
        const deleted = await Person.findOneAndDelete({ _id: req.params.id})
        await fs.unlink(`./public/uploads/${deleted.pic}`,(err) => {
            if (err){
                console.log(err)
            } else {
                console.log('remove success')
            }
        })
        res.json(deleted)
    } catch (err) {
        console.log(err);
        res.status(400).send('Remove Person Failed')
    }
}