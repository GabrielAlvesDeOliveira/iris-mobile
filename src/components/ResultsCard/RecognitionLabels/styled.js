import styled from 'styled-components/native';

export const CardWrapper = styled.View`
	height: auto;
	display: flex;
	padding: 24px;
	border-radius: 24px;
	align-items: center;
	border: 1px solid rgba(8, 2, 24, 0.2);
	box-shadow: 0px 4px 10px rgba(8, 2, 24, 0.2);
	flex-direction: ${({ direction }) => (direction)};
	background-color: ${({ theme }) => theme.colors.background.main};
`;

export const ObjectFocus = styled.Image`
	width: ${({ size }) => size};
	height: ${({ size }) => size};
	margin-${({ corner }) => corner}: 14px;
	border-radius: 24px;
`;

export const TextGroup = styled.View`
    display: flex;
    flex-direction: column;
`;

export const LabelResponse = styled.Text`
	font-size: ${({ theme }) => theme.text.h5};
	font-family: ${({ theme }) => theme.font.bold};
	color: ${({ theme }) => theme.colors.typography.main};
`;

export const ConfidencePercentage = styled.Text`
	margin-top: 4px; 
	font-size: ${({ theme }) => theme.text.h6};
	color: ${({ theme }) => theme.colors.subtext.main};
	font-family: ${({ theme }) => theme.font.semibold};
`;