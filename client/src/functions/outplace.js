import axios from 'axios';

export const createOutPlace= async (formData, authtoken) => 
     await axios.post(process.env.REACT_APP_API+'/outplace', formData
     , {
        headers: {
            authtoken
        }
     });
    
export const getOutPlace = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/outplace'
     , {
        headers: {
            authtoken
        }
     });


export const removeOutPlace = async (id, authtoken) => 
     await axios.delete(`${process.env.REACT_APP_API}/outplace/${id}`
     , {
        headers: {
            authtoken
        }

    });