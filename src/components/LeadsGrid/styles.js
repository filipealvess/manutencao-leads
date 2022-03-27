import styled from 'styled-components';

const LeadsGridWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: stretch;
  }
`;

export default LeadsGridWrapper;
