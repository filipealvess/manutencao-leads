import styled from 'styled-components';

const FormWrapper = styled.form`
  width: 100%;
  max-width: 600px;
  padding: 20px 30px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.sectionBackground};
  border: 1px solid ${({ theme }) => theme.sectionBorderColor};
  border-radius: 5px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
`;

export default FormWrapper;
