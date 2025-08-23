import { type Theme } from "@emotion/react";

import getTagStyles from "../../utils/get-tag-styles";
import Tag from "../shared/tag";
import TagList from "../shared/tag-list";

import Dropdown from "./dropdown";
import DropdownItem from "./dropdown-item";
import Label from "./label";

interface TagsFieldProps {
  theme: Theme;
  selectedTags: string[];
  onChange: (tags: string[]) => void;
}

export default function TagsField({
  theme,
  selectedTags,
  onChange,
}: TagsFieldProps) {
  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onChange(selectedTags.filter((t) => t !== tag));
    } else {
      onChange([...selectedTags, tag]);
    }
  };

  return (
    <fieldset>
      <Label id="tagsLabel" htmlFor="tags">
        Tags
      </Label>
      <Dropdown
        theme={theme}
        renderHeader={() => <TagList tags={selectedTags} />}
        renderList={() => (
          <>
            {["concept", "technical", "design", "front-end"].map((tag) => (
              <DropdownItem
                key={tag}
                theme={theme}
                onClick={() => handleTagClick(tag)}
              >
                <Tag name={tag} tagStyles={getTagStyles({ tagName: tag })} />
              </DropdownItem>
            ))}
          </>
        )}
      />
    </fieldset>
  );
}
