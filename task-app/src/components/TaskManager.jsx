import React, { useState, useEffect } from "react";
import Button from "./Button";
import Card from "./Card";

/**
 * LocalStorage hook
 */
const useLocalStorageTasks = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    if (text.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text,
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ]);
    }
  };

  const toggleTask = (id) =>
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  return { tasks, addTask, toggleTask, deleteTask };
};

/**
 * Task Manager with cards
 */
const TaskManager = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useLocalStorageTasks();

  const [newTaskText, setNewTaskText] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTaskText);
    setNewTaskText("");
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Task Manager</h2>

      {/* Input */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <Button type="submit" variant="primary">
            Add Task
          </Button>
        </div>
      </form>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        <Button
          variant={filter === "all" ? "primary" : "secondary"}
          size="sm"
          onClick={() => setFilter("all")}
        >
          All
        </Button>

        <Button
          variant={filter === "active" ? "primary" : "secondary"}
          size="sm"
          onClick={() => setFilter("active")}
        >
          Active
        </Button>

        <Button
          variant={filter === "completed" ? "primary" : "secondary"}
          size="sm"
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
      </div>

      {/* Task Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredTasks.length === 0 ? (
          <p className="text-gray-500 py-4">No tasks found</p>
        ) : (
          filteredTasks.map((task) => (
            <Card key={task.id}>
              <div className="flex justify-between items-start">
                {/* Checkbox + Text */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="h-5 w-5 mt-1 text-blue-600 rounded"
                  />

                  <div>
                    <p
                      className={`text-lg font-medium ${
                        task.completed
                          ? "line-through text-gray-500"
                          : "text-gray-900"
                      }`}
                    >
                      {task.text}
                    </p>

                    {/* Status */}
                    <span
                      className={`text-sm font-semibold ${
                        task.completed ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {task.completed ? "Completed" : "Not Completed"}
                    </span>
                  </div>
                </div>

                {/* Delete */}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>

      {/* Stats */}
      <div className="mt-6 text-gray-600 text-sm">
        <p>{tasks.filter((t) => !t.completed).length} tasks remaining</p>
      </div>
    </div>
  );
};

export default TaskManager;
