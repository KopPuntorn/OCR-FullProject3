import axios from 'axios';

export const createOutPerson = async (formData, authtoken) => 
     await axios.post(process.env.REACT_APP_API+'/outperson', formData
     , {
        headers: {
            authtoken
        }
     });
    
export const getOutPerson = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/outperson'
     , {
        headers: {
            authtoken
        }
     });


export const removeOutPerson = async (id, authtoken) => 
     await axios.delete(`${process.env.REACT_APP_API}/outperson/${id}`
     , {
        headers: {
            authtoken
        }
     });




