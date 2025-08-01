import Dashboard from "./components/dashboard/dashboard";
import Layout from "./components/layout/layout";
import SidebarWithContext from "./components/sidebar/sidebar-with-context";

function App() {
  return (
    <>
      <Layout sidebar={<SidebarWithContext />} dashboard={<Dashboard />} />
    </>
  );
}

export default App;
