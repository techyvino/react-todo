import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Header from "./components/Header";
import TaskListContextProvider from "./contexts/TaskListContext";

function App() {
  return (
    <>
      <TaskListContextProvider>
        <div className="container">
          <div className="app-wrapper">
            <div className="main">
              <Header />
              <TaskForm />
              <TaskList />
            </div>
          </div>
        </div>
      </TaskListContextProvider>
    </>
  );
}

export default App;
