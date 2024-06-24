import { Route, Routes } from "react-router-dom";

import Detalle from "./pages/Detalle.jsx";
import DetallePedido from "./pages/DetallePedido.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import FormPago from "./FormPago/FormPago.jsx";



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="pizzas/">
          <Route path=":id" element={<Detalle />} />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<DetallePedido />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/formPago" element={<FormPago />} />
      </Routes>
    </div>
  );
};
export default App;
