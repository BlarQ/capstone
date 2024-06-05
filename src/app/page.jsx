import BelowCartImg from "./components/BelowCartImg";
import CategoryProduct from "./components/CategoryProduct";
import FavoriteRoutine from "./components/FavoriteRoutine";
import HomeBanner from "./components/HomeBanner";
import HomeCategory from "./components/HomeCategory";
import { HomeMarquee } from "./components/HomeMarquee";
import HomeProduct from "./components/HomeProduct";
import PageHover from "./components/PageHover";


export default function Home() {
  return (
    <main className="">
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
