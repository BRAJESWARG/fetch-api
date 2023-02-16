import React, { useEffect, useState } from "react";

function FetchAPI() {

    // let isLoading = true;

    let API = "http://192.168.195.1:8040/api/v1/TheSiren";

    const fetchApiData = async (url) => {

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            // isLoading = false;
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchApiData(API);
    }, [])

    // if(isLoading) {
    //     return(

    //         <h1>Loading....</h1>
    //     );
    // }

    return (
        <>
            <h1>Hey!</h1>
            
        </>
    );
}

export default FetchAPI;