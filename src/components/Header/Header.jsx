import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('1280'));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);

  const menuItems = ['Why Now', 'Our Projects', 'How it Works', 'Our Goals', 'Work with Us', 'Our Social Network'];

  const navBtns = {
    padding: '8px 16px',
    fontSize: '16px',
    textTransform: 'initial'
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        height: isMobile ? '80px' : '116px', 
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '100%', padding: '0 !important' }}>
      <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: isMobile ? '1' : '0',
                fontFamily: 'var(--font-family)',
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '133%',
                letterSpacing: '-0.06em',
                color: '#fff',
                width: 'auto',
              }}
            >
          TapTap
        </Typography>

        {!isMobile && (
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {menuItems.map((item, index) => (
              <Button key={index} color="inherit" sx={navBtns}>
                {item}
              </Button>
            ))}
          </Box>
        )}

        <Button color="inherit">Book</Button>

        {isMobile && (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={isMenuOpen ? handleMenuClose : handleMenuOpen}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleMenuClose}
            >
              {menuItems.map((item, index) => (
                <MenuItem key={index} onClick={handleMenuClose}>
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
