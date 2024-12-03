import { useEffect, useState } from "react";
import axios from "axios";
import { DOMAIN } from "../UserComponent/config";

const UserTask = () => {
    const [request] = useState({});
    const [response, setResponse] = useState([]);
    // const [user, setUser] = useState([])
    const token = JSON.parse(localStorage.getItem("token"));


    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const result = await axios.post(`${DOMAIN}task/userTask`, request, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setResponse(result.data);
            } catch (error) {
                setResponse([]);

            }
        };

        fetchTasks();
    }, []);

    //_________________________________________-calling assign to api _______________________________
    const status = async (task_id, status) => {

        try {
              await axios.post(
                `${DOMAIN}task/status`,
                { task_id, status },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            // console.log("Task assigned successfully:", result.data);
            alert("Status Changed successfully!");


        } catch (error) {
            // console.error("Error assigning task:", error);
            alert("Failed to Change status. Please try again.");
            return;
        }
    };


    //_________________________________________________________________________________________________

    if (!response.length) return <div>No tasks found</div>;
    //__________________________________________________________________________________________
    return (
        <div className="justify-content-center w-75 p-3">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th>Priority</th>
                        <th>Status</th>

                    </tr>
                </thead>
                <tbody>
                    {response.map((task) => (
                        <tr key={task._id}>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.due_date}</td>
                            <td style={{
                                fontWeight:'bold',
                                backgroundColor:
                                    task.priority === "low"
                                        ? "lightgreen"
                                        : task.priority === "medium"
                                            ? "yellow"
                                            : task.priority === "high"
                                                ? "red"
                                                : "white",
                            }}>{task.priority}</td>

                            <td>
                                <select
                                    onChange={(e) => {
                                        // const value = e.target.value;
                                        status(task._id, e.target.value)
                                    }}
                                >
                                    <option value="completed" selected={task.status === "completed"}>
                                        Completed
                                    </option>
                                    <option value="working" selected={task.status === "working"}>
                                        Working
                                    </option>
                                    <option value="pending" selected={task.status === "pending"}>
                                        Pending
                                    </option>
                                </select>
                            </td>


                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

    //____________________________________________________________________________________    
};

export default UserTask; 