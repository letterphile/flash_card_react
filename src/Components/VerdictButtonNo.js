import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

function ButtonNo() {
  return (
    <AwesomeButton ripple={true} cssModule={AwesomeButtonStyles} type="secondary">
     No 
    </AwesomeButton>
  );
}

export default ButtonNo;