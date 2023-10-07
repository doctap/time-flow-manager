import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

export type StyleTypes = Readonly<ViewStyle | TextStyle | ImageStyle>;
export type NamedStyles<T> = Readonly<{ [P in keyof T]: StyleTypes }>;

export type UserConfigColorType = 0 | 1 | 2;
export type UserConfigRevers = boolean;
export type UserConfigScreenBackground = 'type-1' | 'type-2';

export interface IUserStylesConfig {
  color: UserConfigColorType
  isRevers: UserConfigRevers
  bg: UserConfigScreenBackground
}