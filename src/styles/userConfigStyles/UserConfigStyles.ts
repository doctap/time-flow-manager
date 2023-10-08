import { IUserStylesConfig, NamedStyles, UserConfigScreenBackground } from '../../types';
import { GStyleElementKeys, userColorBlue, userColorGreen, userColorRed } from '../global';

const colorStore = <const>[
  userColorBlue,
  userColorGreen,
  userColorRed
];

interface IUserConfigType {
  style: NamedStyles<{ [key in GStyleElementKeys]: {} }>
  bg: UserConfigScreenBackground
}

export const getUserConfig = ({
  color,
  bg
}: IUserStylesConfig): IUserConfigType => {

  return {
    style: colorStore[color],
    bg
  };
};