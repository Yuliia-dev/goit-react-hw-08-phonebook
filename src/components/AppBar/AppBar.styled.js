import styled from 'styled-components';

export const HeaderAppBar = styled.header`
  background-color: ${props => props.theme.colors.white};
`;

export const ContainerAppBar = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px;
`;
