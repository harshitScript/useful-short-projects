import { useState } from "react"
import API from "dummy/route";

//? Allowed Methods POST, PUT, PATCH, DELETE
const methodMapping = {
    'POST': API.post,
    'PUT': API.put,
    'PATCH': API.patch,
    'DELETE': API.delete
}

//? useMutation method
/*
    1. triggerMutation can be used to trigger the mutation.
    2. resetMutation can be used to reset the mutation state. 
*/
const useMutation = (path, method) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const triggerMutation = async (body) => {
        let response = {}
        try {
            setLoading(true);
            if (method === 'DELETE') {
                response = await methodMapping[method](path);
            } else {
                response = await methodMapping[method](path, body);
            }
            setError(null); setLoading(false); setData(response.data);
            return response.data
        } catch (error) {
            setError(error); setLoading(false);
            throw error;
        }
    }
    const resetMutation = () => {
        setData(null); setError(null); setLoading(false);
    }
    return { data, loading, error, triggerMutation, resetMutation }
}
export default useMutation