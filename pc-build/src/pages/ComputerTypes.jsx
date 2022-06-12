import { Box } from "@mui/system";
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
const description = [
  "Hi Hello",
  "Hola hola",
  "Hallo Hallo",
  "Kon'nichiwa kon'nichiwa",
  "description",
  "description",
  "description",
];

export default function ComputerTypes() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
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
              {compTypes.map((compTypes, index) => (
                <Tab label={compTypes} {...a11yProps(index)} />
              ))}
            </Tabs>
          </Box>
          {compTypes.map((compTypes, index) => (
            <TabContent value={value} index={index}>
              {description[index]}
            </TabContent>
          ))}
        </Box>
      </div>
    </div>
  );
}
