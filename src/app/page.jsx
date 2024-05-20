import BelowCartImg from "./components/BelowCartImg";
import CategoryProduct from "./components/CategoryProduct";
import HomeBanner from "./components/HomeBanner";
import HomeCategory from "./components/HomeCategory";
import HomeProduct from "./components/HomeProduct";


export default function Home() {
  return (
    <main className="">
      <HomeBanner />
      <HomeProduct />
      <HomeCategory />
      <CategoryProduct />
      <BelowCartImg />
    </main>
  );
}
