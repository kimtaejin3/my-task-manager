import styled from "@emotion/styled";

export default function Layout({
  sidebar,
  dashboard,
}: {
  sidebar: React.ReactNode;
  dashboard: React.ReactNode;
}) {
  return (
    <LayoutContainer>
      <Sidebar>{sidebar}</Sidebar>
      <Dashboard>{dashboard}</Dashboard>
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  display: flex;
  padding: 12px;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: fit-content;
`;

const Dashboard = styled.div`
  background-color: ${(props) => props.theme.themeValue.secondary};
  border-radius: 12px;
  padding: 16px 12px;
  flex-grow: 1;
`;
