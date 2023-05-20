import { styled } from "styled-components";

export const TextH2 = styled.h2(({ theme }) => ({
  fontSize: "1.25rem",
  lineHeight: "1.5rem",
  letterSpacing: "0.02em",
  fontWeight: 500,
  fontFamily: theme.font.semiBold,
  color: theme.color.mainText,
}));

export const TextH3 = styled.h2(({ theme }) => ({
  fontSize: "1.25rem",
  lineHeight: "1.5rem",
  letterSpacing: "0.02em",
  fontWeight: 500,
  fontFamily: theme.font.semiBold,
  color: theme.color.mainText,
}));

export const Text = styled.p(({ theme }) => ({
  fontSize: "1.125rem",
  lineHeight: "1.25rem",
  letterSpacing: "0.5px",
  fontWeight: 400,
  fontFamily: theme.font.medium,
  color: theme.color.secondaryText,
}));