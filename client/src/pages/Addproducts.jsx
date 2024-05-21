import React, { useState } from 'react'
import Nav from '../components/Nav'
import axios from 'axios'

export default function Addproducts() {
  const [input, setInput] = useState({

    name: '',
    description: '',
    quantity: '',
    price: ''

  })
  const [formError, setFormError] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const change = (event) => {

    const name = event.target.name
    const value = event.target.value


    setInput({ ...input, [name]: value })

  }
  const handlePhoto = (e) => {
    setInput({ ...input, photo: e.target.files[0] })
    console.log(input.photo);
  }
  const validate = (value) => {
    console.log(value);
    const error = {}

    if (value.name == '') {
      error.name = 'Enter name'
    }
    if (value.description == '') {
      error.description = 'Enter description'
    }
    if (value.quantity == '') {
      error.quantity = 'Enter quantity'
    }
    if (value.price == '') {
      error.price = 'Enter price'
    }
    return error
  }

  const submit = (e) => {
    e.preventDefault()
    setFormError(validate(input))
    setIsSubmit(true)
    const formData = new FormData();
    formData.append('photo', input.photo);
    formData.append('name', input.name);
    formData.append('description', input.description);
    formData.append('quantity', input.quantity);
    formData.append('price', input.price);

    if (Object.keys(formError).length == 0 && isSubmit == true) {
      console.log(input);

      axios.post('http://localhost:5000/product/add_product', formData).then((data) => {
        console.log(data);


      }).catch((error) => {
        console.log(error);
      })
    }
  }


  return (
    <>
      <div style={{ backgroundColor: 'blanchedalmond' }}>

       <Nav/>
        <div className="d-flex justify-content-center">
          <h2 style={{ color: 'rosybrown', fontFamily: "monospace" }}><b>ADD PRODUCTS</b></h2><br />
</div>
<div className="d-flex justify-content-center">
          <form onSubmit={submit}>

            <div className="form-group">
              <div className="form-group col-md-3">
                <label><b>Photo</b></label>
                {/* <div className="form-group col"> */}
                <input
                  type="File"
                  className="form-control"
                  name='photo'
                  //  onChange={change}
                  onChange={handlePhoto}
                />
                {/* </div> */}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <span style={{ color: 'red' }}>{formError.name}</span>
                <input
                  type="text"
                  name='name'
                  onChange={change}
                  onClick={() => { setFormError({ ...formError, name: '' }) }}
                  className="form-control"
                  id="inputName4"
                  placeholder="Product Name "
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <span style={{ color: 'red' }}>{formError.description}</span>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Details"
                  name='description'
                  onChange={change}
                  onClick={() => { setFormError({ ...formError, description: '' }) }}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <span style={{ color: 'red' }}>{formError.quantity}</span>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Quantity"
                  name='quantity'
                  onChange={change}
                  onClick={() => { setFormError({ ...formError, quantity: '' }) }}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <span style={{ color: 'red' }}>{formError.price}</span>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Price "
                  name='price'
                  onChange={change}
                  onClick={() => { setFormError({ ...formError, price: '' }) }}
                />
              </div>
            </div>
            <br/>
            <div className="d-flex justify-content-center">
              <button type="submit" className="">
                Add Product
              </button>
            </div><br />
          </form></div>
        </div></>
  )
}
