import styled from "@emotion/styled";

import addRoundFill from "../../assets/svgs/add-round-fill.svg";

import SidebarButton from "./sidebar-button";

export default function AddNewBoard() {
  return (
    <AddNewBoardContainer>
      <SidebarButton
        left={<img src={addRoundFill} alt="add" />}
        content={<span>Add new board</span>}
      />
    </AddNewBoardContainer>
  );
}

const AddNewBoardContainer = styled.div`
  margin-top: 12px;
`;
