import styled, { css } from 'styled-components';

const Rule = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  transition: 0.3s opacity;

  & + & { margin-top: 7px; }

  & * { margin-right: 5px; }

  ${({ wasFulfilled }) => (
    wasFulfilled && css`
      opacity: 0.5;
    `
  )}
`;

export default Rule;
