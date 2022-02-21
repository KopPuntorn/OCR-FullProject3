import axios from 'axios';

export const createInAle= async (formData, authtoken) => 
     await axios.post(process.env.REACT_APP_API+'/inale', formData
     , {
        headers: {
            authtoken
        }
     });
    
export const getInAle = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/inale'
     , {
        headers: {
            authtoken
        }
     });


export const removeInAle = async (id, authtoken) => 
     await axios.delete(`${process.env.REACT_APP_API}/inale/${id}`
     , {
        headers: {
            authtoken
        }

    });