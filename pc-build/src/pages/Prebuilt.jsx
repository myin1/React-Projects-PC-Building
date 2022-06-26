import * as React from "react";
import HeaderBanner from "../components/content/HeaderBanner";
import PromoCard from "../components/content/PromoCard";
import SpanningTable from "../components/content/SpanningTable";
import AccordionItem from "../components/content/AccordionItem";

import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";

import Desktop from "../assets/images/alienware-Hpaq-kBcYHk-unsplash.jpg";
import Avalanche from "../assets/images/Avalanche_Hardline_Liquid_Cooled_Gaming_PC.png";
import Avant from "../assets/images/Avant-Tower-Gaming-PC.png";
import AVA from "../assets/images/AVADirect-Custom-X99-Intel-Core-i7-gaming-cpu.png";

export default function PreBuilt() {
  const components = ["CPU", "Motherboard", "GPU", "RAM", "Storage", "Case"];
  const accordionLists = [
    {
      label: "Entertainment",
      panel: "panel1",
      header: ["Low Tier", "Mid Tier", "High Tier"],
      lowTier: [
        "Ryzen 5 5600",
        "Aorus X570 Pro Wifi",
        "Radeon Rx 5700",
        "G.Skill 16GB 3600Mbs",
        "1TB 980 Samsung Evo",
        "Be Quiet Dark Base 500Dx",
      ],
      midTier: [
        "Ryzen 5 5600",
        "Aorus X570 Pro Wifi",
        "Radeon Rx 5700",
        "G.Skill 16GB 3600Mbs",
        "1TB 980 Samsung Evo",
        "Be Quiet Dark Base 500Dx",
      ],
      highTier: [
        "Ryzen 5 5600",
        "Aorus X570 Pro Wifi",
        "Radeon Rx 5700",
        "G.Skill 16GB 3600Mbs",
        "1TB 980 Samsung Evo",
        "Be Quiet Dark Base 500Dx",
      ],
    },
    {
      label: "Gaming",
      panel: "panel2",
      header: ["Low Tier", "Mid Tier", "High Tier"],
      lowTier: [
        "Ryzen 5 5600",
        "Aorus X570 Pro Wifi",
        "Radeon Rx 5700",
        "G.Skill 16GB 3600Mbs",
        "1TB 980 Samsung Evo",
        "Be Quiet Dark Base 500Dx",
      ],
      midTier: [
        "Ryzen 5 5600",
        "Aorus X570 Pro Wifi",
        "Radeon Rx 5700",
        "G.Skill 16GB 3600Mbs",
        "1TB 980 Samsung Evo",
        "Be Quiet Dark Base 500Dx",
      ],
      highTier: [
        "Ryzen 5 5600",
        "Aorus X570 Pro Wifi",
        "Radeon Rx 5700",
        "G.Skill 16GB 3600Mbs",
        "1TB 980 Samsung Evo",
        "Be Quiet Dark Base 500Dx",
      ],
    },
    {
      label: "Streaming",
      panel: "panel3",
      header: ["Low Tier", "Mid Tier", "High Tier"],
      lowTier: [
        "Ryzen 5 5600",
        "Aorus X570 Pro Wifi",
        "Radeon Rx 5700",
        "G.Skill 16GB 3600Mbs",
        "1TB 980 Samsung Evo",
        "Be Quiet Dark Base 500Dx",
      ],
      midTier: [
        "Ryzen 5 5600",
        "Aorus X570 Pro Wifi",
        "Radeon Rx 5700",
        "G.Skill 16GB 3600Mbs",
        "1TB 980 Samsung Evo",
        "Be Quiet Dark Base 500Dx",
      ],
      highTier: [
        "Ryzen 5 5600",
        "Aorus X570 Pro Wifi",
        "Radeon Rx 5700",
        "G.Skill 16GB 3600Mbs",
        "1TB 980 Samsung Evo",
        "Be Quiet Dark Base 500Dx",
      ],
    },
    {
      label: "Production",
      panel: "panel4",
      header: ["Low Tier", "Mid Tier", "High Tier"],
      lowTier: [
        "Ryzen 5 5600",
        "Aorus X570 Pro Wifi",
        "Radeon Rx 5700",
        "G.Skill 16GB 3600Mbs",
        "1TB 980 Samsung Evo",
        "Be Quiet Dark Base 500Dx",
      ],
      midTier: [
        "Ryzen 5 5600",
        "Aorus X570 Pro Wifi",
        "Radeon Rx 5700",
        "G.Skill 16GB 3600Mbs",
        "1TB 980 Samsung Evo",
        "Be Quiet Dark Base 500Dx",
      ],
      highTier: [
        "Ryzen 5 5600",
        "Aorus X570 Pro Wifi",
        "Radeon Rx 5700",
        "G.Skill 16GB 3600Mbs",
        "1TB 980 Samsung Evo",
        "Be Quiet Dark Base 500Dx",
      ],
    },
    {
      label: "Editing",
      panel: "panel5",
      header: ["Low Tier", "Mid Tier", "High Tier"],
      lowTier: [
        "Ryzen 5 5600",
        "Aorus X570 Pro Wifi",
        "Radeon Rx 5700",
        "G.Skill 16GB 3600Mbs",
        "1TB 980 Samsung Evo",
        "Be Quiet Dark Base 500Dx",
      ],
      midTier: [
        "Ryzen 5 5600",
        "Aorus X570 Pro Wifi",
        "Radeon Rx 5700",
        "G.Skill 16GB 3600Mbs",
        "1TB 980 Samsung Evo",
        "Be Quiet Dark Base 500Dx",
      ],
      highTier: [
        "Ryzen 5 5600",
        "Aorus X570 Pro Wifi",
        "Radeon Rx 5700",
        "G.Skill 16GB 3600Mbs",
        "1TB 980 Samsung Evo",
        "Be Quiet Dark Base 500Dx",
      ],
    },
    {
      label: "Theater",
      panel: "panel6",
      header: ["Low Tier", "Mid Tier", "High Tier"],
      lowTier: [
        "Ryzen 5 5600",
        "Aorus X570 Pro Wifi",
        "Radeon Rx 5700",
        "G.Skill 16GB 3600Mbs",
        "1TB 980 Samsung Evo",
        "Be Quiet Dark Base 500Dx",
      ],
      midTier: [
        "Ryzen 5 5600",
        "Aorus X570 Pro Wifi",
        "Radeon Rx 5700",
        "G.Skill 16GB 3600Mbs",
        "1TB 980 Samsung Evo",
        "Be Quiet Dark Base 500Dx",
      ],
      highTier: [
        "Ryzen 5 5600",
        "Aorus X570 Pro Wifi",
        "Radeon Rx 5700",
        "G.Skill 16GB 3600Mbs",
        "1TB 980 Samsung Evo",
        "Be Quiet Dark Base 500Dx",
      ],
    },
    {
      label: "VR",
      panel: "panel7",
      header: ["Low Tier", "Mid Tier", "High Tier"],
      lowTier: [
        "Ryzen 5 5600",
        "Aorus X570 Pro Wifi",
        "Radeon Rx 5700",
        "G.Skill 16GB 3600Mbs",
        "1TB 980 Samsung Evo",
        "Be Quiet Dark Base 500Dx",
      ],
      midTier: [
        "Ryzen 5 5600",
        "Aorus X570 Pro Wifi",
        "Radeon Rx 5700",
        "G.Skill 16GB 3600Mbs",
        "1TB 980 Samsung Evo",
        "Be Quiet Dark Base 500Dx",
      ],
      highTier: [
        "Ryzen 5 5600",
        "Aorus X570 Pro Wifi",
        "Radeon Rx 5700",
        "G.Skill 16GB 3600Mbs",
        "1TB 980 Samsung Evo",
        "Be Quiet Dark Base 500Dx",
      ],
    },
  ];
  const [accordionIsExpanded, setAccordionIsExpanded] = React.useState(true);

  const accordionExpansionHandler = (panel) => (event, isExpanded) => {
    setAccordionIsExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <div>
        <HeaderBanner
          background={Desktop}
          title="Pre-Built PCs"
          description="For 3 heads that need some assistance"
        />
      </div>
      <div>
        <Container maxWidth="xl">
          <Grid container my={5} spacing={2}>
            <Grid item sm={12} md={6} lg={4}>
              <PromoCard
                title="Low Tier"
                image={Avant}
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </Grid>
            <Grid item sm={12} md={6} lg={4}>
              <PromoCard
                title="Medium Tier"
                image={AVA}
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </Grid>
            <Grid item sm={12} md={6} lg={4}>
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
        <Container maxWidth="xl">
          <h1 style={{ textAlign: "center" }}>Build Breakdown</h1>
          {accordionLists.map((list) => (
            <AccordionItem
              summary={list.label}
              details={
                <SpanningTable
                  header={components}
                  description1={list.lowTier}
                  description2={list.midTier}
                  description3={list.highTier}
                />
              }
              accordionExpanded={accordionIsExpanded}
              accordionFunction={accordionExpansionHandler}
              panel={list.panel}
            />
          ))}
        </Container>
      </div>
    </div>
  );
}
