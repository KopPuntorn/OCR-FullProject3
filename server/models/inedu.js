const mongoose = require('mongoose');


const InEduSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        
    },
    pic: {
        type: String
    },
    dateFirst: {
        type: String
    },
    numTo: {
        type: Number
    },
    locate: {
        type: String
        
    },
    dateGen: {
        type: String
    
    },
    from: {
        type: String
      
    },
    to: {
        type: String,
        
    },
    date: {
        type: Date,
        default: Date.now
    }

}, { timestamps: true});

module.exports = InEdu = mongoose.model('inedu', InEduSchema);