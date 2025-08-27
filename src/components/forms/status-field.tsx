import { type Theme } from "@emotion/react";
import styled from "@emotion/styled";

import { TASK_STATUS_CONFIG } from "../../constants/task";

import Dropdown from "./dropdown";
import Label from "./label";

import type { Status } from "../../types/task";
import type { Entries } from "../../types/utils";

interface StatusFieldProps {
  theme: Theme;
  selectedStatus: Status;
  onChange: (status: Status) => void;
}

export default function StatusField({
  theme,
  selectedStatus,
  onChange,
}: StatusFieldProps) {
  return (
    <fieldset>
      <Label id="taskStatusLabel" htmlFor="taskStatus">
        Status
      </Label>

      <Dropdown theme={theme}>
        <Dropdown.Header>
          <>
            <S.StatusIndicator
              color={TASK_STATUS_CONFIG[selectedStatus].color}
            />
            {TASK_STATUS_CONFIG[selectedStatus].title}
          </>
        </Dropdown.Header>
        <Dropdown.List>
          {(
            Object.entries(TASK_STATUS_CONFIG) as Entries<
              typeof TASK_STATUS_CONFIG
            >
          ).map(([key, { color, title }]) => (
            <Dropdown.Item
              key={key}
              onClick={() => {
                onChange(key);
              }}
            >
              <S.StatusIndicator color={color} />
              {title}
            </Dropdown.Item>
          ))}
        </Dropdown.List>
      </Dropdown>
    </fieldset>
  );
}

// TODO: StatusIndicator 컴포넌트화
const S = {
  StatusIndicator: styled.div<{ color: string }>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin-right: 8px;
  `,
};
