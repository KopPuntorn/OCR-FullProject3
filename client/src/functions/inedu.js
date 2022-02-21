import axios from 'axios';

export const createInEdu= async (formData, authtoken) => 
     await axios.post(process.env.REACT_APP_API+'/inedu', formData
     , {
        headers: {
            authtoken
        }
     });
    
export const getInEdu = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/inedu'
     , {
        headers: {
            authtoken
        }
     });


export const removeInEdu = async (id, authtoken) => 
     await axios.delete(`${process.env.REACT_APP_API}/inedu/${id}`
     , {
        headers: {
            authtoken
        }

    });