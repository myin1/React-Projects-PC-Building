import { Link, Outlet, useParams } from "react-router-dom";
import Avalanche from "../assets/images/Avalanche_Hardline_Liquid_Cooled_Gaming_PC.png";
import HeaderBanner from "../components/content/HeaderBanner";
import { Tabs, Tab } from "@mui/material";
import * as React from "react";

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
  //grabs URL parameter to use as value
  let params = useParams();

  return (
    <div>
      <HeaderBanner
        background={Avalanche}
        title="Build Ideas"
        description="Take a look at our builds"
      />
      <Tabs value={params.computerType} variant="scrollable">
        {compTypes.map((compTypes) => (
          <Tab
            value={compTypes}
            label={compTypes}
            component={Link}
            to={`/ComputerTypes/${compTypes}`}
          >
            {compTypes}
          </Tab>
        ))}
      </Tabs>
      <div style={{ backgroundColor: "grey", padding: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}
