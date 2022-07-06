import axios from 'axios'
import { Button, ButtonGroup, Center } from '@chakra-ui/react'
import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import React, { useState,useEffect } from 'react';
import Quiz from './Quiz'
function FadeEx() {
 
    const { isOpen, onToggle } = useDisclosure()
    const [cards,setCards] = useState([{id:'first',front:'',back:''}])
    const [isHidden,setHidden] = useState({hidden:false,active:true})
    const [value, setValue] = useState(-1)
    const handleChange = (event) => setValue(event.target.value)
    function HeToggled(setCards){
      console.log("You Toggled me");
      axios.get('http://'+process.env.REACT_APP_HOST+':8000/cards?node_id='+value)
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
      <Center>
      <Input value={value}
        onChange={handleChange} placeholder='Basic usage' hidden={isHidden.hidden}/>
      <Button colorScheme='whatsapp' onClick={()=>HeToggled(setCards)} hidden={isHidden.hidden} isActive={isHidden.acive}>Start</Button>
      </Center>
      <SlideFade in={isOpen}>
      <Center>
      <Quiz cards = {cards}/>
      </Center>
      </SlideFade>
    </>
  )
  

}
export default FadeEx