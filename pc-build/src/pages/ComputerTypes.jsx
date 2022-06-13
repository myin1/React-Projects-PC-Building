import { Box } from "@mui/system";
import {
  Route,
  Routes,
  Link,
  Outlet,
  matchPath,
  useLocation,
} from "react-router-dom";
import Avalanche from "../assets/images/Avalanche_Hardline_Liquid_Cooled_Gaming_PC.png";
import HeaderBanner from "../components/content/HeaderBanner";
import { Tabs, Tab } from "@mui/material";
import * as React from "react";
import TabContent from "../components/content/TabContent";

const compTypes = [
  "Entertainment",
  "Gaming",
  "Streaming",
  "Production",
  "Editing",
  "Theater",
  "VR",
];

export default function ComputerTypes() {
  const [value, setValue] = React.useState(0);
  const routeMatch = useRouteMatch(["/inbox/:id", "/drafts", "/trash"]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  function Invoices() {
    return (
      <div>
        <h1>Invoices</h1>
        <Outlet />
      </div>
    );
  }

  function headerTab(compType, index) {
    return (
      <Tab
        label={compType}
        component={Link}
        to={compType}
        {...a11yProps(index)}
      />
    );
  }

  function useRouteMatch(patterns) {
    const { pathname } = useLocation();

    for (let i = 0; i < patterns.length; i += 1) {
      const pattern = patterns[i];
      const possibleMatch = matchPath(pattern, pathname);
      if (possibleMatch !== null) {
        return possibleMatch;
      }
    }
    return null;
  }

  return (
    <div>
      <div>
        <HeaderBanner
          background={Avalanche}
          title="Build Ideas"
          description="Take a look at our builds"
        />
      </div>
      <div>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label"
            >
              {compTypes.map((compType, index) => {
                return headerTab(compType, index);
              })}
            </Tabs>
          </Box>
          {compTypes.map((compTypes, index) => (
            <TabContent value={value} index={index}>
              <Outlet />
            </TabContent>
          ))}
        </Box>
      </div>
    </div>
  );
}
