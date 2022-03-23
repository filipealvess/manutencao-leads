import styled, { css } from 'styled-components';

function buildTransitionStyle({ buttonHasTransition }) {
  return buttonHasTransition && css`
    transition: 0.3s background-color;

    &:hover {
      background-color: ${({ theme }) => theme.lightBlue};
    }
  `;
}

const IconButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.sectionBackground};
  color: ${({ theme }) => theme.text};

  {${buildTransitionStyle}}

  & * {
    width: 2.4rem;
  }
`;

export default IconButtonWrapper;
