import styled, { css } from 'styled-components';

export const FieldWrapper = styled.label`
  display: flex;
  flex-direction: column;

  & + & { margin-top: 20px; }
`;

export const InputWrapper = styled.div`
  display: flex;
  padding: 5px 10px;
  margin-top: 5px;
  border: 1px solid ${({ theme }) => theme.inputBorderColor};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.inputBackground};
  cursor: text;
  transition: 0.2s border-color;

  ${({ theme, isFocus }) => (
    isFocus && css`border-color: ${theme.text};`
  )}
`;

export const Input = styled.input`
  flex-grow: 1;
  min-width: 0;
  margin: 5px 0;
`;

export default FieldWrapper;
