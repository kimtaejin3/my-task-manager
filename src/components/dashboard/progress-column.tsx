import styled from "@emotion/styled";

import colors from "../../styles/color";
import typography from "../../styles/font";

import type { ProgressCategoryType } from "../../types/progress";

export default function ProgressColumn({
  progressCategory,
}: {
  progressCategory: ProgressCategoryType;
}) {
  return (
    <ColumnContainer>
      <Header>
        <ColorBox color={PROGRESS_STATUS_INFO[progressCategory].color} />
        <div>{PROGRESS_STATUS_INFO[progressCategory].title} (0)</div>
      </Header>
    </ColumnContainer>
  );
}

type ProgressStatusInfo = {
  [K in ProgressCategoryType]: {
    title: string;
    color: string;
  };
};

const PROGRESS_STATUS_INFO: ProgressStatusInfo = {
  backlog: {
    title: "Backlog",
    color: colors.blueMiddle,
  },
  inProgress: {
    title: "In Progress",
    color: colors.yellowMiddle,
  },
  inReview: {
    title: "In Review",
    color: colors.purplePrimary,
  },
  completed: {
    title: "Completed",
    color: colors.greenMiddle,
  },
};

const ColumnContainer = styled.div`
  min-width: 228px;
  flex-grow: 1;
`;

const ColorBox = styled.div<{ color: string }>`
  width: 8px;
  height: 8px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 8px;
  ${typography.bold14}
`;
