import React, { useEffect, useState } from "react";

function FetchAPI() {

    const [data, setData] = useState([]);

    const fetchApiData = () => {

        fetch(`http://192.168.195.1:8040/api/v1/TheSiren`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setData(json);
            })
    }

    useEffect(() => {
        fetchApiData();
    }, [])



    return (
        <>
            <h1>Hey!</h1>
            <button onClick={fetchApiData}>Fetch Api</button>
            <br />
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
            
        </>
    );
}

export default FetchAPI;