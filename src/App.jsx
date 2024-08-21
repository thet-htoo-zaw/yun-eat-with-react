
import './App.css'

import TopNav from './components/TopNav'
import {Featured} from './components/Featured'
import { Delivery } from './components/Delivery'
import { TopPicks } from './components/TopPicks'
import { Meal } from './components/Meal'
import { Categories } from './components/Categories'
import { NewsLetter } from './components/NewsLetter'
import { Footer } from './components/Footer'

function App() {


  return (
    <>
      <TopNav></TopNav>
      <Featured></Featured>
      <Delivery/>
      <TopPicks/>
      <Meal/>
      <Categories></Categories>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default App
