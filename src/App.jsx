import { useState } from 'react'
import './App.css'

import Header from './features/header/Header'
import StoryCarousel from './features/StoryCarousel/StoryCarousel'
import FeedPost from './features/FeedPost/FeedPost'

function App() {


  return (
    <>
      <Header />
      <StoryCarousel />
      <FeedPost />
      <img src='src/assets/instagram.png' className='pt-1000'></img>
      edited
    </>
  )
}

export default App
