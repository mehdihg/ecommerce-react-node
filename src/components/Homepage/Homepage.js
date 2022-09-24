import { useSelector } from "react-redux";
import MotioAnimate from "../MotionAnimate/MotionAnimte";
import MainSlider from "../Slider/Slider";

const Homepage = () => {
  const state=useSelector(state=>state.AuthProvider)
  console.log(state);
  return (
    <MotioAnimate>
      <div>
        <MainSlider />
      </div>
    </MotioAnimate>
  );
};
export default Homepage;
