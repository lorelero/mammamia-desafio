import { useContext } from "react";
import Navbar from "../components/Navbar";
import { PizzasContext } from "../context/PizzaProvider";
import { formatNumber } from "../helpers/formatNumber";
import { useNavigate } from "react-router-dom";

const DetallePedido = () => {
  const { carrito, increment, decrement } = useContext(PizzasContext);
  const total = carrito.reduce((a, { count, price }) => a + price * count, 0);

  const navigate = useNavigate();

  const formPago = () => {
    navigate(`/formPago`);
  };

  return (
    <>
      <Navbar />
      <div className="carrito p-5">
        <div className="detalles bg-light w-75 m-auto p-5">
          <h5>Detalles del pedido:</h5>
          <div className="p3 bg-white">
            {carrito.map((producto, i) => (
              <div key={i} className="d-flex justify-content-between py-2">
                <div className="d-flex justify-content-between align-items-center">
                  <img src={producto.img} width="50" alt="" />
                  <h6 className="mb-0 text-capitalize p-2">{producto.name}</h6>
                </div>

                <div className="d-flex justify-content-end align-items-center">
                  <h6 className="mb-0 p-2 text-success">
                    ${formatNumber(producto.price * producto.count)}
                  </h6>
                  <button
                    className="btn btn-danger"
                    onClick={() => decrement(i)}
                  >
                    -
                  </button>
                  <b className="mx-2">{producto.count}</b>
                  <button
                    className="btn btn-primary"
                    onClick={() => increment(i)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            <h2 className="my-4">Total: ${formatNumber(total)}</h2>
            <button className="btn btn-success" onClick={formPago}>
              Ir a Pagar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetallePedido;
