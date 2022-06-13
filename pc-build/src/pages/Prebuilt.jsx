import HeaderBanner from "../components/content/HeaderBanner";
import PromoCard from "../components/content/PromoCard";
import SpanningTable from "../components/content/SpanningTable";
import AccordionItem from "../components/content/AccordionItem";

import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";

import Avalanche from "../assets/images/Avalanche_Hardline_Liquid_Cooled_Gaming_PC.png";

export default function PreBuilt() {
  const types = [
    "Entertainment",
    "Gaming",
    "Streaming",
    "Production",
    "Editing",
    "Theather",
    "VR",
  ];

  const components = ["CPU", "Motherboard", "GPU", "RAM", "Storage", "Case"];

  const description1 = [
    "Ryzen 5 5600",
    "Aorus X570 Pro Wifi",
    "Radeon Rx 5700",
    "G.Skill 16GB 3600Mbs",
    "1TB 980 Samsung Evo",
    "Be Quiet Dark Base 500Dx",
  ];

  const description2 = [
    "Ryzen 7 5800x",
    "x570 Dark Hero",
    "Nvidia Rtx 3070",
    "G.Skill 32GB 3600Mbs",
    "1TB 970 Samsung Evo Plus",
    "Be Quiet Dark Base 500Dx",
  ];

  const description3 = [
    "Ryzen 9 5950x",
    "x570 Dark Hero",
    "Nvidia Rtx 3080",
    "G.Skill 32GB 3600Mbs",
    "1TB 970 Samsung Evo Pro",
    "Be Quiet Dark Base 500Dx",
  ];

  return (
    <div>
      <div>
        <HeaderBanner
          background={Avalanche}
          title="Pre-Built PCs"
          description="For 3 heads that need some assistance"
        />
      </div>
      <div>
        <Container maxWidth="xl">
          <Grid container my={5} spacing={2}>
            <Grid item xs={12} lg={4} sm={4}>
              <PromoCard
                title="Low Tier"
                image={Avalanche}
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </Grid>
            <Grid item xs={12} lg={4} sm={4}>
              <PromoCard
                title="Medium Tier"
                image={Avalanche}
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </Grid>
            <Grid item xs={12} lg={4} sm={4}>
              <PromoCard
                title="Pro Tier"
                image={Avalanche}
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div>
        {types.map((types) => (
          <AccordionItem
            summary={types}
            details={
              <SpanningTable
                header={components}
                description1={description1}
                description2={description2}
                description3={description3}
              />
            }
          />
        ))}
      </div>
    </div>
  );
}
