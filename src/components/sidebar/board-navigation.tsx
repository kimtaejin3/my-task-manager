import styled from "@emotion/styled";
import { useSuspenseQuery } from "@tanstack/react-query";

import { getBoardListQueryOptions } from "../../queryOptions";

import SidebarButton from "./sidebar-button";

export default function BoardNavigation() {
  const { data: boardList } = useSuspenseQuery(getBoardListQueryOptions());
  return (
    <nav>
      <NavigationList>
        {boardList.map((item) => (
          <li key={item.name}>
            <SidebarButton
              left={
                <EmojiContainer bgColor={item.color}>
                  {item.emoji}
                </EmojiContainer>
              }
              content={<span>{item.name}</span>}
            />
          </li>
        ))}
      </NavigationList>
    </nav>
  );
}

const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const EmojiContainer = styled.div<{ bgColor: string }>`
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
