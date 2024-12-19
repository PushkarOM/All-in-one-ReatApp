import React, { useState } from "react";
import { FaPlus, FaMinus, FaCheck, FaTimes } from "react-icons/fa";
import "./toDoApp.css";
import Background from "../components/Background";

const ToDoApp = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const addTask = () => {
        if (inputValue.trim()) {
            setTasks([{ text: inputValue, completed: false }, ...tasks]);
            setInputValue(""); // Clear input field
        }
    };

    const deleteTask = (index) => {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    };

    const completedTask = (index) => {
        setTasks((prevTasks) =>
            prevTasks.map((task, i) =>
                i === index ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <>
            <div className="toDoApp">
                <Background />
                <div className="toDoApp-container">
                    <div className="input">
                        <input
                            type="text"
                            placeholder="Add a task"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button onClick={addTask}>
                            <FaPlus style={{ fontSize: "24px", marginRight: "8px" }} />
                        </button>
                    </div>
                    <div className="todo-list">
                        {tasks.length > 0 ? (
                            tasks.map((task, index) => (
                                <div className="task" key={index}>
                                    <p
                                        id="task-text"
                                        style={{
                                            textDecoration: task.completed
                                                ? "line-through"
                                                : "none",
                                            color: task.completed
                                                ? "green"
                                                : "black",
                                        }}
                                    >
                                        {task.text}
                                    </p>
                                    <div className="completed-checkbox" onClick={() => completedTask(index)}>
                                        {task.completed ? (
                                            <FaTimes style={{ fontSize: "20px", marginRight: "8px"}} />
                                        ) : (
                                            <FaCheck style={{ fontSize: "20px", marginRight: "8px" }} />
                                        )}
                                    </div>
                                    <button onClick={() => deleteTask(index)}>
                                        <FaMinus style={{ fontSize: "24px" }} />
                                    </button>
                                </div>
                            ))
                        ) : (
                            <div className="task">
                                <p>No tasks added yet</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ToDoApp;
