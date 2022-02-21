import axios from 'axios';

export const createInSubj= async (formData, authtoken) => 
     await axios.post(process.env.REACT_APP_API+'/insubj', formData
     , {
        headers: {
            authtoken
        }
     });
    
export const getInSubj = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/insubj'
     , {
        headers: {
            authtoken
        }
     });


export const removeInSubj = async (id, authtoken) => 
     await axios.delete(`${process.env.REACT_APP_API}/insubj/${id}`
     , {
        headers: {
            authtoken
        }

    });