import axios, { all } from "axios";
import { useEffect, useState } from "react";


function useFetchData(apiEndpoint) {
    const [alldata, setAlldata] = useState([]);
    const [loading, setloading] = useState([true]);
    const [initialLoad, setInitialLoad] = useState([true]);

    useEffect(() => {
        if (initialLoad) {

            setInitialLoad(false);
            setloading(false);
            return;
        }

        setloading(true);

        const fetchAllData = async () => {
            try {

                const res = await axios.get(apiEndpoint);
                const alldata = res.data;
                setAlldata(alldata);
                setloading(false);

            } catch (error) {
                console.error("error fetching movie data:", error);
                setloading(false);

            }

        };

        if (apiEndpoint) {
            fetchAllData();
        }

    }, [initialLoad, apiEndpoint]);

    return {alldata, loading}
}

export default useFetchData