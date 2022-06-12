import { Card, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import FullCard from "../components/content/FullCard";

import Mobo from "../assets/images/ASUS_ROG_STRIX_Z490-I_GAMING.png";
import RAM from "../assets/images/2014_Corsair_Dominator_Platinum_2x4GB,_1866MHz.jpg";
import GPU from "../assets/images/5385857910_63f6d85035_b.jpg";
import PSU from "../assets/images/power-5209513_1280.webp";
import Storage from "../assets/images/Samsung_SSD_840_EVO_1TB.jpg";
import CPU from "../assets/images/AMD_Ryzen_5_2600_(39851733273).jpg";
import Case from "../assets/images/Avalanche_Hardline_Liquid_Cooled_Gaming_PC.png";
import Fan from "../assets/images/computers-88000_1280.webp";

export default function Parts() {
  return (
    <div>
      <Typography variant="h1" textAlign="center" mt={3}>
        PC Components
      </Typography>
      <Container>
        <Grid container alignItems="stretch" my={5}>
          <FullCard
            title="Motherboard"
            img={Mobo}
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></FullCard>
          <FullCard
            title="Power Supply"
            img={PSU}
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></FullCard>
          <FullCard
            title="Storage"
            img={Storage}
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></FullCard>
          <FullCard
            title="CPU"
            img={CPU}
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></FullCard>
          <FullCard
            title="GPU"
            img={GPU}
            body="The power house of the computer."
          ></FullCard>
          <FullCard
            title="RAM"
            img={RAM}
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></FullCard>
          <FullCard
            title="Cooling"
            img={Fan}
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></FullCard>
          <FullCard
            title="Case"
            img={Case}
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></FullCard>
        </Grid>
      </Container>
    </div>
  );
}
