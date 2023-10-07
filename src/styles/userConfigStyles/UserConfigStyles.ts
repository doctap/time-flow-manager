import { IUserStylesConfig, NamedStyles, UserConfigRevers, UserConfigScreenBackground } from '../../types';
import { GStyleElementKeys, userColorBlue, userColorGreen, userColorRed } from '../global';

const colorStore = <const>[
  userColorBlue,
  userColorGreen,
  userColorRed
];

interface IUserConfigType {
  style: NamedStyles<{ [key in GStyleElementKeys]: {} }>
  isRevers: UserConfigRevers
  bg: UserConfigScreenBackground
}

export const getUserConfig = ({
  color,
  isRevers,
  bg
}: IUserStylesConfig): IUserConfigType => {

  return {
    style: colorStore[color],
    isRevers,
    bg
  };
}