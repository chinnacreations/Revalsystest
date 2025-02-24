import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { HiOutlineUserGroup } from "react-icons/hi";
import { SlBookOpen } from "react-icons/sl";
import { TbReportSearch } from "react-icons/tb";
import { BsCloudUpload } from "react-icons/bs";
import { GrCircleAlert } from "react-icons/gr";
import { TbCloudStorm } from "react-icons/tb";
import { TbReport } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";
import { CiLogout } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import "./navbar.css";
import { TbApiApp } from "react-icons/tb";
import { FiHelpCircle } from "react-icons/fi";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* Top Navbar */}
      <AppBar position="fixed" open={open}>
        <div className="mob-res-none">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[{ mr: 2 }, open && { display: "none" }]}
            >
              <MenuIcon />
            </IconButton>
            <div className="heading-bar">
              <h4 className="topheading text-center">DASHBOARD</h4>
            </div>
            <div className="button-align">
              <button className=" btn btn-primary m-2">
                <div className="mt-2 d-flex">
                  <TbApiApp size={20} color="#fff" />
                  <p className="para-size">API DOCUMANTATION</p>
                </div>
              </button>
              <button className=" btn btn-primary m-2">
                <div className="mt-2 d-flex">
                  <FiHelpCircle size={20} color="#fff" />
                  <p className="para-size">Help</p>
                </div>
              </button>
              <button className=" btn btn-primary m-2">
                <div className="mt-2 d-flex">
                  <RxAvatar size={20} color="#fff" />
                  <p className="para-size">My Profile</p>
                </div>
              </button>
              <button className=" btn btn-primary m-2">
                <div className="mt-2 d-flex">
                  <CiLogout size={20} color="#fff" />
                  <p className="para-size">Logout</p>
                </div>
              </button>
            </div>
          </Toolbar>
        </div>
        <div className="lap-res-none mob-res-block">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[{ mr: 2 }, open && { display: "none" }]}
            >
              <MenuIcon />
            </IconButton>
            <div className="end-icons">
              <button className=" btn btn-primary m-2">
                <div className="mt-2 d-flex">
                  <TbApiApp size={20} color="#fff" />
                </div>
              </button>
              <button className=" btn btn-primary m-2">
                <div className="mt-2 d-flex">
                  <FiHelpCircle size={20} color="#fff" />
                </div>
              </button>
              <button className=" btn btn-primary m-2">
                <div className="mt-2 d-flex">
                  <RxAvatar size={20} color="#fff" />
                </div>
              </button>
              <button className=" btn btn-primary m-2">
                <div className="mt-2 d-flex">
                  <CiLogout size={20} color="#fff" />
                </div>
              </button>
            </div>
          </Toolbar>
        </div>
      </AppBar>

      <div className="mob-res-none">
        {!open && (
          <Box className="mini-sidebar">
            <div className="sidebar-icon">
              <HiOutlineUserGroup size={30} color="#000" />
            </div>
            <div className="sidebar-icon">
              <SlBookOpen size={25} color="#000" />
            </div>
            <div className="sidebar-icon">
              <TbReportSearch size={25} color="#000" />
            </div>
            <div className="sidebar-icon">
              <BsCloudUpload size={25} color="#000" />
            </div>
            <div className="sidebar-icon">
              <GrCircleAlert size={25} color="#000" />
            </div>
            <div className="sidebar-icon">
              <TbCloudStorm size={25} color="#000" />
            </div>
            <div className="sidebar-icon">
              <TbReport size={25} color="#000" />
            </div>
            <div className="sidebar-icon">
              <RxAvatar size={25} color="#000" />
            </div>
          </Box>
        )}
      </div>

      <div>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
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
          <div className="sidebar-icon ">
            <HiOutlineUserGroup size={30} color="#000" />
            <h6 className="heading-sidebar">User</h6>
          </div>
          <div className="sidebar-icon">
            <SlBookOpen size={30} color="#000" />
            <h6 className="heading-sidebar">Masters</h6>
          </div>
          <div className="sidebar-icon">
            <TbReportSearch size={30} color="#000" />
            <h6 className="heading-sidebar">Acquiring Request</h6>
          </div>
          <div className="sidebar-icon">
            <BsCloudUpload size={30} color="#000" />
            <h6 className="heading-sidebar">Bulk Upload</h6>
          </div>
          <div className="sidebar-icon">
            <GrCircleAlert size={30} color="#000" />
            <h6 className="heading-sidebar">Portability Info</h6>
          </div>
          <div className="sidebar-icon">
            <TbCloudStorm size={30} color="#000" />
            <h6 className="heading-sidebar">Pending Policies</h6>
          </div>
          <div className="sidebar-icon">
            <TbReport size={30} color="#000" />
            <h6 className="heading-sidebar">Reports</h6>
          </div>
          <div className="sidebar-icon">
            <RxAvatar size={30} color="#000" />
            <h6 className="heading-sidebar">My Profile</h6>
          </div>
        </Drawer>
      </div>

      <Main open={open}>
        <DrawerHeader />
        <div className="mt-4 mob-res-none">
          <div className="logint-time">
            <h6>Last Login:24-02-2025 2:36:27</h6>
          </div>
          <div className="input-column-all">
            <h3>
              <span>
                <FaArrowLeft size={15} />
              </span>
              DASHBOARD
            </h3>
            <div className="input-column">
              <label htmlFor="insurer">Insurer</label>
              <select className="form-control">
                <option value="someOption">Exicide Co-life Isurence</option>
                <option value="otherOption">Other option</option>
              </select>
            </div>
            <div className="input-column">
              <label htmlFor="policy">Policy Type</label>
              <select className="form-control">
                <option value="someOption">Retail</option>
                <option value="otherOption">Other option</option>
              </select>
            </div>
            <div className="input-column">
              <label htmlFor="Date-selection">Select Date</label>
              <input
                className="form-control"
                id="Date-selection"
                type="Date"
                placeholder="Select Date"
              />
            </div>
            <button className="btn btn-primary">Submit</button>
          </div>
          <div className="cards-section mt-5 ">
            <div className="card-block mr-2 ">
              <div className="card p-3 color-card-blue">
                <div className="symbol">
                  <GrCircleAlert size={10} color="#000" />
                </div>
                <h3>34500</h3>
                <p>Ports Requested Recieved</p>
              </div>
            </div>
            <div className="card-block ">
              <div className="card p-3 color-card-green">
                <div className="symbol">
                  <GrCircleAlert size={10} color="#000" />
                </div>
                <h3>34500</h3>
                <p>Ports Requested Accepted</p>
              </div>
            </div>
            <div className="card-block  mr-2">
              <div className="card p-3 color-card-skyblue">
                <div className="symbol">
                  <GrCircleAlert size={10} color="#000" />
                </div>
                <h3>34500</h3>
                <p>Pending Ports Requests</p>
              </div>
            </div>
            <div className="card-block ">
              <div className="card p-3 color-card-red">
                <div className="symbol">
                  <GrCircleAlert size={10} color="#000" />
                </div>
                <h3>34500</h3>
                <p>Rejected Ports Requests</p>
              </div>
            </div>
            <div className="card-block ">
              <div className="card p-3 color-card-orang">
                <div className="symbol">
                  <GrCircleAlert size={10} color="#000" />
                </div>
                <h3>34500</h3>
                <p>Total Insurence Login for Porting</p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-dashboard mt-4 lap-res-none mob-res-block ml-5">
          <div className="input-column-all-sm">
            <div className="input-column">
              <label htmlFor="insurer">Insurer</label>
              <select className="form-control">
                <option value="someOption">Exicide Co-life Isurence</option>
                <option value="otherOption">Other option</option>
              </select>
            </div>
            <div className="input-column">
              <label htmlFor="policy">Policy Type</label>
              <select className="form-control">
                <option value="someOption">Retail</option>
                <option value="otherOption">Other option</option>
              </select>
            </div>
          </div>
          <div>
            <h3>Request Recieved</h3>
            <div className="card p-3">
              <p>Last 7 days Data</p>
              <div className="card-data-sm">
                <div>
                  <h4>Ports Request recieved</h4>
                  <h2>3500</h2>
                </div>
                <div>
                  <h4>Accepted Ports Requests</h4>
                  <h2>3000</h2>
                </div>
              </div>
              <div className="card-data-sm">
                <div>
                  <h4>Pending Ports Requests</h4>
                  <h2>2345</h2>
                </div>
                <div>
                  <h4>Rejected Ports Requests</h4>
                  <h2>1568</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </Box>
  );
}
