import HeaderBanner from "../components/content/HeaderBanner";
import SplitScreen from "../components/content/SplitScreen";

import Background from "../assets/images/pexels-mentatdgt-1254690.jpg";
import SplitScrenRTL from "../components/content/SplitScreenRTL";
import { Button } from "@mui/material";

export default function Service() {
  return (
    <div>
      <HeaderBanner
        background={Background}
        title="Services"
        description="Learn what we can do for you"
      />
      <SplitScreen
        image={Background}
        title="Quality Service"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          felis quam, fringilla a lorem ut, tincidunt commodo elit. Ut
          convallis nibh tempus dignissim gravida. Nam interdum est vitae
          accumsan feugiat. Suspendisse quis nisi neque. Praesent
          pellentesque viverra maximus."
      />
      <SplitScrenRTL
        image={Background}
        title="Quality Service"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          felis quam, fringilla a lorem ut, tincidunt commodo elit. Ut
          convallis nibh tempus dignissim gravida. Nam interdum est vitae
          accumsan feugiat. Suspendisse quis nisi neque. Praesent
          pellentesque viverra maximus."
      />
      <SplitScreen
        image={Background}
        title="Quality Service"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          felis quam, fringilla a lorem ut, tincidunt commodo elit. Ut
          convallis nibh tempus dignissim gravida. Nam interdum est vitae
          accumsan feugiat. Suspendisse quis nisi neque. Praesent
          pellentesque viverra maximus."
      />
      <Button
        variant="contained"
        size="large"
        sx={{ display: "flex", mx: "auto", my: 5 }}
      >
        Buy Now
      </Button>
    </div>
  );
}
