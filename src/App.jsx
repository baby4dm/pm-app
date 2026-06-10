import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import SelectProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  let content;
  function handleAddProject() {
    setProjectState((prev) => {
      return { ...prev, selectedProjectId: null };
    });
  }

  function handleSave(newProject) {
    const project = {
      ...newProject,
      id: Math.random().toString(36).substring(2, 10),
      tasks: [],
    };
    const updatedProjects = [...projectState.projects, project];
    setProjectState((prev) => {
      return { projects: updatedProjects, selectedProjectId: project.id };
    });
  }

  function handleSelect(id) {
    setProjectState((prev) => {
      return { ...prev, selectedProjectId: id };
    });
  }

  function handleDelete() {
    setProjectState((prev) => {
      return {
        projects: prev.projects.filter(
          (prj) => prj.id !== prev.selectedProjectId,
        ),
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddTask(task) {
    setProjectState((prev) => ({
      ...prev,
      projects: prev.projects.map((prj) =>
        prj.id === prev.selectedProjectId
          ? {
              ...prj,
              tasks: [...prj.tasks, task],
            }
          : prj,
      ),
    }));
  }

  function handleRemoveTask(id) {
    setProjectState((prev) => {
      return {
        ...prev,
        projects: prev.projects.map((prj) =>
          prj.id === prev.selectedProjectId
            ? { ...prj, tasks: prj.tasks.filter((task) => task.id !== id) }
            : prj,
        ),
      };
    });
  }
  function handleCancel() {
    setProjectState((prev) => {
      return { ...prev, selectedProjectId: undefined };
    });
  }
  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleAddProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = <NewProject onSave={handleSave} onCancel={handleCancel} />;
  } else {
    const foundedProject = projectState.projects.find(
      (prj) => prj.id === projectState.selectedProjectId,
    );
    content = (
      <SelectProject
        onDelete={handleDelete}
        project={foundedProject}
        onAddTask={handleAddTask}
        onRemoveTask={handleRemoveTask}
      />
    );
  }
  return (
    <main className="flex h-screen py-10">
      <Sidebar
        onAddProject={handleAddProject}
        projects={projectState.projects}
        onSelect={handleSelect}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
