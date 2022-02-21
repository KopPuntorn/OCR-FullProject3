import axios from 'axios';

export const createInRul= async (formData, authtoken) => 
     await axios.post(process.env.REACT_APP_API+'/inrul', formData
     , {
        headers: {
            authtoken
        }
     });
    
export const getInRul = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/inrul'
     , {
        headers: {
            authtoken
        }
     });


export const removeInRul = async (id, authtoken) => 
     await axios.delete(`${process.env.REACT_APP_API}/inrul/${id}`
     , {
        headers: {
            authtoken
        }

    });