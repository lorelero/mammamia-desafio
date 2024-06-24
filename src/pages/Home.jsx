import Card from "../components/Card";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PizzasList from "../components/PizzasList";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <PizzasList>
        <Card />
      </PizzasList>
    </>
  );
};

export default Home;