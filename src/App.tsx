import Dashboard from "./components/dashboard";
import Layout from "./components/layout";
import SidebarWithContext from "./components/sidebar-with-context";

function App() {
  return (
    <>
      <Layout sidebar={<SidebarWithContext />} dashboard={<Dashboard />} />
    </>
  );
}

export default App;
