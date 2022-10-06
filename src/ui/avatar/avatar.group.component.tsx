import * as React from 'react';

import { Div } from '../div/div.component';
import { AvatarGroupProps } from './avatar.group.type';
import { getThemeProperty, useTheme } from '../../theme';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const AvatarGroup: React.FunctionComponent<AvatarGroupProps> = (
  incomingProps
) => {
  const props = useDefaultProps('AvatarGroup', incomingProps, {
    row: true,
    marginLeft: 'none',
    offset: 'lg',
  });

  const { children, marginLeft, offset, ...rest } = props;
  const { theme } = useTheme();
  const calculatedOffset = getThemeProperty(theme.spacing, offset);
  const calculatedMarginLeft = getThemeProperty(theme.spacing, marginLeft);

  return (
    <Div {...rest} marginLeft={calculatedOffset + calculatedMarginLeft}>
      {React.Children.map(children, (child: React.ReactElement) => {
        return React.cloneElement(child, {
          marginLeft: -1 * calculatedOffset,
        });
      })}
    </Div>
  );
};

// AvatarGroup.defaultProps = {
//   row: true,
//   marginLeft: 'none',
//   offset: 'lg',
// };

export { AvatarGroup };
