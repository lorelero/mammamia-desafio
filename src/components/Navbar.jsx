import { useContext } from "react";
import { Link } from "react-router-dom";
import { PizzasContext } from "../context/PizzaProvider";
import { formatNumber } from "../helpers/formatNumber";

const Navbar = () => {
  const { carrito } = useContext(PizzasContext);
  const total = carrito.reduce((a, { count, price }) => a + price * count, 0);

  return (
    <div className="navbar text-white py-3">
      <div className="container d-block">
        <div className="d-flex justify-content-between">
          <Link to="/" className="logo-nombre mx-1 mb-0">
            <h4 className="mb-0">&#127829; Pizzería Mamma Mia!</h4>
          </Link>

          <Link to="/carrito" className="logo-nombre mx-1 mb-0">
            <h4 className="mb-0">
              &#128722; {""} Total: ${formatNumber(total)}
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
