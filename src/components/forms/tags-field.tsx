import { type Theme } from "@emotion/react";
import { useField } from "formik";

import { TAGS } from "../../constants/task";
import getTagStyles from "../../utils/get-tag-styles";
import Tag from "../shared/tag";
import TagList from "../shared/tag-list";

import Dropdown from "./dropdown";
import FieldError from "./field-error";
import Label from "./label";

import type { TAG } from "../../types/task";

interface TagsFieldProps {
  theme: Theme;
  name: string;
  error: {
    showError: boolean;
    errorMessage: string | string[] | undefined;
  };
}

export default function TagsField({ theme, name, error }: TagsFieldProps) {
  const [field, , helpers] = useField<TAG[]>(name);
  const isSelectedTagsEmpty = field.value.length === 0;

  const handleTagClick = (tag: TAG) => {
    if (field.value.includes(tag)) {
      helpers.setValue(field.value.filter((t) => t !== tag));
    } else {
      helpers.setValue([...field.value, tag]);
    }
  };

  return (
    <fieldset>
      <Label id={name} htmlFor={name}>
        Tags
      </Label>
      <Dropdown theme={theme}>
        <Dropdown.Header name={name}>
          {isSelectedTagsEmpty ? (
            <>No tags selected</>
          ) : (
            <TagList tags={field.value} />
          )}
        </Dropdown.Header>
        <Dropdown.List>
          {TAGS.map((tag) => (
            <Dropdown.Item key={tag} onClick={() => handleTagClick(tag)}>
              <Tag name={tag} tagStyles={getTagStyles({ tagName: tag })} />
            </Dropdown.Item>
          ))}
        </Dropdown.List>
      </Dropdown>
      {error.showError && <FieldError errorMessage={error.errorMessage} />}
    </fieldset>
  );
}
