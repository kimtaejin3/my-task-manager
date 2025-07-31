import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";

import styled from "@emotion/styled";

import closeRound from "../assets/svgs/close-round.svg";
import colors from "../styles/color";
import typography from "../styles/font";

import AddBoard from "./add-board";
import BoardNavigation from "./board-navigation";
import Error from "./error";
import Loading from "./loading";

export default function Sidebar() {
  return (
    <Container>
      <CloseButton>
        <img src={closeRound} alt="close" />
      </CloseButton>
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
        <AddBoard />
      </Navigation>
    </Container>
  );
}

const Container = styled.aside`
  padding: 8px 12px 0px 4px;
  ${typography.bold14};
  line-height: 1;
`;

const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${colors.darkTertiary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navigation = styled.nav`
  margin: 36px 0 12px;
`;
