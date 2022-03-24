import styled from 'styled-components';

const PasswordFeedbackWrapper = styled.section`
  padding: 20px;
  margin-top: 20px;
  border: 1px solid ${({ theme }) => theme.lightBlue};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.inputBackground};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  
  @media (max-width: 500px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const Feedback = styled.p`
  font-weight: 500;
  text-align: center;

  @media (max-width: 500px) {
    margin-bottom: 5px;
  }
`;

export const Status = styled.span`
  color: ${({ theme }) => theme.red};
  font-weight: 600;
`;

export const Progress = styled.div`
  display: flex;
  gap: 5px;
  width: 35%;

  @media (max-width: 500px) {
    width: 100%;
    max-width: 150px;
  }
`;

export const Level = styled.span`
  flex-grow: 1;
  height: 5px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.red};
  opacity: 0.5;
`;

export const Rule = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.4rem;

  & + & { margin-top: 7px; }

  & * { margin-right: 5px; }
`;

export default PasswordFeedbackWrapper;
