import axios from 'axios';

export const createOutSubj= async (formData, authtoken) => 
     await axios.post(process.env.REACT_APP_API+'/outsubj', formData
     , {
        headers: {
            authtoken
        }
     });
    
export const getOutSubj = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/outsubj'
     , {
        headers: {
            authtoken
        }
     });


export const removeOutSubj = async (id, authtoken) => 
     await axios.delete(`${process.env.REACT_APP_API}/outsubj/${id}`
     , {
        headers: {
            authtoken
        }

    });