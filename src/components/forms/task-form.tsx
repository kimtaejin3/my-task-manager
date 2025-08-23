import { useState, useRef, useEffect } from "react";

import styled from "@emotion/styled";

import { TASK_STATUS_CONFIG } from "../../constants/task";
import typography from "../../styles/font";
import getTagStyles from "../../utils/get-tag-styles";
import Tag from "../shared/tag";
import TagList from "../shared/tag-list";

import BackgroundContainer from "./background-container";
import Form from "./form";
import FormButtons from "./form-buttons";
import FormCancelButton from "./form-cancel-button";
import FormSubmitButton from "./form-submit-button";
import Input from "./Input";
import Label from "./label";

import type { Task, Status } from "../../types/task";
import type { Theme } from "@emotion/react";

interface TaskFormProps {
  theme: Theme;
  task: Task | null;
  onHideModal: () => void;
}

const defaultFormData: FormData = {
  taskTitle: "",
  background: null,
  status: "backlog",
  tags: [],
};

export default function TaskForm({ theme, task, onHideModal }: TaskFormProps) {
  const [formData, setFormData] = useState(
    createFormData(task, defaultFormData)
  );

  // TODO: Dropdown logic 전면 리팩토링 필요
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef2.current &&
        !dropdownRef2.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen2(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleStatusChange = (status: Status) => {
    setFormData({ ...formData, status });
    setIsDropdownOpen(false);
  };

  return (
    <Form>
      <fieldset>
        <BackgroundContainer background={formData.background} theme={theme} />

        <input type="file" accept="image/*" hidden />
      </fieldset>
      <fieldset>
        <Label id="taskTitleLabel" htmlFor="taskTitle">
          Task title
        </Label>
        <Input
          theme={theme}
          type="text"
          id="taskTitle"
          placeholder="e.g: Default Board"
          value={formData.taskTitle}
          onChange={(e) =>
            setFormData({ ...formData, taskTitle: e.target.value })
          }
        />
      </fieldset>
      <fieldset>
        <Label id="taskStatusLabel" htmlFor="taskStatus">
          Status
        </Label>

        <S.DropdownContainer ref={dropdownRef} theme={theme}>
          <S.DropdownHeader
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            theme={theme}
          >
            <S.StatusIndicator
              color={TASK_STATUS_CONFIG[formData.status].color}
            />
            <span>{TASK_STATUS_CONFIG[formData.status].title}</span>
          </S.DropdownHeader>

          {isDropdownOpen && (
            <S.DropdownList theme={theme}>
              {Object.entries(TASK_STATUS_CONFIG).map(
                ([key, { color, title }]) => (
                  <S.DropdownItem
                    key={key}
                    onClick={() => handleStatusChange(key as Status)}
                    theme={theme}
                  >
                    <S.StatusIndicator color={color} />
                    <span>{title}</span>
                  </S.DropdownItem>
                )
              )}
            </S.DropdownList>
          )}
        </S.DropdownContainer>
      </fieldset>

      <fieldset>
        <Label id="tagsLabel" htmlFor="tags">
          tags
        </Label>
        <S.DropdownContainer ref={dropdownRef2} theme={theme}>
          <S.DropdownHeader
            onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
            theme={theme}
          >
            <TagList tags={formData.tags} />
          </S.DropdownHeader>

          {isDropdownOpen2 && (
            <S.DropdownList theme={theme}>
              {["concept", "technical", "design", "front-end"].map((tag) => (
                <S.DropdownItem key={tag} theme={theme}>
                  <Tag name={tag} tagStyles={getTagStyles({ tagName: tag })} />
                </S.DropdownItem>
              ))}
            </S.DropdownList>
          )}
        </S.DropdownContainer>
      </fieldset>

      <FormButtons>
        <FormSubmitButton>Save</FormSubmitButton>
        <FormCancelButton theme={theme} onClick={onHideModal}>
          Cancel
        </FormCancelButton>
      </FormButtons>
    </Form>
  );
}

type FormData = {
  taskTitle: string;
  background: string | null;
  status: Status;
  tags: string[];
};

const createFormData = (
  task: Task | null,
  defaultFormData: FormData
): FormData => {
  if (!task) return defaultFormData;

  return {
    taskTitle: task.title,
    background: task.background,
    status: task.status,
    tags: task.tags,
  };
};

const S = {
  DropdownContainer: styled.div<{ theme: Theme }>`
    position: relative;
    width: 100%;
    user-select: none;
  `,

  DropdownHeader: styled.div<{ theme: Theme }>`
    display: flex;
    align-items: center;
    padding: 12px;
    border: 2px solid ${(props) => props.theme.themeValue.tertiary};
    border-radius: 12px;
    cursor: pointer;
    ${typography.bold14}
  `,

  DropdownArrow: styled.span<{ isOpen: boolean }>`
    margin-left: auto;
    font-size: 10px;
    transition: transform 0.2s ease;
    transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};
  `,

  DropdownList: styled.ul<{ theme: Theme }>`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: 10px;
    padding: 0;
    list-style: none;
    background-color: ${(props) => props.theme.themeValue.tertiary};
    border-radius: 4px;
    z-index: 10;
    max-height: 200px;
    overflow-y: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  `,

  DropdownItem: styled.li<{ theme: Theme }>`
    display: flex;
    align-items: center;
    padding: 10px 12px;
    cursor: pointer;
    ${typography.bold14}

    &:hover {
      background-color: ${(props) => props.theme.themeValue.secondary};
    }
  `,

  StatusIndicator: styled.div<{ color: string }>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin-right: 8px;
  `,
};
