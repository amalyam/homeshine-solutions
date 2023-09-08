"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import HomeShineLogoTransparent from "src/images/homeshine-llc-transparent.svg";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import theme from "../theme";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// TODO: get contact info to align center in sm
// set contact info color from parent Box?
// show "FREE QUOTE" button in sm
// free quote button center contact form in viewport

const pages = ["Home", "Services", "Blog", "FAQ", "About Us"];

export default function BusinessAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu items"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link
                  href={page === "Home" ? "/" : `/${page}`}
                  underline="none"
                >
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      color={theme.palette.primary.dark}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Image
            src={HomeShineLogoTransparent}
            alt="HomeShine logo"
            style={{ objectFit: "contain", height: "80px" }}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              mx: 9,
              paddingTop: 2,
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Link href={page === "Home" ? "/" : `/${page}`} underline="none">
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: theme.palette.primary.dark,
                    display: "block",
                    fontSize: "1rem",
                  }}
                >
                  {page}
                </MenuItem>
              </Link>
            ))}
            <Button
              variant="contained"
              sx={{
                py: 1,
                px: 1.25,
                mx: 3,
                marginBottom: 1.5,
                fontSize: "1.15rem",
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: theme.palette.secondary.light,
                },
              }}
              onClick={() => document.getElementById("name")?.focus()}
            >
              FREE QUOTE
            </Button>
          </Box>
          <Box
            sx={{
              typography: {
                sm: { textAlign: "center", display: "center" },
                md: { textAlign: "right" },
              },
            }}
          >
            <div>
              <div>
                <Box>
                  <a
                    style={{ color: theme.palette.primary.dark }}
                    href="mailto:HomeShineRoofPro@gmail.com"
                  >
                    HomeShineRoofPro@gmail.com
                  </a>
                </Box>
              </div>
              <div>
                <Box>
                  <a
                    style={{
                      color: theme.palette.primary.dark,
                    }}
                    href="tel:5089210275"
                  >
                    (508) 921-0275
                  </a>
                </Box>
              </div>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
