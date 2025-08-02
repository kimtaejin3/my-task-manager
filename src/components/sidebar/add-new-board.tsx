import styled from "@emotion/styled";

import Icon from "../shared/icon";

import SidebarButton from "./sidebar-button";

export default function AddNewBoard() {
  return (
    <AddNewBoardContainer>
      <SidebarButton
        left={<Icon type="add" size={16} />}
        content={<span>Add new board</span>}
      />
    </AddNewBoardContainer>
  );
}

const AddNewBoardContainer = styled.div`
  margin-top: 12px;
`;
