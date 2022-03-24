import styled from 'styled-components';

const LeadsHeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid #AEAEAE;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
`;

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.accent};
  color: #FFFFFF;
  font-weight: 500;
  text-transform: uppercase;
  transition: 0.3s background-color;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;

export default LeadsHeaderWrapper;
