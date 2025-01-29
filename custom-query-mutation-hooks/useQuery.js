import { useState } from "react";
import API from "dummy/route";

const useQuery = (path, initialFetching = false) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const startQuery = async () => {
        try {
            const response = await API.get(path);
            setError(null); setData(response.data); setLoading(false);
        } catch (error) {
            setError(error); setData(null); setLoading(false);
        }
    }

    useEffect(() => { initialFetching && startQuery() }, [initialFetching])

    return { data, error, loading, startQuery }
}
export default useQuery;