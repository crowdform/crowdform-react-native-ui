import { StyleSheet } from 'react-native';
import { ThemeType } from '../../theme';

import {
  createSpacingStyles,
  createBorderRadiusStyles,
  createBorderColorStyles,
  createBorderWidthStyles,
  getThemeColor,
} from '../../theme/theme.service';
import { TagProps } from './tag.type';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: TagProps) => {
  const computedStyle: any = {};

  computedStyle.div = {
    borderColor: getThemeColor(theme.colors, props.borderColor),
    borderWidth: props.borderWidth,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: getThemeColor(theme.colors, props.bg),
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  computedStyle.prefix = {
    marginRight: 4,
  };

  computedStyle.suffix = {
    marginLeft: 4,
  };

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
