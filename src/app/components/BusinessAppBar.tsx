"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ContactForm from "./ContactForm";
import Container from "@mui/material/Container";
import HomeShineLogoTransparent from "src/images/homeshine-solutions-llc-transparent.svg";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import theme from "../theme";
import Toolbar from "@mui/material/Toolbar";

import { useState } from "react";
import { Lexend_Giga } from "next/font/google";

const lexendGiga = Lexend_Giga({ subsets: ["latin"] });

// TODO: get contact info to align center in sm
// show "FREE QUOTE" button in sm
// if on Home, free quote button centers contact form in viewport

const pages = ["Home", "Services", "Blog", "FAQ", "About Us"];

export default function BusinessAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

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

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    return setOpen(false);
  };

  return (
    <AppBar position="sticky">
      <Modal
        open={open}
        onClose={handleClose}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="sm">
          <ContactForm />
        </Container>
      </Modal>
      <Box sx={{ width: "100%" }}>
        <Toolbar
          disableGutters
          sx={{
            flexDirection: { sm: "column", md: "row" },
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: { xs: "flex", md: "none" },
              marginRight: "0px",
              maxWidth: "1700px",
              flexDirection: { md: "row", sm: "column" },
            }}
          >
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
                  href={
                    page === "Home"
                      ? "/"
                      : page === "About Us"
                      ? "/About"
                      : `/${page}`
                  }
                  underline="none"
                >
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      textAlign: "center",
                      color: theme.palette.primary.dark,
                    }}
                  >
                    {page}
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Link href="/" underline="none">
                <Image
                  src={HomeShineLogoTransparent}
                  alt="HomeShine logo"
                  style={{
                    objectFit: "contain",
                    height: "80px",
                    marginLeft: 10,
                  }}
                />
              </Link>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  mx: 4,
                  paddingTop: 2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {pages.map((page) => (
                  <Link
                    href={
                      page === "Home"
                        ? "/"
                        : page === "About Us"
                        ? "/About"
                        : `/${page}`
                    }
                    underline="none"
                  >
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
                    flexShrink: 0,
                  }}
                  onClick={() => {
                    window.location.pathname === "/"
                      ? document.getElementById("name")?.focus()
                      : setOpen(true);
                  }}
                >
                  FREE QUOTE
                </Button>
              </Box>
            </Box>
            <Box
              style={{
                display: "flex",
                flexShrink: 0,
                alignItems: "flex-end",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box>
                <Link
                  href="mailto:HomeShineSolutionsLLC@gmail.com"
                  color={theme.palette.primary.dark}
                  variant="body1"
                  fontSize=".9rem"
                >
                  HomeShineSolutionsLLC@gmail.com
                </Link>
              </Box>
              <Box>
                <Link
                  href="tel:5089210275"
                  color={theme.palette.primary.dark}
                  underline="none"
                  variant="body1"
                  fontSize=".9rem"
                >
                  (508) 921-0275
                </Link>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
