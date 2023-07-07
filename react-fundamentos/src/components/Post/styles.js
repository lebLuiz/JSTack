import styled, { css } from 'styled-components';

export const Container = styled.article`
    margin-bottom: 24px;

    // PODE FAZER ASSIM:
    /* opacity: ${(props) => props.removed ? 0.5 : 1};
    color: ${(props) => props.removed ? '#F00' : '#FFF'}; */

    // OU ASSIM:
    ${(props) => css`
        opacity: ${props.removed ? 0.5 : 1};
        color: ${props.removed ? '#F00' : '#FFF'};
    `}
`;

export const Subtitle = styled.small`
    display: block;
`;

export const Reat = styled.span`
    font-size: 10px;
    opacity: 0.7;
`;