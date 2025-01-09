import styled, { css } from "styled-components";

interface StyleContainerPropsInterface {
  type?: "default" | "success" | "error";
}

const containerVariants = {
  default: css`
    background: ${({ theme }) => theme?.colors?.primary?.main};
  `,
  success: css`
    background: ${({ theme }) => theme?.colors?.success?.main};
  `,
  error: css`
    background: ${({ theme }) => theme?.colors?.danger?.main};
  `,
};

export const Container = styled.div<StyleContainerPropsInterface>`
  padding: 16px 32px;
  background: ${({ theme }) => theme?.colors?.primary?.main};
  color: #fff;
  border-radius: 4px;
  box-shadow: 0 20px 20px 16px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ type }) => containerVariants[type || "default"]}

  & + & {
    margin-top: 12px;
  }

  img {
    margin-right: 8px;
  }
`;
