import React, { Component } from "react";
import SectionTtl from "../SectionTtl";
import * as emailjs from "emailjs-com";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_name: "",
      user_email: "",
      subject: "",
      msg: ""
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
      e.preventDefault();
    let template_params = {   
        "user_name": this.state.user_name,
        "user_email": this.state.user_email,
        "subject": this.state.subject,
        "text": this.state.msg
    }
    let service_id = "gmail";
    let template_id = "contact_form";
    emailjs.send(service_id, template_id, template_params, "user_ixUjNyUv7809hblRhdUc2" );
    this.setState({user_name: "", user_email: "", subject: "", msg: ""});
    document.getElementById("msg-modal").className = "msg-modal visible";
    setTimeout(() => {document.getElementById("msg-modal").className = "msg-modal"}, 500);
  };

  render() {
    return (
      <div className="contact-container">
          <div id="msg-modal" className="msg-modal">Message Sent!</div>
        <div className="anchor-pt" id="contact" />
        <SectionTtl name="connect" title="CONNECT" icon="journal" />
        <form className="contact-form" id="contact-form" onSubmit={(e) => this.handleSubmit(e)}>
          <input type="hidden" name="contact_number" />
          <div className="form-group">
            <label className="form-label" for="user_name" htmlFor="user_name">
              Name
            </label>
            <input
              id="user_name"
              className="form-input form-input--name"
              type="text"
              value={this.state.user_name}
              name="user_name"
              placeholder="Name"
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label className="form-label" for="user_email" htmlFor="user_email">
              Email
            </label>
            <input
              id="user_email"
              className="form-input form-input--email"
              type="email"
              value={this.state.user_email}
              name="user_email"
              placeholder="name@email.com"
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label className="form-label" for="subject" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              className="form-input form-input--subject"
              type="text"
              value={this.state.subject}
              name="subject"
              placeholder="Subject"
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label className="form-label" for="msg" htmlFor="msg">
              Message
            </label>
            <textarea
              id="msg"
              className="form-input form-input--msg"
              type="textarea"
              value={this.state.msg}
              name="msg"
              placeholder="Enter your message here"
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <input className="form-submit" type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default Contact;
