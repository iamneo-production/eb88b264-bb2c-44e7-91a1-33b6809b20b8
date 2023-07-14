import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AppBar from "@mui/material/AppBar";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Book } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectUser } from "../Features/userSlice";
import { makeStyles , withStyles} from "@mui/styles";
import MuiListItem from "@material-ui/core/ListItem";
import ReceiptIcon from '@mui/icons-material/Receipt';
import AssessmentIcon from "@mui/icons-material/Assessment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SecurityIcon from "@mui/icons-material/Security";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link } from "react-router-dom";
import { brown } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "white"
  },
}));

const ListItem = withStyles({
  root: {
    "&:hover": {
      backgroundColor: "#DFD7BF",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
  },
  selected: {},
 })(MuiListItem);

 
 function PersistentDrawerLeft() {
   const classes = useStyles();
   const drawerWidth = 240;
   const user = useSelector((state) => state.user);
   const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
     ({ theme, open }) => ({
       flexGrow: 1,
       padding: theme.spacing(3),
       transition: theme.transitions.create("margin", {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        }),
      })
      );
      const pages = ["Ledger", "Payments", "Taxes", "Inventories"];
      const settings = [ user.email,"Logout" ];

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="classes.root">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="static" style={{ background: "#3F2305" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <Book
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  color: "#F2EAD3",
                }}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/home"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "serif",
                  fontWeight: 700,
                  color: "#F2EAD3",
                  textDecoration: "none",
                }}
              >
                Kanakku
              </Typography>

              <Box
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              ></Box>
              <Book
                sx={{
                  display: { xs: "flex", md: "none" },
                  mr: 1,
                  color: "#F2EAD3",
                }}
              />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "serif",
                  fontWeight: 700,
                  color: "#F2EAD3",
                  textDecoration: "none",
                }}
              >
                KANAKKU
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Link to="/home">
                  <Button onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{ color: "#F2EAD3" }}>
                      Ledger
                    </Typography>
                  </Button>
                </Link>
                <Link to="/trans">
                  <Button onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{ color: "#F2EAD3" }}>
                      Payments
                    </Typography>
                  </Button>
                </Link>
                <Link to="/taxes">
                  <Button onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{ color: "#F2EAD3" }}>
                      Taxes
                    </Typography>
                  </Button>
                </Link>
                <Link to="/inv">
                  <Button onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{ color: "#F2EAD3" }}>
                      Inventories
                    </Typography>
                  </Button>
                </Link>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <ManageAccountsIcon sx={{ color: "#F2EAD3" }} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px", color: "#F2EAD3" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={handleCloseUserMenu}
                      sx={{
                        "&:hover": {
                          backgroundColor: "#DFD7BF",
                          color: "white",
                        },
                      }}
                    >
                      <Typography textAlign="center" component="a" href="/">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>

          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
              backgroundColor: "#F5F5F5",
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ReceiptIcon />
                  </ListItemIcon>
                  <ListItemText primary="Invoice & Billing" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AssessmentIcon />
                  </ListItemIcon>
                  <ListItemText primary="Financial Report" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AttachMoneyIcon />
                  </ListItemIcon>
                  <ListItemText primary="Payroll Managemnt" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AccountBalanceWalletIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Track
            Expenses & Revenues"
                  />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SecurityIcon />
                  </ListItemIcon>
                  <ListItemText primary="Security & Backup" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SummarizeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Bank Reconciliation" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AccountBoxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Account Settings" />
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>
        </AppBar>
      </Box>
    </div>
  );
}


export default PersistentDrawerLeft;