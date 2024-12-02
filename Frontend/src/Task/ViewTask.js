

import { useEffect, useState } from "react";
import axios from "axios";
import { DOMAIN } from "../UserComponent/config";
import { Link, useNavigate } from "react-router-dom";


const ViewTask = () => {
    const navigate = useNavigate()

    const [request] = useState({});
    const [response, setResponse] = useState([]);
    const [user , setUser] = useState([])
    const token = JSON.parse(localStorage.getItem("token"));




    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const result = await axios.post(`${DOMAIN}task/list`, request, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setResponse(result.data);
            } catch (error) {
                setResponse([]);
                // console.error("Error fetching tasks:", error);
            }
        };

        fetchTasks();
    }, []);

    //_________________________________________________________________-


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const result = await axios.post(`${DOMAIN}user/list`, request, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                // console.log('userdata', result.data)
                setUser(result.data);
            } catch (error) {
                setUser([]);
                // console.error("Error fetching tasks:", error);
            }
        };

        fetchUsers();
    }, []);
    //________________________________________________________________-
    //_________________________________________-calling delete api _______________________________
    const handleDelete = async (task_id) => {
            const confirmDelete = window.confirm("Do you want to delete this task?");
            if(confirmDelete){
        try {
            const result = await axios.post(
                `${DOMAIN}task/delete`, 
                { task_id },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
    
            console.log("Task task deleted successfully:", result.data);
            alert("Task task deleted successfully!");
    
           
        } catch (error) {
            // console.error("Error assigning task:", error);
            alert("Failed to delete task. Please try again.");
            return ;
        }}
    };


    //_________________________________________-calling assign to api _______________________________
    const assign = async (task_id, assigned_to) => {
        
        try {
            const result = await axios.post(
                `${DOMAIN}task/assign`, 
                { task_id, assigned_to },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
    
            console.log("Task assigned successfully:", result.data);
            alert("Task assigned successfully!");
    
           
        } catch (error) {
            // console.error("Error assigning task:", error);
            alert("Failed to assign task. Please try again.");
            return ;
        }
    };
    

    //_________________________________________________________________________________________________

     //_________________________________________-calling assign to api _______________________________
     const Change_priority = async (task_id, priority) => {

        if(!token)
     {
        console.log("i am in token")
        return navigate("/login")

    }
        try {
            const result = await axios.post(
                `${DOMAIN}task/priority`, 
                { task_id, priority },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
    
            console.log("Priority Change successfully:", result.data);
            alert("Priority Change successfully");
    
           
        } catch (error) {
            // console.error("Error assigning task:", error);
            alert("Failed to assign task. Please try again.");
            return ;
        }
    };
    

    //_________________________________________________________________________________________________

    if (!response.length) return <div>No tasks found</div>;

    return (
        <div className="justify-content-center w-75 p-3">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th>Assign</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {response.map((task) => (
                        <tr key={task._id}>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.due_date}</td>
                            <td
                            style={{
                                fontWeight:"bold",
                                backgroundColor:
                                  task.status === "pending"
                                    ? "red"
                                    : task.status === "working"
                                    ? "yellow"
                                    : task.status === "completed"
                                    ? "lightgreen"
                                    : "white",
                              }}
                            >{task.status}</td>
                          
                            <td>
                                <select



                                    onChange={(e) => {
                                        const value = e.target.value;
                                        Change_priority(task._id , e.target.value)
                                        // console.log("Priority updated:", value);
                                    }}
                                >
                                    <option  value="high" selected={task.priority === "high"}>
                                        High
                                    </option>
                                    <option value="medium" selected={task.priority === "medium"}>
                                        Medium
                                    </option>
                                    <option value="low" selected={task.priority === "low"}>
                                        Low
                                    </option>
                                </select>
                            </td>
                            <td>
                                <select
                                    onChange={(e) => {

                                        // callin a function to assign value
                                        assign(task._id , e.target.value)
                                        // const value = e.target.value;
                                        // console.log("Assigned to:", value);
                                    }}
                                >
                                    <option value="">-- Select User --</option>
                                    {user.map((user) => (
                                        <option

                                            key={user._id}
                                            value={user._id}
                                            selected={user._id === task.assigned_to}
                                        >
                                            {user.name}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(task._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewTask;


