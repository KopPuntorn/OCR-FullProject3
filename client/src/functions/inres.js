import axios from 'axios';

export const createInRes= async (formData, authtoken) => 
     await axios.post(process.env.REACT_APP_API+'/inres', formData
     , {
        headers: {
            authtoken
        }
     });
    
export const getInRes = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/inres'
     , {
        headers: {
            authtoken
        }
     });


export const removeInRes = async (id, authtoken) => 
     await axios.delete(`${process.env.REACT_APP_API}/inres/${id}`
     , {
        headers: {
            authtoken
        }

    });