import styled from "@emotion/styled";

import ProgressColumn from "./progress-column";

export default function Dashboard() {
  return (
    <DashboardContainer>
      <ProgressColumn progressCategory="backlog" />
      <ProgressColumn progressCategory="inProgress" />
      <ProgressColumn progressCategory="inReview" />
      <ProgressColumn progressCategory="completed" />
    </DashboardContainer>
  );
}

const DashboardContainer = styled.div`
  display: flex;
  gap: 12px;
`;
