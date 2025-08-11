import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";

import styled from "@emotion/styled";

import { useSidebar } from "../../contexts/SidebarContext";
import typography from "../../styles/font";
import Error from "../shared/error";
import Loading from "../shared/loading";

import AddNewBoard from "./add-new-board";
import BoardNavigation from "./board-navigation";
import SidebarVisibilityToggle from "./sidebar-visibility-toggle";
import ThemeToggle from "./theme-toggle";

export default function Sidebar() {
  const { isSidebarOpen } = useSidebar();

  return (
    <SidebarContainer isSidebarOpen={isSidebarOpen}>
      <Header>
        <SidebarVisibilityToggle />
      </Header>
      <Main>
        <Navigation>
          <ErrorBoundary
            fallback={
              <Error errorMessage="Board 데이터를 불러오는중 문제가 발생했어요." />
            }
          >
            <Suspense fallback={<Loading />}>
              <BoardNavigation />
            </Suspense>
          </ErrorBoundary>
          <AddNewBoard />
        </Navigation>
      </Main>
      <Footer>
        <ThemeToggle />
      </Footer>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.aside<{ isSidebarOpen: boolean }>`
  padding: 8px 12px 0px 4px;
  ${typography.bold14};

  width: ${(props) => (props.isSidebarOpen ? "296px" : "75px")};
  flex-shrink: 0;
  transition: all 0.3s ease-in-out;

  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header``;

const Main = styled.main``;

const Navigation = styled.nav`
  margin: 36px 0 12px;
`;

const Footer = styled.footer`
  margin-top: auto;
`;
