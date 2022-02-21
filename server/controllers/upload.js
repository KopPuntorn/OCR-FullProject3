
const Uploads = require('../models/upload')

//@route    localhost:5000/api/upload
//@method   POST
//@access   Private
exports.upload = async(req, res) => {
    
    try {
        

        console.log(req.body)
        
        

        
        await new Uploads(req.body).save();
        console.log('Insert Success')
    } catch (err) {
        //err
        console.log(err.message)
        res.status(500).send('Server Error!!')
    }
}