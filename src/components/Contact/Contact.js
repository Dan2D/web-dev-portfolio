import React, { Component } from 'react';
import  SectionTtl from '../SectionTtl';
import './Contact.css'

class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "",
             email: "",
             msg: ""
        }
    }
    
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.prevetDefault();
        // Figure out how to send email
    }

    render() {
        return (
            <div className="contact-container">
                <div className="anchor-pt" id="contact" />
                <SectionTtl name="connect" title="CONNECT" icon="journal" />
                <form className="contact-form">
                    <div className="form-group">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input  className="form-input form-input--name" type="text" value={this.state.name} name="name" placeholder="Name" onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div className="form-group">                    
                        <label className="form-label" htmlFor="name">Email</label>
                        <input  className="form-input form-input--email" type="text" value={this.state.email} name="email" placeholder="name@email.com" onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="name">Message</label>
                        <textarea className="form-input form-input--msg" type="textarea" value={this.state.msg} name="msg" placeholder="Enter your message here" onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <button className="form-submit" onClick={(e) => this.handleSubmit(e)}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Contact;