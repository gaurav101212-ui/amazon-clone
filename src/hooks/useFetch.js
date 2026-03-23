import { useEffect, useState } from "react";

function useFetch(url) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {

            try {
                const res = await fetch(url);
                const result = await res.json();

                setData(result);
                setLoading(false);
            }
            catch (err) {
                 setError("Something went wrong");
                 setLoading(false);
            }
        }
        fetchData();
    },[url])


    return (
        {data,loading,error}
    )
}

export default useFetch;