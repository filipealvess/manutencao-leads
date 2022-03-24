import styled from 'styled-components';

const PrimaryButtonWrapper = styled.button`
  width: 100%;
  padding: 10px 15px;
  margin-top: 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.accent};
  color: #FFFFFF;
  font-weight: 600;
  text-transform: uppercase;
  transition: 0.3s background-color;
  
  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;

export default PrimaryButtonWrapper;
