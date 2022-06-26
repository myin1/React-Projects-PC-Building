import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import FullCard from "../components/content/FullCard";
import HeaderBanner from "../components/content/HeaderBanner";
import { Typography } from "@mui/material";

import Background from "../assets/images/niclas-illg-gyRa86ExKTw-unsplash.jpg";
import Mobo from "../assets/images/ASUS_ROG_STRIX_Z490-I_GAMING.png";
import RAM from "../assets/images/2014_Corsair_Dominator_Platinum_2x4GB,_1866MHz.jpg";
import GPU from "../assets/images/5385857910_63f6d85035_b.jpg";
import PSU from "../assets/images/power-5209513_1280.webp";
import Storage from "../assets/images/Samsung_SSD_840_EVO_1TB.jpg";
import CPU from "../assets/images/AMD_Ryzen_5_2600_(39851733273).jpg";
import Case from "../assets/images/Avalanche_Hardline_Liquid_Cooled_Gaming_PC.png";
import Fan from "../assets/images/computers-88000_1280.webp";

export const partList = [
  {
    title: "Motherboard",
    image: Mobo,
    body: "The Motherboard brings all of the components together and allows them to work with each other.",
  },
  {
    title: "Power Supply",
    image: PSU,
    body: "The component that provides the power for the computer to work.",
  },
  {
    title: "Storage",
    image: Storage,
    body: "The device inside the computer that stores all of the information you have saved.",
  },
  {
    title: "CPU (Central Processing Unit)",
    image: CPU,
    body: "The brains of the computer. This compoonent uses all of the components to do the operations you ask for.",
  },
  {
    title: "GPU (Graphics Processing Unit)",
    image: GPU,
    body: "The component that provides a video output and processes it to the monitor.",
  },
  {
    title: "RAM (Random Access Memory)",
    image: RAM,
    body: "The place where data is stored for a short time and is used as the processor needs it.",
  },
  {
    title: "Cooling",
    image: Fan,
    body: "The way to keep your system online. Cooling is essential to your PCs lifespan.",
  },
  {
    title: "Case",
    image: Case,
    body: "The house of the system. This component stores everything inside to make it one complete package.",
  },
];

export default function Parts() {
  return (
    <div>
      <div>
        <HeaderBanner background={Background} title="PC Components" />
      </div>
      <Container>
        <Typography variant="h2" textAlign="center" mt={3}>
          Title
        </Typography>
        <Grid container alignItems="stretch" my={5}>
          {partList.map((part) => (
            <FullCard
              title={part.title}
              img={part.image}
              body={part.body}
            ></FullCard>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
