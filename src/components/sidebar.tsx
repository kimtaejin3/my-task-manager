import styled from "@emotion/styled";

import addRoundFill from "../assets/svgs/add-round-fill.svg";
import closeRound from "../assets/svgs/close-round.svg";
import colors from "../styles/color";
import typography from "../styles/font";

const navItems = [
  {
    name: "Simple Card Board",
    emoji: "🛠️",
    color: colors.greenLight,
  },
  {
    name: "Frontend Board",
    emoji: "⚙️",
    color: colors.blueLight,
  },
  {
    name: "Design Board",
    emoji: "🚀",
    color: colors.redLight,
  },
];

export default function Sidebar() {
  return (
    <Container>
      <CloseButton>
        <img src={closeRound} alt="close" />
      </CloseButton>

      <Navigation>
        <NavigationList>
          {navItems.map((item) => (
            <li key={item.name}>
              <NavigationButton>
                <EmojiContainer bgColor={item.color}>
                  {item.emoji}
                </EmojiContainer>
                <BoardTitle>{item.name}</BoardTitle>
              </NavigationButton>
            </li>
          ))}
        </NavigationList>
      </Navigation>

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

const NavigationButton = styled.button`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-radius: 46px;
  align-items: center;
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

const BoardTitle = styled.span`
  margin-bottom: -3px;
`;
