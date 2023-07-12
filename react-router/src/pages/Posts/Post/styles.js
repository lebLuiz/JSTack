import styled from 'styled-components';

export const Container = styled.article`
	background: #646464;//${({ theme }) => theme.postBackgroundColor};
	display: flex;
	flex-direction: column;
	padding: 16px;
	border-radius: 10px;

	h2 {
		margin: 0 0 8px;
	}

	small {
		opacity: 0.7;
	}

	& + article {
		margin-top: 8px;
	}
`;
