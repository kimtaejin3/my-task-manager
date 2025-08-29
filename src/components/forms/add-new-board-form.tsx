import { type Theme } from "@emotion/react";
import { Formik } from "formik";

import useAddNewBoard from "../../hooks/use-add-new-board";
import { type Board } from "../../types/board";

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

const validate = (values: Omit<Board, "id">) => {
  const errors: Record<string, string> = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.emoji) {
    errors.emoji = "Required";
  }
  return errors;
};

export default function AddNewBoardForm({
  theme,
  onHideModal,
}: AddNewBoardFormProps) {
  const { mutate, isPending } = useAddNewBoard();

  return (
    <Formik
      initialValues={{
        name: "",
        emoji: "",
      }}
      validate={validate}
      onSubmit={(values) => mutate(values)}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <BoardNameField
            theme={theme}
            value={values.name}
            name="name"
            onChange={handleChange}
          />

          {errors.name && touched.name && (
            <div className="error">{errors.name}</div>
          )}
          <BoardLogoSelector
            name="emoji"
            selectedLogo={values.emoji}
            onChange={handleChange}
          />
          {errors.emoji && touched.emoji && (
            <div className="error">{errors.emoji}</div>
          )}
          <FormButtons>
            <FormSubmitButton disabled={isPending}>
              Create Board
            </FormSubmitButton>
            <FormCancelButton onClick={onHideModal} theme={theme}>
              Cancel
            </FormCancelButton>
          </FormButtons>
        </Form>
      )}
    </Formik>
  );
}
