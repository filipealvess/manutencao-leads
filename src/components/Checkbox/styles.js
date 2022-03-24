import styled from 'styled-components';

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  padding: 5px 0;
  cursor: pointer;
  transition: 0.3s color;

  @media (min-width: 600px) {
    &:hover {
      color: ${({ theme }) => theme.accent};
    }
  }
`;

export const Input = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;

export default CheckboxWrapper;
