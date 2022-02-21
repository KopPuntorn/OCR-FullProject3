const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({

    docFile: {
        type: String
    },


    ulInID: {
        type: Number
    },

    //วันที่
    ulDate: {
        type: Date
    },

    ulLocate: {
        type: String

    },

    //ลงวันที่
    ulDateGen: {
        type: Date
    },
    //จาก
    ulFrom: {
        type: String
    },
    //ถึง
    ulTo: { 
        type: String

    },

    //ชื่อเรื่อง
    ulTitle: {
        type: String
    }
    

    
}, {timestamps:true}
);

module.exports = Uploads = mongoose.model('uploads', uploadSchema);