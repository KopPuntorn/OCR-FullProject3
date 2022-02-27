import axios from 'axios';

export const createOutReso= async (formData, authtoken) => 
     await axios.post(process.env.REACT_APP_API+'/outreso', formData
     , {
        headers: {
            authtoken
        }
     });
    
export const getOutReso = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/outreso'
     , {
        headers: {
            authtoken
        }
     });


export const removeOutReso = async (id, authtoken) => 
     await axios.delete(`${process.env.REACT_APP_API}/outreso/${id}`
     , {
        headers: {
            authtoken
        }

    });