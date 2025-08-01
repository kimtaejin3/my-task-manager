import styled from "@emotion/styled";

import colors from "../../styles/color";

export default function Loading() {
  return (
    <LoaderContainer>
      <ColorChangingSpinner />
    </LoaderContainer>
  );
}

const LoaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
`;

const ColorChangingSpinner = styled.div`
  width: 25px;
  height: 25px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  border-left-color: ${colors.redLight};

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
