import axios from 'axios';

export const createInPlace= async (formData, authtoken) => 
     await axios.post(process.env.REACT_APP_API+'/inplace', formData
     , {
        headers: {
            authtoken
        }
     });
    
export const getInPlace = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/inplace'
     , {
        headers: {
            authtoken
        }
     });


export const removeInPlace = async (id, authtoken) => 
     await axios.delete(`${process.env.REACT_APP_API}/inplace/${id}`
     , {
        headers: {
            authtoken
        }

    });