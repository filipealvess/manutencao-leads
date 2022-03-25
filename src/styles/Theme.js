const global = {
  red: '#FE6262',
  green: '#37CC3D',
  lightBlue: '#C9DCF2',
  inputBorderColor: '#AEAEAE'
}

const light = {
  theme: 'light',
  pageBackground: '#FFFFFF',
  text: '#000000',
  sectionBackground: '#F9F9F9',
  sectionBorderColor: '#DEDEDE',
  inputBackground: '#FFFFFF',
  buttonHover: '#474DC0',
  accent: '#5A60D0',
  ...global
};

const dark = {
  theme: 'dark',
  pageBackground: '#444444',
  text: '#FFFFFF',
  sectionBackground: '#323338',
  sectionBorderColor: 'transparent',
  inputBackground: '#323338',
  buttonHover: '#767DE9',
  accent: '#8E93E5',
  ...global
};

export default { light, dark };
