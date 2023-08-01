import { Theme, useTheme } from '@mui/material/styles';
import MuiMenuItem from '@mui/material/MenuItem';
import { FC } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

interface MenuItemProps {
    name: string;
    values: string[];
}

const MenuItem: FC<MenuItemProps> = ({ name, values }) => {
    const theme = useTheme();

    return (
        <MuiMenuItem
            key={name}
            value={name}
            style={getStyles(name, values, theme)}
        >
            {name}
        </MuiMenuItem>
    );
}

export default MenuItem;