import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

function ButtonNo(props) {
  return (
    <AwesomeButton ripple={true} cssModule={AwesomeButtonStyles} type="secondary" onPress={props.click}>
     No 
    </AwesomeButton>
  );
}

export default ButtonNo;