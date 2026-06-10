import Task from "./Task";
export default function TaskList({ project, onRemoveTask }) {
  return (
    <ul className="flex flex-col gap-4">
      {project.tasks &&
        project.tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            onRemove={onRemoveTask}
          />
        ))}
    </ul>
  );
}
