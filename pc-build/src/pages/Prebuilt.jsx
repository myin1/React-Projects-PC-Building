import HeaderBanner from "../components/content/HeaderBanner";
import PromoCard from "../components/content/PromoCard";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";

import Avalanche from "../assets/images/Avalanche_Hardline_Liquid_Cooled_Gaming_PC.png";

export default function PreBuilt() {
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
          <Grid container my={5} spacing={2} columns={{ xs: 12, lg: 4 }}>
            <Grid item xs={12} lg={4} sm="auto">
              <PromoCard
                title="Low Tier"
                image={Avalanche}
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </Grid>
            <Grid item xs={12} lg={4} sm="auto">
              <PromoCard
                title="Medium Tier"
                image={Avalanche}
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </Grid>
            <Grid item xs={12} lg={4} sm="auto">
              <PromoCard
                title="Pro Tier"
                image={Avalanche}
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
