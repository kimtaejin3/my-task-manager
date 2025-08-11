import styled from "@emotion/styled";

import KanbanBoard from "./components/kanban-board/kanban-board";
import Sidebar from "./components/sidebar/sidebar";
import { SidebarProvider } from "./contexts/SidebarContext";

function App() {
  return (
    <>
      <S.AppLayout>
        <SidebarProvider>
          <Sidebar />
        </SidebarProvider>
        <KanbanBoard />
      </S.AppLayout>
    </>
  );
}

const S = {
  AppLayout: styled.div`
    display: flex;
    padding: 12px;
    height: 100vh;
  `,
};

export default App;
