import axios from 'axios';

export const createOutRul= async (formData, authtoken) => 
     await axios.post(process.env.REACT_APP_API+'/outrul', formData
     , {
        headers: {
            authtoken
        }
     });
    
export const getOutRul = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/outrul'
     , {
        headers: {
            authtoken
        }
     });


export const removeOutRul = async (id, authtoken) => 
     await axios.delete(`${process.env.REACT_APP_API}/outrul/${id}`
     , {
        headers: {
            authtoken
        }

    });