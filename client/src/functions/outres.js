import axios from 'axios';

export const createOutRes= async (formData, authtoken) => 
     await axios.post(process.env.REACT_APP_API+'/outres', formData
     , {
        headers: {
            authtoken
        }
     });
    
export const getOutRes = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/outres'
     , {
        headers: {
            authtoken
        }
     });


export const removeOutRes = async (id, authtoken) => 
     await axios.delete(`${process.env.REACT_APP_API}/outres/${id}`
     , {
        headers: {
            authtoken
        }

    });