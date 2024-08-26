import "./App.css";
import ClockHeading from "./Components/ClockHeading";
import ClockSlogan from "./Components/ClockSlogan";
import ClockTime from "./Components/ClockTime";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <ClockTime></ClockTime>
    </div>
  );
}

export default App;
