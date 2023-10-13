import { NamedStyles } from '../../types';

export enum GStyleElementKeys {
  screen = 'screen',
  input = 'input',
  primaryBtn = 'primaryBtn',
  secondaryBtn = 'secondaryBtn',
  title = 'title',
  primaryText = 'primaryText'
}

export const PoppinsMedium = 'Poppins-Medium';

// colors
const grey = '#363942CC';
const darkgrey = '#363942';

export const gStyleStatic: NamedStyles<{ [key in GStyleElementKeys]: {} }> = {
  screen: {
    backgroundColor: '#F2F5FF'
  },
  input: {
    color: grey,
    backgroundColor: 'white',
  },
  primaryBtn: {
    backgroundColor: '#615EE2',
    color: '#ffff'
  },
  secondaryBtn: {},
  title: {
    color: 'red',
  },
  primaryText: {
    color: grey
  }
};


export const userColorBlue = <const>{
  screen: {
    backgroundColor: '#F2F5FF'
  },
  input: {
    color: '#363942CC',
    backgroundColor: 'white'
  },
  primaryButton: {
    backgroundColor: '#615EE2'
  },
  secondaryButton: {}
};

export const userColorGreen = <const>{
  screen: {
    backgroundColor: '#c1dbbf'
  },
  input: {
    color: '#3d1f07',
    backgroundColor: 'white'
  },
  primaryButton: {
    backgroundColor: '#3c6639'
  },
  secondaryButton: {}
};

export const userColorRed = <const>{
  screen: {
    backgroundColor: '#cf8f94'
  },
  input: {
    color: '#3d1022',
    backgroundColor: 'white'
  },
  primaryButton: {
    backgroundColor: '#701921'
  },
  secondaryButton: {}
};