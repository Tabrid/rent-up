import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"

import Recent from "./recent/Recent"
import Team from "./team/Team"

import Test from "../../components/common/test/Test"

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
     <Test/>
      <Location />
      <Awards /> 
      <Team />
    </>
  )
}

export default Home
