import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";

import styled from "@emotion/styled";

import addRoundFill from "../assets/svgs/add-round-fill.svg";
import closeRound from "../assets/svgs/close-round.svg";
import colors from "../styles/color";
import typography from "../styles/font";

import BoardList from "./board-list";
import Error from "./error";
import Loading from "./Loading";

export default function Sidebar() {
  return (
    <Container>
      <CloseButton>
        <img src={closeRound} alt="close" />
      </CloseButton>
      <Navigation>
        <NavigationList>
          <ErrorBoundary
            fallback={
              <Error errorMessage="Board 데이터를 불러오는중 문제가 발생했어요." />
            }
          >
            <Suspense fallback={<Loading />}>
              <BoardList />
            </Suspense>
          </ErrorBoundary>
        </NavigationList>
      </Navigation>
      {/* TODO: Navigation Button 공통 컴포넌트화 */}
      <NavigationButton>
        <img src={addRoundFill} alt="add" />
        <BoardTitle>Add new board</BoardTitle>
      </NavigationButton>
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

const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const NavigationButton = styled.button`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-radius: 46px;
  align-items: center;
`;

export const BoardTitle = styled.span`
  margin-bottom: -3px;
`;
