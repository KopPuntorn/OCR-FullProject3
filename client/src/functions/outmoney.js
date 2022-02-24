import axios from 'axios';

export const createOutMoney = async (formData, authtoken) => 
     await axios.post(process.env.REACT_APP_API+'/outmoney', formData
     , {
        headers: {
            authtoken
        }
     });
    
export const getOutMoney = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/outmoney'
     , {
        headers: {
            authtoken
        }
     });


export const removeOutMoney = async (id, authtoken) => 
     await axios.delete(`${process.env.REACT_APP_API}/outmoney/${id}`
     , {
        headers: {
            authtoken
        }

    });