import axios from 'axios';

export const ocrBeforeUpload = async (fileData, authtoken) => 
     await axios.post(process.env.REACT_APP_API+'/upload', fileData
     , {
        headers: {
            authtoken

        }

     });