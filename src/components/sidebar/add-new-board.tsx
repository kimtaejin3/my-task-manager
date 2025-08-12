import styled from "@emotion/styled";

import Icon from "../shared/icon";

import SidebarButton from "./sidebar-button";

export default function AddNewBoard() {
  return (
    <S.Container>
      <SidebarButton
        left={<Icon type="add" size={16} />}
        center={<span>Add new board</span>}
      />
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    margin-top: 12px;
  `,
};
