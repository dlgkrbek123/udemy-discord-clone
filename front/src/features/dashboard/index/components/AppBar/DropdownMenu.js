import { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { setUserDetails } from '../../../../../store/actions/authActions';
import store from '../../../../../store/store';

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClickProfileMenu = () => {
    handleCloseMenu();
  };

  const handleClickMyAccountMenu = () => {
    handleCloseMenu();
  };

  const handleClickLogoutMenu = () => {
    localStorage.clear();
    store.dispatch(setUserDetails(null));
    window.location.pathname = '/login';
  };

  return (
    <div>
      <IconButton style={{ color: 'white ' }} onClick={handleOpenMenu}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleClickLogoutMenu}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownMenu;
