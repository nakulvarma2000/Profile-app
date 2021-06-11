import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import FooterLinks from '../../Footer/FooterLinks'
const serviceId = process.env.REACT_APP_SERVICE_ID
const templateId = process.env.REACT_APP_TEMPLATE_ID
const userId = process.env.REACT_APP_USER_ID

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    let templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'nakulvarma2000@gmail.com',
      subject: subject,
      message: message,
     }
     console.log(process.env.REACT_APP_SERVICE_ID);

     emailjs.send(
        serviceId,
        templateId,
        templateParams,
        userId
       )
     this.resetForm(alert("Your message has been sent successfully"))
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
    return (
        <div className="form">
            <div className="contact-title">
                <div style={{display: 'block'}}>
                    <h3>Get in Touch </h3>
                    <FooterLinks />
                </div>
            </div>
          <Form className="contact-body" onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Label>Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
                required
              />
            </FormGroup>
            <FormGroup controlId="formBasicName">
              <Label>Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
                required
              />
            </FormGroup>
            <FormGroup controlId="formBasicSubject">
              <Label>Subject</Label>
              <Input
                type="text"
                name="subject"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
                required
              />
            </FormGroup>
            <FormGroup controlId="formBasicMessage">
              <Label>Message</Label>
              <Input
                type="textarea"
                name="message"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
                required
              />
            </FormGroup>
            <br/>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
      </div>
    )
  }
}
export default ContactForm