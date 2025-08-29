import { useState } from "react";

import { type Theme } from "@emotion/react";

import useAddNewBoard from "../../hooks/use-add-new-board";
import { type Board } from "../../types/board";

import BoardLogoSelector from "./board-logo-selector";
import BoardNameField from "./board-name-field";
import Form from "./form";
import FormButtons from "./form-buttons";
import FormCancelButton from "./form-cancel-button";
import FormSubmitButton from "./form-submit-button";

//TODO: onHideModal 리팩토링
interface AddNewBoardFormProps {
  theme: Theme;
  onHideModal: () => void;
}

export default function AddNewBoardForm({
  theme,
  onHideModal,
}: AddNewBoardFormProps) {
  const [formData, setFormData] = useState<Omit<Board, "id">>({
    name: "",
    emoji: "",
    color: "",
  });

  const { mutate, isPending } = useAddNewBoard();
  // TODO: Form validation
  // Formik이나 react hook form 사용하기
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        mutate(formData as Board);
        onHideModal();
      }}
    >
      <BoardNameField
        theme={theme}
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <BoardLogoSelector
        selectedLogo={formData.emoji}
        onChange={(emoji) => setFormData({ ...formData, emoji })}
      />
      <FormButtons>
        <FormSubmitButton disabled={isPending}>Create Board</FormSubmitButton>
        <FormCancelButton onClick={onHideModal} theme={theme}>
          Cancel
        </FormCancelButton>
      </FormButtons>
    </Form>
  );
}
