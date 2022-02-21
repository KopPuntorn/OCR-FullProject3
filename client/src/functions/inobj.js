import axios from 'axios';

export const createInObj= async (formData, authtoken) => 
     await axios.post(process.env.REACT_APP_API+'/inobj', formData
     , {
        headers: {
            authtoken
        }
     });
    
export const getInObj = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/inobj'
     , {
        headers: {
            authtoken
        }
     });


export const removeInObj = async (id, authtoken) => 
     await axios.delete(`${process.env.REACT_APP_API}/inobj/${id}`
     , {
        headers: {
            authtoken
        }

    });