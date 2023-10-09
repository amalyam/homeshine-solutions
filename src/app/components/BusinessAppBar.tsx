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
// set contact info color from parent Box?
// show "FREE QUOTE" button in sm
// if on Home, free quote button centers contact form in viewport
// fix Toolbar Box margin (right=0, left 20-30px), then increase logo size

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
        style={{ display: "flex", alignItems: "center" }}
      >
        <Container maxWidth="sm">
          <ContactForm />
        </Container>
      </Modal>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              marginRight: "0px",
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
          <Link href="/" underline="none">
            <Image
              src={HomeShineLogoTransparent}
              alt="HomeShine logo"
              style={{ objectFit: "contain", height: "80px", marginLeft: 10 }}
            />
          </Link>
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
          <Box
            sx={{
              textAlign: {
                sm: "center",
                md: "right",
              },
            }}
          >
            <div>
              <div>
                <Box>
                  <Link
                    href="mailto:HomeShineRoofPro@gmail.com"
                    color={theme.palette.primary.dark}
                  >
                    HomeShineRoofPro@gmail.com
                  </Link>
                </Box>
              </div>
              <div>
                <Box>
                  <Link
                    href="tel:5089210275"
                    color={theme.palette.primary.dark}
                    underline="none"
                  >
                    (508) 921-0275
                  </Link>
                </Box>
              </div>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
