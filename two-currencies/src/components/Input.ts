import styled, { css } from "styled-components";

interface StyleInputProps {
  $error?: string;
}

export const Input = styled.input<StyleInputProps>`
  width: 100%;
  background: rgb(53, 53, 53);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  border-radius: 4px;
  outline: none;
  border: none;
  padding: 0 16px;
  font-size: 16px;
  border: 2px solid #fff;
  transition: border-color 0.2s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme?.colors?.primary?.main};
  }

  ${({ theme, $error }) =>
    !!$error &&
    css`
      color: ${theme?.colors?.danger?.main};
      border-color: ${theme?.colors?.danger?.main} !important;
    `}

  &[disabled] {
    background-color: ${({ theme }) => theme?.colors?.gray[100]};
    border-color: ${({ theme }) => theme?.colors?.gray[200]};
  }
`;
