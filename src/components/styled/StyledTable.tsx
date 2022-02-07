import styled from 'styled-components';

export const StyledTable = styled.table`
	border-spacing: 0;
	border-collapse: collapse;

	thead {
		color: ${({ theme }) => theme.color01};
		background: ${({ theme }) => theme.color05};
		font-family:  ${({ theme }) => theme.font03};
		text-transform: uppercase;
	}

	tbody {
		color: ${({ theme }) => theme.color01};
		background: ${({ theme }) => theme.color05}CC;
	}

	th {
		text-align: left;
		font-weight: 400;
		font-size: 18px;
		padding: 10px 5px;
		min-width: 150px;

		&.modifications {
			min-width: fit-content;
		}

		&.table-title {
			text-align: center;
			font-size: 22px;
			letter-spacing: 4px;
		}
	}

	td {
		min-width: fit-content;
		max-width: 400px;
		padding: 10px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
`;