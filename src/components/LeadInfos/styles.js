import styled from 'styled-components';

const LeadInfosWrapper = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 20px 10px;
  
  @media (max-width: 550px) {
    grid-template-columns: 100%;
  }
`;

export const Name = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Value = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default LeadInfosWrapper;
