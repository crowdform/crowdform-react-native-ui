import { StyleSheet } from 'react-native';
import { ThemeType } from '../../theme';

import {
  createSpacingStyles,
  createBorderWidthStyles,
  createBorderColorStyles,
  createBorderRadiusStyles,
  getThemeColor,
} from '../../theme/theme.service';
import { ScrollDivProps } from './scrolldiv.type';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: ScrollDivProps) => {
  const computedStyle: any = {};

  computedStyle.div = {
    flexDirection: props.flexDirection,
    flexWrap: props.flexWrap,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    position: props.position,
    backgroundColor: getThemeColor(theme.colors, props.bg),
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  computedStyle.image = {
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  if (props.flex) {
    computedStyle.div = {
      ...computedStyle.div,
      flex: props.flex,
    };
  }

  if (props.shadow) {
    computedStyle.div = {
      ...computedStyle.div,
      ...(theme.shadow && theme.shadow[props.shadow]),
      shadowColor: getThemeColor(theme.colors, props.shadowColor),
    };
  }

  if (props.height) {
    computedStyle.div = {
      ...computedStyle.div,
      height: props.height,
    };
  }

  if (props.width) {
    computedStyle.div = {
      ...computedStyle.div,
      width: props.width,
    };
  }

  if (props.top) {
    computedStyle.div = {
      ...computedStyle.div,
      top: props.top,
    };
  }

  if (props.right) {
    computedStyle.div = {
      ...computedStyle.div,
      right: props.right,
    };
  }

  if (props.bottom) {
    computedStyle.div = {
      ...computedStyle.div,
      bottom: props.bottom,
    };
  }

  if (props.left) {
    computedStyle.div = {
      ...computedStyle.div,
      left: props.left,
    };
  }

  if (props.minHeight) {
    computedStyle.div = {
      ...computedStyle.div,
      minHeight: props.minHeight,
    };
  }

  if (props.minWidth) {
    computedStyle.div = {
      ...computedStyle.div,
      minWidth: props.minWidth,
    };
  }

  // merging style props to computed style
  if (props.style) {
    computedStyle.div = {
      ...computedStyle.div,
      // @ts-ignore
      ...props.style,
    };
  }

  return StyleSheet.create(computedStyle);
};
