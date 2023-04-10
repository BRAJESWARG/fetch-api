import React, { useEffect, useState } from "react";

function App() {
    const [user, setUser] = useState([]);

    const fetchData = () => {
        return fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((data) => setUser(data));
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <center>
            <table>
                <tr>
                    <th>UserId</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
                
                {user && user.length > 0 && user.map((userObj, index) => (
                    <tr key={userObj.userId}>
                        <td>{userObj.userId}</td>
                        <td>{userObj.id}</td>
                        <td>{userObj.title}</td>
                        <td>{userObj.completed ? "Yes" : "No"}</td>
                    </tr>
                ))}
            </table>
        </center>
    );
}

export default App;
