import axios from 'axios';

export const createInMoney = async (formData, authtoken) => 
     await axios.post(process.env.REACT_APP_API+'/inmoney', formData
     , {
        headers: {
            authtoken
        }
     });
    
export const getInMoney = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/inmoney'
     , {
        headers: {
            authtoken
        }
     });


export const removeInMoney = async (id, authtoken) => 
     await axios.delete(`${process.env.REACT_APP_API}/inmoney/${id}`
     , {
        headers: {
            authtoken
        }

    });