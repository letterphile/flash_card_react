import axios from 'axios'
import { Button, ButtonGroup, Center } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'
import React, { useState,useEffect } from 'react';
import Quiz from './Quiz'
function FadeEx() {
 
    const { isOpen, onToggle } = useDisclosure()
    const [cards,setCards] = useState([{id:'first',front:'',back:''}])
    const [isHidden,setHidden] = useState({hidden:false,active:true})

    function HeToggled(setCards){
      console.log("You Toggled me");
      axios.get('http://'+process.env.REACT_APP_HOST+':8000/cards')
        .then(function (response) {
        console.log(response.data)
        setCards(response.data)
        onToggle();
        setHidden({hidden:true,active:false})
  }
    )
    .catch(function (error) {
      // handle error
      console.log(error);
    }) 
  }
  return (
    <>
      <Button onClick={()=>HeToggled(setCards)} hidden={isHidden.hidden} isActive={isHidden.acive}>Click Me</Button>
      
      <Fade in={isOpen}>
      <Center>
      <Quiz cards = {cards}/>
      </Center>
      </Fade>
    </>
  )
  

}
export default FadeEx