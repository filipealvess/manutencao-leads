import styled, { css } from 'styled-components';

function buildItemTransition({ isBlocked }) {
  return !isBlocked && css`
    &:hover {
      color: ${({ theme }) => theme.accent};
      cursor: pointer;

      & * { opacity: 1; }
    }
  `;
}

const LeadsListWrapper = styled.article`
  flex-grow: 1;
  max-width: calc(100% / 3 - 20px);

  & + & { margin-left: 20px; }
  
  @media (max-width: 800px) {
    max-width: 100%;
    margin-left: 0;

    & + & { margin: 0 0 20px 0; }
  }
`;

export const Header = styled.header`
  flex-grow: 1;
  padding: 10px 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.sectionBackground};
  
  @media (max-width: 800px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
`;

export const Title = styled.p`
  font-weight: 500;
  text-align: center;

  @media (max-width: 800px) {
    text-align: left;
  }
`;

export const Details = styled.div`
  display: flex;
  align-items: center;

  & > button { display: flex; }

  @media (min-width: 800px) {
    display: none;
  }
`;

export const Amount = styled.span`
  margin-right: 5px;
  font-weight: 500;
  color: ${({ theme }) => theme.accent};
`;

export const List = styled.ul`
  @media (max-width: 800px) {
    ${({ isVisible }) => !isVisible && css`display: none;`}
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 5px;
  white-space: nowrap;
  overflow-x: hidden;
  cursor: default;
  transition: 0.3s color;

  {${buildItemTransition}}

  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    height: 100%;
    width: 60px;
    background-image: linear-gradient(
      90deg,
      ${({ theme }) => theme.pageBackground + '00'},
      ${({ theme }) => theme.pageBackground}
    );
  }
  
  & * {
    flex-grow: 1;
    position: absolute;
    right: 0;
    font-size: 2.4rem;
    background-color: ${({ theme }) => theme.pageBackground};
    color: ${({ theme }) => theme.accent};
    opacity: 0;
    z-index: 1;
    transition: 0.3s opacity;
  }
`;

export default LeadsListWrapper;
