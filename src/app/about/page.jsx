import React from 'react'
import AboutHead from '../components/AboutHead'
import DIscoverMission from '../components/DIscoverMission'
import OurTeam from '../components/OurTeam'
import ValueGuide from '../components/ValueGuide'
import CustomersReview from '../components/CustomersReview'

export const metadata = {
  title: "Know US | TrenLuxe",
  description: "Elevate Your Style with the Latest in Trendy and Luxurious Fashion",
};

export default function page() {
  return (
    <div>
        <AboutHead />
        <DIscoverMission />
        <OurTeam />
        <ValueGuide />
        <CustomersReview />
    </div>
  )
}
