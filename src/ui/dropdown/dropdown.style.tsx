import { StyleSheet } from 'react-native';
import { ThemeType } from '../../theme';

import {
  createSpacingStyles,
  createBorderWidthStyles,
  createBorderColorStyles,
  createBorderRadiusStyles,
  getThemeColor,
} from '../../theme/theme.service';
import { DropdownProps } from './dropdown.type';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: DropdownProps) => {
  const computedStyle: any = {};

  computedStyle.wrapper = {
    height: props.height,
    width: props.width,
    minHeight: props.minHeight,
    minWidth: props.minWidth,
    alignSelf: 'center',
    overflow: props.overflow,
    backgroundColor: getThemeColor(theme.colors, props.bg),
    ...createBorderWidthStyles(props),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  computedStyle.indicator = {
    alignSelf: 'center',
    marginVertical: 10,
  };

  computedStyle.container = {
    ...createSpacingStyles(props, theme.spacing),
  };

  computedStyle.options = {
    flexWrap: props.flexWrap,
    flexDirection: props.flexDirection,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
  };

  // merging style props to computed style
  if (props.style) {
    computedStyle.container = {
      ...computedStyle.container,
      // @ts-ignore
      ...props.style,
    };
  }

  return StyleSheet.create(computedStyle);
};
