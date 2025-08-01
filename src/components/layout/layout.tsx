import styled from "@emotion/styled";

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
  padding: 12px;
  min-height: 100vh;
`;

const Sidebar = styled.div`
  width: fit-content;
`;

const Dashboard = styled.div`
  background-color: ${(props) => props.theme.themeValue.secondary};
  border-radius: 12px;
  padding: 12px 16px;
  flex-grow: 1;
`;
