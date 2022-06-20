import styled from 'styled-components';

export const ContainerRegister = styled.div`
  height: 100vh;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.lightYellow};
  padding: 20px;
`;

export const TextRegister = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Cookie', cursive;
  font-size: 40px;
  position: relative;
  padding: 20px;
  margin: 0;
  color: ${props => props.theme.colors.blue};
`;

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border-radius: 4px;
`;

export const LabelForm = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  width: 50%;
`;
export const TextForm = styled.p`
  width: 100px;
  margin: 0 15px 0 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.14;
  letter-spacing: 0.06em;
  text-shadow: 1px 1px;
`;

export const InputForm = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const ButtonRegister = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 150px;
  height: 60px;
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
