import axios from 'axios';

export const createOutAle= async (formData, authtoken) => 
     await axios.post(process.env.REACT_APP_API+'/outale', formData
     , {
        headers: {
            authtoken
        }
     });
    
export const getOutAle = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/outale'
     , {
        headers: {
            authtoken
        }
     });


export const removeOutAle = async (id, authtoken) => 
     await axios.delete(`${process.env.REACT_APP_API}/outale/${id}`
     , {
        headers: {
            authtoken
        }

    });