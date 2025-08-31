import { type Theme } from "@emotion/react";
import { Formik } from "formik";
import * as Yup from "yup";

import useAddNewBoard from "../../hooks/use-add-new-board";

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
  const { mutate } = useAddNewBoard();

  return (
    <Formik
      initialValues={{
        name: "",
        emoji: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("Required")
          .max(50, "Name must be 50 characters or less"),
        emoji: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        mutate(values, {
          onSuccess: () => {
            onHideModal();
            setSubmitting(false);
          },
        });
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        handleBlur,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <BoardNameField
            theme={theme}
            value={values.name}
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            error={{
              showError: errors.name && touched.name,
              errorMessage: errors.name,
            }}
          />
          <BoardLogoSelector
            name="emoji"
            selectedLogo={values.emoji}
            onChange={handleChange}
            error={{
              showError: errors.emoji && touched.emoji,
              errorMessage: errors.emoji,
            }}
          />
          <FormButtons>
            <FormSubmitButton disabled={isSubmitting}>
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
