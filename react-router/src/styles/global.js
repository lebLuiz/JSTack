import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	body {
		background: #646464;//${({ theme }) => theme.backgroundColor};
		color: #fff;//${({ theme }) => theme.textColor};
		font-family: sans-serif;
	}
`;
