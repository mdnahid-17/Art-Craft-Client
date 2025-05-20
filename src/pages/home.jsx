import { Helmet } from "react-helmet";
import ArtCategory from "../components/artCategory";
import Banner from "../components/banner";
import CraftItems from "../components/craftItems";
import Feature from "../components/Feature";
import Teams from "../components/teams";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Art Gallery | Home</title>
      </Helmet>
      <Banner></Banner>
      <CraftItems></CraftItems>
      <ArtCategory></ArtCategory>
      <Feature></Feature>
      <Teams></Teams>
    </>
  );
}
