import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

function Button() {
  return (
    <AwesomeButton ripple={true} cssModule={AwesomeButtonStyles} type="primary">
   Yes 
    </AwesomeButton>
  );
}

export default Button;