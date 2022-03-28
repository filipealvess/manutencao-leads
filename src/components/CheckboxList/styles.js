import styled from 'styled-components';

const CheckboxListWrapper = styled.div`
  margin-top: 20px;
`;

export const Boxes = styled.ul`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  margin-top: 5px;
  
  @media (max-width: 500px) {
    grid-template-columns: 100%;
  }
`;

export const Title = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default CheckboxListWrapper;
