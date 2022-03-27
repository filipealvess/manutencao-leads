import styled, { css } from 'styled-components';

function buildStyle({ theme, buttonType, buttonHasTransition }) {
  const {
    red,
    text,
    accent,
    redHover,
    buttonHover,
    sectionBackground,
    lightBlue
  } = theme;

  let backgroundColor = sectionBackground;
  let color = text;
  let hover = css`&:hover { border-color: ${lightBlue} }`;

  if (buttonType === 'delete') {
    backgroundColor = red;
    color = '#FFFFFF';
    hover = css`&:hover { background-color: ${redHover}; }`;
  } else if (buttonType === 'primary') {
    backgroundColor = accent;
    color = '#FFFFFF';
    hover = css`&:hover { background-color: ${buttonHover}; }`;
  }

  return css`
    background-color: ${backgroundColor};
    
    & * { color: ${color}; }

    ${buttonHasTransition && hover}
  `;
}

const IconButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: 1px solid transparent;
  border-radius: 5px;
  transition-duration: 0.3s;
  transition-property: background-color, border-color;

  ${buildStyle}

  & * { width: 2.4rem; height: 2.4rem; }

  ${({ isSmall }) => isSmall && css`& * { width: 1.6rem; height: 1.6rem; }`}
`;

export default IconButtonWrapper;
