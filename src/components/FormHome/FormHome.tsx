import { useContext } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { GiftCardContext } from "../../context/GiftcardContext";
import { useNavigate } from "react-router";

export const FormHome = () => {
  const navigate = useNavigate();
  const validTextInput = /^[a-zA-Z]*$/;
  const {
    setClientName,
    setClientLastName,
    //setService,
    clientName,
    clientLastName,
    //service,
  } = useContext(GiftCardContext);

  const handleNameChange = (name: string) => {
    setClientName && setClientName(name);
  };
  const handleLastNameChange = (name: string) => {
    setClientLastName && setClientLastName(name);
  };

  const isValidInput = (input: string) => {
    return validTextInput.test(input);
  };

  const allInputsAreValid = () => {
    return isValidInput(clientLastName) && isValidInput(clientName);
  };
  const allInputsAreCompleted = () => {
    return clientLastName != "" && clientName != "";
  };

  const buttonAvailable = () => {
    return allInputsAreValid() && allInputsAreCompleted();
  };

  const navigateToGiftCardPageIfInputsAreValid = () => {
    buttonAvailable() && navigate("/card");
  };

  return (
    <>
      <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="w-50 h-25 d-flex flex-column justify-content-around align-items-center">
          <Form.Group>
            <FloatingLabel controlId="name" label="Ingresa tu nombre">
              <Form.Control
                as="textarea"
                placeholder="Ingresa tu nombre"
                width={"50%"}
                isValid={clientName != "" && isValidInput(clientName)}
                isInvalid={clientName != "" && !isValidInput(clientName)}
                onChange={(e) => handleNameChange(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa solo letras
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Form.Group>
            <FloatingLabel controlId="lastname" label="Ingresa tu apellido">
              <Form.Control
                as="textarea"
                placeholder="Ingresa tu apellido"
                width={"50%"}
                isValid={clientLastName != "" && isValidInput(clientLastName)}
                isInvalid={
                  clientLastName != "" && !isValidInput(clientLastName)
                }
                onChange={(e) => handleLastNameChange(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa solo letras
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <button
            onClick={navigateToGiftCardPageIfInputsAreValid}
            type="button"
            className={`btn btn-primary ${buttonAvailable() ? "" : "disabled"}`}
          >
            Obtener giftcard
          </button>
        </div>
      </div>
    </>
  );
};
