import styled from "@emotion/styled";

import colors from "../styles/color";

export default function Layout({
  sidebar,
  dashboard,
}: {
  sidebar: React.ReactNode;
  dashboard: React.ReactNode;
}) {
  return (
    <Container>
      <Sidebar>{sidebar}</Sidebar>
      <Dashboard>{dashboard}</Dashboard>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 20px 12px 12px 16px;
  min-height: 100vh;
`;

const Sidebar = styled.div`
  width: 240px;
`;

const Dashboard = styled.div`
  background-color: ${colors.darkSecondary};
  border-radius: 12px;
  padding: 12px 16px;
  flex-grow: 1;
`;
