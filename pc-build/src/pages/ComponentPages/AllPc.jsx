import { useParams } from "react-router-dom";
import Avalanche from "../../assets/images/Avalanche_Hardline_Liquid_Cooled_Gaming_PC.png";
import SplitScreen from "../../components/content/SplitScreen";

export default function AllPc(handleClick) {
  //grab URL parameter to use as title
  let params = useParams();
  return (
    <SplitScreen
      image={Avalanche}
      title={params.computerType}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                felis quam, fringilla a lorem ut, tincidunt commodo elit. Ut
                convallis nibh tempus dignissim gravida. Nam interdum est vitae
                accumsan feugiat. Suspendisse quis nisi neque. Praesent
                pellentesque viverra maximus."
    />
  );
}
