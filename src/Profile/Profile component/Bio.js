import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Bio() {
  const object =
  {
    nom: "Mr. Arem",
    phone: "(+216)793044 ",
    email: "arem.atoui@isimg.tn",
    address: "francfort-sur le main. allemagne",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/339088256_567185958843262_1597734654359871899_n.jpg?stp=dst-jpg_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=JAtT6JHSKVQAX_dwohd&_nc_oc=AQmCvHdW8ZiQ71wAzOCuU6gM6MY_YHsbA5hOLoeRoDowKqH3CMDLwtM8Y9MvRHocfVgR6kCqlWo692-kuRC7weDK&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRx1__yeDVz9phxixHunBZhTfm-mPcHvp53c07Gnd02PQ&oe=645410FD"
  }
  return (
    <div className="Na">
      <p style={{ textAlign: "center", fontSize: "25px", fontFamily: "fantasy", paddingTop: "14px" }}>You can contact me </p>
      <Form className="From">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{object.nom}</Form.Label>
          <Form.Control type="text" placeholder="Enter nom" />
          <Form.Label>{object.email}</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>{object.phone}</Form.Label>
          <Form.Control type="number" placeholder="phone" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>{object.address}</Form.Label>
          <Form.Control type="address" placeholder="address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>


    </div>
  )
}

export default Bio;