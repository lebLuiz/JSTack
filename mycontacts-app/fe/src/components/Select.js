import styled from 'styled-components';

export default styled.select`
    width: 100%;
    background: #FFF;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
    height: 52px;
    border-radius: 4px;
    outline: none;
    border: none;
    padding: 0 16px;
    font-size: 16px;
    border: 2px solid #FFF;
    transition: border-color 0.2s ease-in;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary.main};
    }
`;
