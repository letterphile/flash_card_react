import { FlashcardArray } from "../flash_card_src";
const axios = require('axios').default;
function Quizlet(props) {
    function cardChange(data) {

      if(props.prevIndex>data.index){
        console.log("to back")
        props.setPrevIndex(data.index)
        
      }
      else if(props.prevIndex<data.index){
        console.log("to front")
        if (props.yes_no[0]==false && props.yes_no[1]==false){
          console.log("no input")
        }
        else{
          axios.post('http://'+process.env.REACT_APP_HOST+':8000/recall_insert', {
            id: Number(props.cards[props.prevIndex].id),
            verdict: props.yes_no
         
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        }
        console.log(props.yes_no,props.cards[props.prevIndex],data.id)
        props.setPrevIndex(data.index)
      }
      else{
        console.log("no change")
      }
      
      props.setYesNo([false,false])
      
     
    }

  return (
    <div>
      <FlashcardArray cards={props.cards} setCurrentCard={(data)=>cardChange(data)} />
      {/* <FlashcardArray cards={props.cards} setCurrentCard = {(currentCard)=>console.log(currentCard)}/>       */}
   
    </div>
  );
}

export default Quizlet;