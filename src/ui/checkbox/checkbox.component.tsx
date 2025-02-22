import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  View as RNView,
  Pressable as RNButton,
  GestureResponderEvent as RNGestureResponderEvent,
} from 'react-native';

import { getStyle } from './checkbox.style';
import { isFunction } from '../../utilities';
import { getIcon } from './checkbox.service';
import { CheckboxGroup } from './group.component';
import { CompundedCheckbox, CheckboxProps } from './checkbox.type';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { useTheme } from '../../theme';

const Checkbox: CompundedCheckbox<CheckboxProps> = (incomingProps) => {
  const props = useDefaultProps('Checkbox', incomingProps, {
    defaultChecked: false,
    activeColor: 'blue600',
    inactiveColor: 'gray500',
    highlightBg: 'gray300',
    bg: 'transparent',
    p: 'none',
    color: 'white',
    borderRadius: 'md',
    loading: false,
    disabled: false,
    loaderSize: '2xl',
    loaderColor: 'blue600',
    block: false,
    position: 'relative',
    shadowColor: 'gray800',
    shadow: 0,
    fontSize: '5xl',
    borderless: true,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    onPress: () => {},
    flexDirection: 'row',
  });

  const {
    m,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    ms,
    p,
    paddingRight,
    paddingTop,
    paddingBottom,
    paddingLeft,
    height,
    width,
    bg,
    minWidth,
    minHeight,
    suffix,
    style,
    fontSize,
    fontWeight,
    prefix,
    borderRadius,
    roundedTop,
    roundedRight,
    roundedBottom,
    roundedLeft,
    color: colorProp,
    loading,
    disabled,
    loaderColor,
    loaderSize,
    children,
    borderColor,
    borderBottomColor,
    borderLeftColor,
    borderTopColor,
    borderRightColor,
    borderWidth,
    borderLeftWidth,
    borderRightWidth,
    borderBottomWidth,
    borderTopWidth,
    borderEndWidth,
    shadow,
    borderless,
    shadowColor,
    block,
    alignSelf,
    activeIcon,
    inactiveIcon,
    onChange,
    value,
    activeColor,
    inactiveColor,
    defaultChecked,
    checked: checkedProp,
    onChecked,
    onPress: onPressProp,
    ...rest
  } = props;
  const { theme } = useTheme();
  const [checked, setChecked] = useState(
    ('checked' in props ? checkedProp : defaultChecked) ?? false
  );
  const [focussed, setFocussed] = useState(false);
  const computedStyle = getStyle(theme, props, { focussed });

  useEffect(() => {
    if ('checked' in props) {
      setChecked(props.checked ?? false);
    }
  }, [props]);

  /**
   * on press checkbox
   */
  const onPress = (event: RNGestureResponderEvent) => {
    if (disabled) {
      return;
    }

    setChecked(!checked);

    if (isFunction(onChecked)) {
      onChecked(!checked);
    }

    if (isFunction(onPressProp)) {
      onPressProp(event);
    }

    // if onChange prop is a valid function, call it
    if (isFunction(onChange)) {
      onChange(value);
    }
  };

  /**
   * sets focussed to true
   *
   * @param event
   */
  const onPressIn = () => {
    setFocussed(true);
  };

  /**
   * sets focussed to true
   *
   * @param event
   */
  const onPressOut = () => {
    setFocussed(false);
  };

  const renderChildren = () => {
    if (isFunction(children)) {
      return children({
        focussed,
        disabled: disabled ?? false,
        checked,
        loading,
      });
    }

    return (
      <>
        {prefix}
        <RNView>
          <RNView style={computedStyle.highlightContainer} />
          <RNView style={computedStyle.icon}>{icon}</RNView>
        </RNView>
        {children}
        {suffix}
      </>
    );
  };

  const icon = getIcon(theme, props, checked);

  return (
    <RNButton
      {...rest}
      style={computedStyle.button}
      onPress={disabled || loading ? undefined : onPress}
      onPressIn={disabled || loading ? undefined : onPressIn}
      onPressOut={disabled || loading ? undefined : onPressOut}
    >
      <RNView style={computedStyle.container}>{renderChildren()}</RNView>
    </RNButton>
  );
};

// Checkbox.defaultProps = {
//   defaultChecked: false,
//   activeColor: 'blue600',
//   inactiveColor: 'gray500',
//   highlightBg: 'gray300',
//   bg: 'transparent',
//   p: 'none',
//   color: 'white',
//   borderRadius: 'md',
//   loading: false,
//   disabled: false,
//   loaderSize: '2xl',
//   loaderColor: 'blue600',
//   block: false,
//   position: 'relative',
//   shadowColor: 'gray800',
//   shadow: 0,
//   fontSize: '5xl',
//   borderless: true,
//   alignItems: 'center',
//   justifyContent: 'center',
//   alignSelf: 'flex-start',
//   onPress: () => {},
//   flexDirection: 'row',
// };

Checkbox.Group = CheckboxGroup;

export { Checkbox };
