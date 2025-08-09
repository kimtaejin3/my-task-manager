import styled from "@emotion/styled";

import Dashboard from "./components/dashboard/dashboard";
import Sidebar from "./components/sidebar/sidebar";
import { SidebarProvider } from "./contexts/SidebarContext";

function App() {
  return (
    <>
      <LayoutContainer>
        <SidebarContainer>
          <SidebarProvider>
            <Sidebar />
          </SidebarProvider>
        </SidebarContainer>
        <DashboardContainer>
          <Dashboard />
        </DashboardContainer>
      </LayoutContainer>
    </>
  );
}

const LayoutContainer = styled.div`
  display: flex;
  padding: 12px;
  height: 100vh;
`;

const SidebarContainer = styled.div`
  width: fit-content;
`;

const DashboardContainer = styled.div`
  background-color: ${(props) => props.theme.themeValue.secondary};
  border-radius: 12px;
  padding: 16px 12px;
  flex-grow: 1;
`;

export default App;
