import { ModalProps as RNModalProps } from 'react-native';
import {
  BackgroundPropsType,
  DimensionPropsType,
  FlexPropsType,
  OverlayPropsType,
  SpacingPropsType,
  RoundedPropsType,
  VariantPropsType,
} from '../../types';

export interface OverlayRef {
  close: () => void;
  open: () => void;
}

export interface OverlayProps
  extends RNModalProps,
    SpacingPropsType,
    RoundedPropsType,
    OverlayPropsType,
    Pick<DimensionPropsType, 'width' | 'height' | 'minHeight' | 'minWidth'>,
    Pick<
      FlexPropsType,
      'flex' | 'justifyContent' | 'alignItems' | 'flexDirection' | 'flexWrap'
    >,
    Pick<BackgroundPropsType, 'bg' | 'background' | 'backgroundColor'>,
    VariantPropsType {
  onBackdropPress?: () => void;
}
