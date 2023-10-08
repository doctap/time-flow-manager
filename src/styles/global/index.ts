import { NamedStyles } from '../../types';

export enum GStyleElementKeys {
  screen = 'screen',
  input = 'input',
  primaryButton = 'primaryButton',
  secondaryButton = 'secondaryButton'
}

export const PoppinsMedium = 'Poppins-Medium';

export const gStyleStatic: NamedStyles<{ [key in GStyleElementKeys]: {} }> = {
  screen: {
    height: '100%',
    width: '100%',
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#F2F5FF'
  },
  input: {
    color: '#363942CC',
    backgroundColor: 'white',
    elevation: 5,
    textAlign: 'center'
  },
  primaryButton: {
    paddingHorizontal: 30,
    paddingVertical: 9,
    borderRadius: 10,
    backgroundColor: '#615EE2',
    color: '#ffff'
  },
  secondaryButton: {
    color: '#363942'
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