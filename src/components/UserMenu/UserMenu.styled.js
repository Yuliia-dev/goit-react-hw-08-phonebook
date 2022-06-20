import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 90px;
  background-color: ${props => props.theme.colors.blue};
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  line-height: 15px;
  padding: 6px 16px;
  text-align: center;
  text-decoration: none;
  &:hover {
    background-color: ${props => props.theme.colors.lightBlue};
    color: ${props => props.theme.colors.blue};
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  margin: 0;
  text-align: center;
  color: ${props => props.theme.colors.blue};
`;
