import axios from 'axios';

export const createOutPlan= async (formData, authtoken) => 
     await axios.post(process.env.REACT_APP_API+'/outplan', formData
     , {
        headers: {
            authtoken
        }
     });
    
export const getOutPlan = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/outplan'
     , {
        headers: {
            authtoken
        }
     });


export const removeOutPlan = async (id, authtoken) => 
     await axios.delete(`${process.env.REACT_APP_API}/outplan/${id}`
     , {
        headers: {
            authtoken
        }

    });