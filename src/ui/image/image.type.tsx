import { ImageProps as RNImageProps } from 'react-native';
import {
  BackgroundPropsType,
  DimensionPropsType,
  FlexPropsType,
  OpacityPropsType,
  PositionPropsType,
  ZIndexPropsType,
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
  VariantPropsType,
} from '../../types';

export interface ImageProps
  extends RNImageProps,
    BorderPropsType,
    SpacingPropsType,
    ShadowPropsType,
    DimensionPropsType,
    PositionPropsType,
    OpacityPropsType,
    ZIndexPropsType,
    Pick<
      RoundedPropsType,
      | 'rounded'
      | 'roundedTop'
      | 'roundedLeft'
      | 'roundedRight'
      | 'roundedBottom'
    >,
    Pick<BackgroundPropsType, 'bg' | 'background' | 'backgroundColor'>,
    Pick<FlexPropsType, 'flex' | 'alignSelf'>,
    VariantPropsType {}
