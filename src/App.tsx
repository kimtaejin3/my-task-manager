import Dashboard from "./components/dashboard";
import Layout from "./components/layout";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <>
      <Layout sidebar={<Sidebar />} dashboard={<Dashboard />} />
    </>
  );
}

export default App;
