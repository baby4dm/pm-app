import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="flex h-screen py-10">
      <Sidebar />
      <NewProject />
    </main>
  );
}

export default App;
