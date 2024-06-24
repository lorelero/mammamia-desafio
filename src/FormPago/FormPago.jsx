import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function FormPago() {
  const [telefono, setTelefono] = useState("");
  const [nombre, setNombre] = useState("");

  const validarPago = (e) => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        border: "solid 1px red",
        display: "flex",
        justifyContent: "center",
        marginLeft: 500,
        marginTop: 200,
        width: 400,
        borderRadius: 8,
      }}
    >
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="email" placeholder="Nombre" />
          <Form.Text className="text-muted">
            {/* We'll never share your email with anyone else. */}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="email" placeholder="telefono" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button onSubmit={validarPago} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FormPago;
