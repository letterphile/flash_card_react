import logo from './logo.svg';
import './App.css';
import Quizlet from './Components/Quizlet';
import DarkModeToggle from './Components/DarkModeToggle';
import Button from './Components/VerdictButton';
import ButtonNo from './Components/VerdictButtonNo';
import './style.scss';
import React, { useState,useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import FadeEx from './Components/FadeEx'
function App(props) {
  
    return (
    <div className="App">
<ChakraProvider>
      
        
        <DarkModeToggle/>
        <FadeEx/>
        
        
        
        </ChakraProvider>
          </div>
  );
}

export default App;
