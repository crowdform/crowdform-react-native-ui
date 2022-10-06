import * as React from 'react';

import { TagProps } from './tag.type';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { Button } from '../button/button.component';

const Tag: React.FunctionComponent<TagProps> = (incomingProps) => {
  const props = useDefaultProps('Tag', incomingProps, {
    px: 'lg',
    py: 'sm',
    bg: 'gray400',
    color: 'black',
    fontSize: 'lg',
    textAlign: 'auto',
    textTransform: 'none',
    borderRadius: 'md',
    borderWidth: 0,
    borderColor: 'transparent',
    onPress: () => {},
  });

  const { underlayColor, ...rest } = props;

  return <Button {...rest} underlayColor={underlayColor ?? props.bg} />;
};

export { Tag };
