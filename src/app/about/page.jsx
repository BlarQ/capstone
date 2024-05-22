import React from 'react'
import AboutHead from '../components/AboutHead'
import DIscoverMission from '../components/DIscoverMission'
import OurTeam from '../components/OurTeam'
import ValueGuide from '../components/ValueGuide'

export default function page() {
  return (
    <div>
        <AboutHead />
        <DIscoverMission />
        <OurTeam />
        <ValueGuide />
    </div>
  )
}
