import { Box } from "@mui/system";
import { Link, useLocation, Routes, Route } from "react-router-dom";
import Avalanche from "../assets/images/Avalanche_Hardline_Liquid_Cooled_Gaming_PC.png";
import HeaderBanner from "../components/content/HeaderBanner";
import { Tabs, Tab } from "@mui/material";
import * as React from "react";
import TabContent from "../components/content/TabContent";
import AllPc from "./ComponentPages/AllPc";

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
  const tabNameToIndex = {
    0: "Entertainment",
    1: "Gaming",
    2: "Streaming",
    3: "Production",
    4: "Editing",
    5: "Theater",
    6: "VR",
  };

  const indexToTabName = {
    Entertainment: 0,
    Gaming: 1,
    Streaming: 2,
    Production: 3,
    Editing: 4,
    Theater: 5,
    VR: 6,
  };

  const routeMatch = useRouteMatch(compTypes);

  function useRouteMatch(patterns) {
    const { pathname } = useLocation();

    for (let i = 0; i < patterns.length; i += 1) {
      const pattern = patterns[i];
      if (String(pathname).includes(pattern)) {
        const possibleMatch = pattern;
        console.log(possibleMatch);
        return possibleMatch;
      }
    }
    return null;
  }

  const [value, setValue] = React.useState(indexToTabName[routeMatch]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function headerTab(compType, index) {
    return <Tab label={compType} component={Link} to={compType} />;
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
              value={indexToTabName[routeMatch]}
              onChange={handleChange}
              aria-label="wrapped label"
            >
              {compTypes.map((compType, index) => {
                return headerTab(compType, index);
              })}
            </Tabs>
          </Box>
          {compTypes.map((compType, index) => (
            <TabContent value={indexToTabName[routeMatch]} index={index}>
              <Routes>
                <Route path={compType} element={<AllPc name={compType} />} />
              </Routes>
            </TabContent>
          ))}
        </Box>
      </div>
    </div>
  );
}
