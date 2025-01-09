import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 1rem;
  }
`;

export const WrapResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  margin-top: 1rem;

  p {
    font-size: 1.5rem;
  }

  small {
    color: #bbb;
  }
`;
