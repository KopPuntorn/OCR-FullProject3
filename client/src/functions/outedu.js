import axios from 'axios';

export const createOutEdu= async (formData, authtoken) => 
     await axios.post(process.env.REACT_APP_API+'/outedu', formData
     , {
        headers: {
            authtoken
        }
     });
    
export const getOutEdu = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/outedu'
     , {
        headers: {
            authtoken
        }
     });


export const removeOutEdu = async (id, authtoken) => 
     await axios.delete(`${process.env.REACT_APP_API}/outedu/${id}`
     , {
        headers: {
            authtoken
        }

    });