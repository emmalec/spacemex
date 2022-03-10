import React from "react";
import { Button, Form } from "react-bootstrap";

export default function CartForm({
  buyer,
  formErrors,
  handleChange,
  handleSubmitOrd,
  validateForm,
}) {
  return (
    <>
      <Form onSubmit={handleSubmitOrd}>
        <Form.Group className="mb-4" controlId="formBasicName">
          <Form.Control
            placeholder="Ingrese su nombre"
            type="text"
            name="name"
            value={buyer.name}
            onChange={handleChange}
            onInput={buyer.name ? validateForm : undefined}
            //Set class if formErrors.name exists / set invalid if true / if name length is > 1 set valid
            className={
              formErrors.name
                ? "is-invalid"
                : buyer.name.length > 0 && "is-valid"
            }
          />
          {formErrors.name && (
            <Form.Text className="text-danger position-absolute">
              {formErrors.name}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicSurname">
          <Form.Control
            placeholder="Ingrese su apellido"
            type="text"
            name="surname"
            value={buyer.surname}
            onChange={handleChange}
            onInput={buyer.surname ? validateForm : undefined}
            className={
              formErrors.surname
                ? "is-invalid"
                : buyer.surname.length > 0 && "is-valid"
            }
          />
          {formErrors.surname && (
            <Form.Text className="text-danger position-absolute">
              {formErrors.surname}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Control
            placeholder="Ingrese su e-mail"
            type="email"
            name="email"
            value={buyer.email}
            onChange={handleChange}
            onInput={buyer.email ? validateForm : undefined}
            className={formErrors.email && "is-invalid"}
          />
          {formErrors.email && (
            <Form.Text className="text-danger position-absolute">
              {formErrors.email}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicEmailValid">
          <Form.Control
            placeholder="Repita su e-mail"
            type="email"
            name="emailValid"
            value={buyer.emailValid}
            onChange={handleChange}
            onInput={buyer.emailValid ? validateForm : undefined}
            className={
              buyer.email === buyer.emailValid ? "is-valid" : "is-invalid"
            }
          />
          {buyer.email !== buyer.emailValid && (
            <Form.Text className="text-danger position-absolute">
              {formErrors.emailValid}
            </Form.Text>
          )}
        </Form.Group>

        <Button
          variant="success"
          type="submit"
          className="btn-lg mt-3"
          disabled={!formErrors}
        >
          Finalizar compra
        </Button>
      </Form>
    </>
  );
}
