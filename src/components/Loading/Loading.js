import MotioAnimate from "../MotionAnimate/MotionAnimte";
import "./Loading.css";
const Loading = ({ loading }) => {
  return (
    <MotioAnimate>
      <div className={loading ? "waviy" : "waviy loading-closed"}>
        <span style={{ animationDelay: "0.1s" }}>L</span>
        <span style={{ animationDelay: "0.3s" }}>o</span>
        <span style={{ animationDelay: "0.5s" }}>a</span>
        <span style={{ animationDelay: "0.7s" }}>d</span>
        <span style={{ animationDelay: "0.9s" }}>i</span>
        <span style={{ animationDelay: "1.1s" }}>n</span>
        <span style={{ animationDelay: "1.3s" }}>g</span>
        <span style={{ animationDelay: "1.5s" }}>.</span>
      </div>
    </MotioAnimate>
  );
};
export default Loading;
