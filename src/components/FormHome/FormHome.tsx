import { useContext } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { GiftCardContext } from "../../context/GiftcardContext";
import { Row } from "react-bootstrap";

export const FormHome = () => {
  const { setClientName, setClientLastName, setService } =
    useContext(GiftCardContext);

  const handleNameChange = (name: string) => {
    setClientName && setClientName(name);
  };
  const handleLastNameChange = (name: string) => {
    setClientLastName && setClientLastName(name);
  };

  return (
    <>
      <Row>
        <FloatingLabel
          controlId="name"
          label="Ingresa tu nombre"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            placeholder="Ingresa tu nombre"
            onChange={(e) => handleNameChange(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel controlId="lastname" label="Ingresa tu apellido">
          <Form.Control
            as="textarea"
            placeholder="Ingresa tu apellido"
            style={{ height: "100px" }}
            onChange={(e) => handleLastNameChange(e.target.value)}
          />
        </FloatingLabel>
      </Row>
    </>
  );
};
