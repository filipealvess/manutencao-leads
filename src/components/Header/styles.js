import styled from 'styled-components';

const HeaderWrapper = styled.header`
  padding: 0 25px;
  background-color: #272727;
`;

export const HeaderContent = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  padding: 20px 0;
  margin: 0 auto;
`;

export const LogoWrapper = styled.h1`
  display: flex;
  align-items: center;
  cursor: default;

  & * { color: #FFFFFF; }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const LogoContent = styled.div`
  display: flex;
  align-items: center;

  &::after { content: '-'; margin: 0 5px; }
  
  & > img { margin-right: 10px; }
  
  @media (max-width: 500px) {
    &::after { display: none; }

    & > img { width: 18px; margin-right: 5px; }

    & > p { font-size: 1.2rem; }
  }
`;

export const PageTitle = styled.p`
  font-weight: 600;
`;

export const ThemeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.sectionBackground};
  color: ${({ theme }) => theme.text};
  transition: 0.3s background-color;
  
  &:hover {
    background-color: ${({ theme }) => theme.lightBlue};
  }
`;

export default HeaderWrapper;
