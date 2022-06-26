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
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Power Supply",
    image: PSU,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Storage",
    image: Storage,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "CPU",
    image: CPU,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "GPU",
    image: GPU,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "RAM",
    image: RAM,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Cooling",
    image: Fan,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Case",
    image: Case,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
