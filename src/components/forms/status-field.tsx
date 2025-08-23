import { type Theme } from "@emotion/react";
import styled from "@emotion/styled";

import { TASK_STATUS_CONFIG } from "../../constants/task";

import Dropdown from "./dropdown";
import DropdownItem from "./dropdown-item";
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

      <Dropdown
        theme={theme}
        renderHeader={() => (
          <>
            <S.StatusIndicator
              color={TASK_STATUS_CONFIG[selectedStatus].color}
            />
            <span>{TASK_STATUS_CONFIG[selectedStatus].title}</span>
          </>
        )}
        renderList={() => (
          <>
            {(
              Object.entries(TASK_STATUS_CONFIG) as Entries<
                typeof TASK_STATUS_CONFIG
              >
            ).map(([key, { color, title }]) => (
              <DropdownItem
                key={key}
                onClick={() => {
                  onChange(key);
                }}
                theme={theme}
              >
                <S.StatusIndicator color={color} />
                <span>{title}</span>
              </DropdownItem>
            ))}
          </>
        )}
      />
    </fieldset>
  );
}

const S = {
  StatusIndicator: styled.div<{ color: string }>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin-right: 8px;
  `,
};
