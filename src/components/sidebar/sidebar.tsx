import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";

import styled from "@emotion/styled";

import { useSidebar } from "../../context/SidebarContext";
import typography from "../../styles/font";
import Error from "../shared/error";
import Loading from "../shared/loading";

import AddNewBoard from "./add-new-board";
import BoardNavigation from "./board-navigation";
import ToggleButton from "./toggle-button";

export default function Sidebar() {
  const { isSidebarOpen } = useSidebar();

  return (
    <Container isSidebarOpen={isSidebarOpen}>
      <ToggleButton />
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
    </Container>
  );
}

const Container = styled.aside<{ isSidebarOpen: boolean }>`
  padding: 8px 12px 0px 4px;
  ${typography.bold14};

  width: ${(props) => (props.isSidebarOpen ? "296px" : "75px")};
  transition: all 0.3s ease-in-out;
`;

const Navigation = styled.nav`
  margin: 36px 0 12px;
`;
