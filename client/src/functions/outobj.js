import axios from 'axios';

export const createOutObj= async (formData, authtoken) => 
     await axios.post(process.env.REACT_APP_API+'/outobj', formData
     , {
        headers: {
            authtoken
        }
     });
    
export const getOutObj = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/outobj'
     , {
        headers: {
            authtoken
        }
     });


export const removeOutObj = async (id, authtoken) => 
     await axios.delete(`${process.env.REACT_APP_API}/outobj/${id}`
     , {
        headers: {
            authtoken
        }

    });