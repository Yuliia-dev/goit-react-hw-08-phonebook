import styled from 'styled-components';

export const ContainerHome = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
`;

export const TextHome = styled.p`
  font-family: 'Cookie', cursive;
  font-size: 40px;
  position: relative;
  padding: 20px;
  margin: 0;
  max-width: 300px;
  color: ${props => props.theme.colors.blue};
`;
