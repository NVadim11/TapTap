import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('1440'));
  
    const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
  
    const menuItems = ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5', 'Test 6'];
    return (
        <AppBar position="static">
        <Toolbar>
          {/* Логотип */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Логотип
          </Typography>
  
          {/* Навігація для десктопу */}
          {!isMobile && (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              {menuItems.map((item, index) => (
                <Button key={index} color="inherit">
                  {item}
                </Button>
              ))}
            </Box>
          )}
  
          {/* Кнопка Book */}
          <Button color="inherit">Book</Button>
  
          {/* Гамбургер меню для мобільних */}
          {isMobile && (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
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
}

export default Header;