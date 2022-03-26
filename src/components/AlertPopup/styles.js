import styled, { css } from 'styled-components';

const AlertPopupWrapper = styled.article`
  position: fixed;
  top: 20px;
  right: -100%;
  max-width: 400px;
  padding: 15px 20px;
  border-radius: 5px 0 0 5px;
  background-color: #6E72B9;
  transition: 0.5s right;

  & * { color: #FFFFFF; }

  ${({ isVisible }) => isVisible && css`right: 0;`}

  @media (max-width: 600px) {
    top: -100%;
    right: 50%;
    width: 100%;
    max-width: calc(100% - 50px);
    border-radius: 0 0 5px 5px;
    transform: translateX(50%);
    transition: 0.5s top;

    ${({ isVisible }) => isVisible && css`top: 0;`}
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const Title = styled.p`
  font-weight: 500;
`;

export const Message = styled.p`
  font-size: 1.4rem;
`;

export default AlertPopupWrapper;
