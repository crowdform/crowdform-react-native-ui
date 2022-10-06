import { ImageSourcePropType as RNImageSourcePropType } from 'react-native';

type Undefined<T> = { [P in keyof T]: P extends undefined ? T[P] : never };

type FilterFlags<Base, Condition> = {
  [Key in keyof Base]: Base[Key] extends Condition ? Key : never;
};

type AllowedNames<Base, Condition> = FilterFlags<Base, Condition>[keyof Base];

type SubType<Base, Condition> = Pick<Base, AllowedNames<Base, Condition>>;

export type OptionalKeys<T> = Exclude<
  keyof T,
  NonNullable<keyof SubType<Undefined<T>, never>>
>;

export type ThemeProps<T> = {
  [name: string]: T;
};

type ComponentsProps<T> = Omit<
  Pick<T, OptionalKeys<T>>,
  'children' | 'variant'
>;

export type VariantType<T> = ComponentsProps<T> & {
  variants?: {
    [name: string]: ComponentsProps<T>;
  };
};

export type DefaultProps<Props extends object> = {
  [K in keyof Props]?: Props[K];
};

export const borderProps = [
  'borderColor',
  'borderTopColor',
  'borderRightColor',
  'borderBottomColor',
  'borderLeftColor',
  'borderWidth',
  'borderTopWidth',
  'borderRightWidth',
  'borderLeftWidth',
  'borderBottomWidth',
  'borderStartWidth',
  'borderEndWidth',
  'borderStyle',
] as const;
export interface BorderPropsType {
  borderColor?: string;
  borderTopColor?: string;
  borderRightColor?: string;
  borderBottomColor?: string;
  borderLeftColor?: string;
  borderWidth?: number;
  borderTopWidth?: number;
  borderRightWidth?: number;
  borderLeftWidth?: number;
  borderBottomWidth?: number;
  borderStartWidth?: number;
  borderEndWidth?: number;
  borderStyle?: 'solid' | 'dotted' | 'dashed';
}

export const spacingProps = [
  'm',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'mx',
  'my',
  'ms',
  'p',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'px',
  'py',
  'ps',
] as const;
export interface SpacingPropsType {
  m?: string | number;
  marginTop?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  mx?: string | number;
  my?: string | number;
  ms?: string | number;
  p?: string | number;
  paddingTop?: string | number;
  paddingRight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  px?: string | number;
  py?: string | number;
  ps?: string | number;
}

export const roundedProps = [
  'rounded',
  'borderRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'roundedTop',
  'roundedLeft',
  'roundedRight',
  'roundedBottom',
] as const;
export interface RoundedPropsType {
  rounded?: string | number;
  borderRadius?: string | number;
  borderTopLeftRadius?: string | number;
  borderTopRightRadius?: string | number;
  borderBottomLeftRadius?: string | number;
  borderBottomRightRadius?: string | number;
  roundedTop?: string | number;
  roundedLeft?: string | number;
  roundedRight?: string | number;
  roundedBottom?: string | number;
}

export const shadowProps = ['shadow', 'shadowColor'] as const;
export interface ShadowPropsType {
  shadow?: string | number;
  shadowColor?: string;
}

export const dimensionProps = [
  'minHeight',
  'minWidth',
  'maxHeight',
  'maxWidth',
  'height',
  'width',
] as const;
export interface DimensionPropsType {
  minHeight?: number | string;
  minWidth?: number | string;
  maxHeight?: number | string;
  maxWidth?: number | string;
  height?: number | string;
  width?: number | string;
}

export const flexProps = [
  'row',
  'flex',
  'flexDirection',
  'flexWrap',
  'justifyContent',
  'alignSelf',
  'alignItems',
] as const;
export interface FlexPropsType {
  row?: boolean;
  flex?: number;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}

export const positionProps = [
  'position',
  'top',
  'right',
  'bottom',
  'left',
] as const;
export interface PositionPropsType {
  position?: 'absolute' | 'relative';
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export const backgroundProps = [
  'bg',
  'background',
  'backgroundColor',
  'bgImg',
  'bgMode',
] as const;
export interface BackgroundPropsType {
  bg?: string;
  background?: string;
  backgroundColor?: string;
  bgImg?: RNImageSourcePropType;
  bgMode?: 'contain' | 'cover' | 'stretch' | 'repeat';
}

export const textProps = [
  'color',
  'fontSize',
  'textDecorLine',
  'textDecorStyle',
  'fontStyle',
  'textDecorColor',
  'fontWeight',
  'fontFamily',
  'lineHeight',
  'textAlign',
  'textTransform',
  'letterSpacing',
  'textAlignVertical',
] as const;
export interface TextPropsType {
  color?: string;
  fontSize?: string | number;
  textDecorLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
  textDecorStyle?: 'solid' | 'double' | 'dotted' | 'dashed';
  fontStyle?: 'normal' | 'italic';
  textDecorColor?: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  fontFamily?: string;
  lineHeight?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  letterSpacing?: number;
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center';
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
  textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed';
  textDecorationColor?: string;
  textShadowColor?: string;
  textShadowOffset?: { width: number; height: number };
  textShadowRadius?: number;
}

export const opacityProps = ['opacity'] as const;
export interface OpacityPropsType {
  opacity?: number;
}

export const overflowProps = ['overflow'] as const;
export interface OverflowPropsType {
  overflow?: 'hidden' | 'visible' | 'scroll';
}

export const zIndexProps = ['zIndex'] as const;
export interface ZIndexPropsType {
  zIndex?: number;
}

export const loadingProps = ['loading', 'loaderSize', 'loaderColor'] as const;
export interface LoadingPropsType {
  loading?: boolean;
  loaderSize?: number | string;
  loaderColor?: string;
}

export const preffixSuffixProps = ['preffix', 'suffix'] as const;
export interface PrefixSuffixPropsType {
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
}

export const inputProps = ['focusBorderColor'] as const;
export interface InputPropsType {
  focusBorderColor?: string;
}

export const disabledProps = ['disabled'] as const;
export interface DisabledPropsType {
  disabled?: null | boolean;
}

export const buttonProps = [
  'underlayColor',
  'block',
  'borderless',
  'rippleColor',
  'ripple',
] as const;
export interface ButtonPropsType {
  underlayColor?: string;
  block?: boolean;
  borderless?: boolean;
  rippleColor?: string;
  ripple?: boolean;
}

export const overlayProps = ['overlayColor', 'overlayOpacity'] as const;
export interface OverlayPropsType {
  overlayColor?: string;
  overlayOpacity?: number;
}

export const variantProps = ['variant'] as const;
export interface VariantPropsType {
  variant?: string;
}
