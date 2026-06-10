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
    const updatedProjects = [
      ...projectState.projects,
      { ...newProject, id: Math.random().toString(36).substring(2, 10) },
    ];
    setProjectState((prev) => {
      return { ...prev, projects: updatedProjects };
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
  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleAddProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = <NewProject onSave={handleSave} />;
  } else {
    console.log(projectState.projects);
    const foundedProject = projectState.projects.find(
      (prj) => prj.id === projectState.selectedProjectId,
    );
    content = (
      <SelectProject onDelete={handleDelete} project={foundedProject} />
    );
  }
  return (
    <main className="flex h-screen py-10">
      <Sidebar
        onAddProject={handleAddProject}
        projects={projectState.projects}
        onSelect={handleSelect}
      />
      {content}
    </main>
  );
}

export default App;
