import { useState } from "react";

import { type Theme } from "@emotion/react";

import BoardLogoSelector from "./board-logo-selector";
import BoardNameField from "./board-name-field";
import Form from "./form";
import FormButtons from "./form-buttons";
import FormCancelButton from "./form-cancel-button";
import FormSubmitButton from "./form-submit-button";

interface AddNewBoardFormProps {
  theme: Theme;
  onHideModal: () => void;
}

export default function AddNewBoardForm({
  theme,
  onHideModal,
}: AddNewBoardFormProps) {
  const [formData, setFormData] = useState({
    boardName: "",
    boardLogo: 0,
  });

  return (
    <Form>
      <BoardNameField
        theme={theme}
        value={formData.boardName}
        onChange={(e) =>
          setFormData({ ...formData, boardName: e.target.value })
        }
      />
      <BoardLogoSelector
        selectedLogo={formData.boardLogo}
        onChange={(logoId) => setFormData({ ...formData, boardLogo: logoId })}
      />
      {/* 재사용성의 이점은 챙기면서도 코드를 잘 알아볼 수 있게 */}
      <FormButtons>
        <FormSubmitButton>Create Board</FormSubmitButton>
        <FormCancelButton onClick={onHideModal} theme={theme}>
          Cancel
        </FormCancelButton>
      </FormButtons>
    </Form>
  );
}
