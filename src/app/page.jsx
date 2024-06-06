'use client'
import { useContext } from "react";
import BelowCartImg from "./components/BelowCartImg";
import CategoryProduct from "./components/CategoryProduct";
import FavoriteRoutine from "./components/FavoriteRoutine";
import HomeBanner from "./components/HomeBanner";
import HomeCategory from "./components/HomeCategory";
import { HomeMarquee } from "./components/HomeMarquee";
import HomeProduct from "./components/HomeProduct";
import { SideBarContext } from "./providers";



export default function Home() {
  const {isOpen} = useContext(SideBarContext)
  return (
    <main className=''>
      <HomeBanner />
      <HomeMarquee />
      <HomeProduct />
      <HomeCategory />
      <CategoryProduct />
      <BelowCartImg />
      <FavoriteRoutine />
    </main>
  );
}
