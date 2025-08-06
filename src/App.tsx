import Dashboard from "./components/dashboard/dashboard";
import Layout from "./components/layout/layout";
import Sidebar from "./components/sidebar/sidebar";
import { SidebarProvider } from "./contexts/SidebarContext";

function App() {
  return (
    <>
      <Layout
        sidebar={
          <SidebarProvider>
            <Sidebar />
          </SidebarProvider>
        }
        dashboard={<Dashboard />}
      />
    </>
  );
}

export default App;
