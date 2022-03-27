import styled, { css } from 'styled-components';

const InfoPopupBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  ${({ isVisible }) => !isVisible && css`display: none;`}
`;

export const InfoPopupWrapper = styled.section`
  width: calc(100% - 50px);
  max-width: 800px;
  padding: 30px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.sectionBackground};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  margin-bottom: 20px;
  border-bottom: 1px solid #AEAEAE;
`;

export const Title = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 130%;
`;

export default InfoPopupBackground;
