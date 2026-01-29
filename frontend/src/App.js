import React, { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/tasks/");
    const data = await response.json();
    setTasks(data);
  };

  const addTask = async () => {
    if (title.trim() === "") return;

    await fetch("http://127.0.0.1:8000/api/tasks/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        completed: false,
      }),
    });

    setTitle("");
    fetchTasks();
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>   <p style={{ color: "gray" }}>
  Web & Desktop Hybrid Application (Django + React)
</p>
Hybrid Task Manager</h2>

      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTask} style={{ marginLeft: "10px" }}>
        Add
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
