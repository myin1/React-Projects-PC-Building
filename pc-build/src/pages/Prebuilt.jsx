import HeaderBanner from "../components/content/HeaderBanner";
import TierList from "../components/content/TierList";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";

import Avalanche from "../assets/images/Avalanche_Hardline_Liquid_Cooled_Gaming_PC.png";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

export default function PreBuilt() {
  return (
    <div>
      <div>
        <HeaderBanner background={Avalanche} />
      </div>
      <div>
        <Container maxWidth="xl">
          <Grid container my={5} spacing={2}>
            <Grid item xs={4}>
              <Card raised="true">
                <CardHeader title="Low Tier" />
                <CardContent>
                  <img
                    src={Avalanche}
                    alt=""
                    style={{
                      height: "250px",
                    }}
                  />
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                  <Button variant="contained">Shop Now</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card raised="true">
                <CardHeader title="Meidum Tier" />
                <CardContent>
                  <img src={Avalanche} alt="" style={{ height: "250px" }} />
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                  <Button variant="contained">Shop Now</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card raised="true">
                <CardHeader title="High Tier" />
                <CardContent>
                  <img src={Avalanche} alt="" style={{ height: "250px" }} />
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                  <Button variant="contained">Shop Now</Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div>
        <Container>
          <Grid container mt={5}>
            <TierList
              image={Avalanche}
              len={4}
              title="Low Tier"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                felis quam, fringilla a lorem ut, tincidunt commodo elit. Ut
                convallis nibh tempus dignissim gravida. Nam interdum est vitae
                accumsan feugiat. Suspendisse quis nisi neque. Praesent
                pellentesque viverra maximus."
            />
            <TierList
              image={Avalanche}
              len={4}
              title="Mid Tier"
              description="This is for noobs"
            />
            <TierList
              image={Avalanche}
              len={4}
              title="High Tier"
              description="This is for noobs"
            />
          </Grid>
        </Container>
      </div>
    </div>
  );
}
