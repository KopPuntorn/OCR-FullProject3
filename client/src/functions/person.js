import axios from 'axios';

export const createPerson = async (formData, authtoken) => 
     await axios.post(process.env.REACT_APP_API+'/person', formData
     , {
        headers: {
            authtoken
        }
     });
    
export const getPerson = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/person'
     , {
        headers: {
            authtoken
        }
     });


export const removePerson = async (id, authtoken) => 
     await axios.delete(`${process.env.REACT_APP_API}/person/${id}`
     , {
        headers: {
            authtoken
        }
     });




