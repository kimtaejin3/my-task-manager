import { type Theme } from "@emotion/react";

import BackgroundContainer from "./background-container";

interface BackgroundFieldProps {
  theme: Theme;
  background: string | null;
  onChange: (background: string | null) => void;
}

export default function BackgroundField({
  theme,
  background,
  onChange,
}: BackgroundFieldProps) {
  return (
    <fieldset>
      <BackgroundContainer background={background} theme={theme} />
      <input
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => {
          // Handle file upload logic here
          // This is a placeholder for the actual implementation
          if (e.target.files && e.target.files[0]) {
            // Convert to base64 or handle as needed
            const reader = new FileReader();
            reader.onload = (event) => {
              if (event.target?.result) {
                onChange(event.target.result as string);
              }
            };
            reader.readAsDataURL(e.target.files[0]);
          }
        }}
      />
    </fieldset>
  );
}
