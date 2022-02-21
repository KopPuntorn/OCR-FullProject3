import axios from 'axios';

export const createInPlan= async (formData, authtoken) => 
     await axios.post(process.env.REACT_APP_API+'/inplan', formData
     , {
        headers: {
            authtoken
        }
     });
    
export const getInPlan = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/inplan'
     , {
        headers: {
            authtoken
        }
     });


export const removeInPlan = async (id, authtoken) => 
     await axios.delete(`${process.env.REACT_APP_API}/inplan/${id}`
     , {
        headers: {
            authtoken
        }

    });