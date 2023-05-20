import { ButtonHTMLAttributes, FC } from "react";
import { styled } from "styled-components";
import { Text } from "./Text";
import { useTheme } from "theme/ThemeManager";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick: () => void;
  isActive?: boolean;
  isLoading?: boolean;
}

export const CustomButton: FC<CustomButtonProps> = ({
  title,
  onClick,
  isActive,
  isLoading,
  ...props
}) => {
  const { color } = useTheme();

  return (
    <ButtonStyled
      style={{ backgroundColor: isActive ? color.accent : color.mainColor }}
      disabled={isLoading}
      onClick={onClick}
      {...props}
    >
      <Text>{isLoading ? "...loading" : title}</Text>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button<{ disabled?: boolean }>(({ theme, disabled }) => ({
  width: "196px",
  padding: `${theme.px.x4}px ${theme.px.x7}px`,
  cursor: "pointer",
  opacity: disabled ? 0.3 : 1,
  border: "1px solid transparent",
  borderRadius: theme.px.x2,
  boxShadow: "0px 3.4369285106658936px 3.4369285106658936px 0px #00000040",
  transition: "opacity 200ms linear",

  "&:hover": {
    opacity: 0.9,
    borderColor:theme.color.accent
  },
}));
