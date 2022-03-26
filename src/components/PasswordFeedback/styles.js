import styled, { css } from 'styled-components';

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
  font-weight: 600;
  color: ${({ theme, level }) => {
    if (level === 1) return theme.red;

    if (level === 2) return theme.yellow;
    
    if (level === 3) return theme.green;
  }}
`;

export const Progress = styled.div`
  display: flex;
  gap: 5px;
  width: 35%;

  ${buildLevelColor}

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
  transition: 0.3s opacity;

  ${({ active }) => active && css`opacity: 1;`}
`;

function buildLevelColor({ theme, level }) {
  if (level === 2) {
    return css`
      & ${Level} { background-color: ${theme.yellow}; }
    `;
  } else if (level === 3) {
    return css`
      & ${Level} { background-color: ${theme.green}; }
    `;
  }
}

export default PasswordFeedbackWrapper;
