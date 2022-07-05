import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

function Button(props) {
  
  return (
    <AwesomeButton ripple={true} cssModule={AwesomeButtonStyles} type="primary" onPress={props.click}>
   Yes 
    </AwesomeButton>
  );
}

export default Button;