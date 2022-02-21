import axios from 'axios';

export const createInReso= async (formData, authtoken) => 
     await axios.post(process.env.REACT_APP_API+'/inreso', formData
     , {
        headers: {
            authtoken
        }
     });
    
export const getInReso = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/inreso'
     , {
        headers: {
            authtoken
        }
     });


export const removeInReso = async (id, authtoken) => 
     await axios.delete(`${process.env.REACT_APP_API}/inreso/${id}`
     , {
        headers: {
            authtoken
        }

    });