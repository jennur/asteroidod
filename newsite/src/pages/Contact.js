import React from "react";

class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
        fname: '',
        lname: '',
        nameError: false,
        email: '', 
        emailError: false,
        subject: '',
        subjectError: false,
        message: '',
        messageError: false,
        submit: true
    }
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubject = this.handleSubject.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleFirstName(e){
    if(e.target.value === ''){
      this.setState({ fname: '' });
      this.setState({ nameError: true });
      e.target.classList.add('error')
    }
    else {
      this.setState({ nameError: false }); 
      this.setState({ fname: e.target.value });
      e.target.classList.remove('error');
    }
  }
  handleLastName(e){
    if(e.target.value === ''){
      this.setState({ lname: '' });
      this.setState({ nameError: true });
      e.target.classList.add('error');
    }
    else {
      this.setState({ nameError: false }); 
      this.setState({ lname: e.target.value });
      e.target.classList.remove('error');
    }
  }
  handleEmail(e){
    let emailCheck = /^[A-Za-z0-9-_.]+@[A-Za-z0-9-.]+\.[A-Za-z]{2,4}$/;
    if(!emailCheck.test(e.target.value)){
      this.setState({ emailError: true });
      this.setState({ email: e.target.value });
      e.target.classList.add('error');
    }
    else{ 
      this.setState({ emailError: false });
      this.setState({ email: e.target.value });
      e.target.classList.remove('error');
    }
  }
  handleSubject(e){
    if(e.target.value === ''){
      this.setState({ subject: '' });
      this.setState({ subjectError: true });
      e.target.classList.add('error');
    }
    else {
      this.setState({ subjectError: false }); 
      this.setState({ subject: e.target.value });
      e.target.classList.remove('error');
    }
  }
  handleMessage(e){
    if(e.target.value === ''){
        this.setState({ message: '' });
        this.setState({ messageError: true });
        e.target.classList.add('error')
      }
      else {
        this.setState({ messageError: false }); 
        this.setState({ message: e.target.value });
        e.target.classList.remove('error');
      }
  }
  handleSubmit(e){
    let errorCheck = this.state.nameError+this.state.emailError+this.state.subjectError+this.state.messageError;
    console.log(errorCheck);
    if( !this.state.fname || !this.state.lname || !this.state.email || !this.state.subject || !this.state.message || errorCheck ){
      e.preventDefault();
      this.setState({ submit: false });
    }
    else{
      this.setState({ submit: true });
    }
  }

  render(){
    return(
      <main>
        <fieldset>
        <legend>Feel free to contact me!</legend>
        <form onSubmit={this.handleSubmit} action="https://formspree.io/jenbon@jennurate.com" method="POST" id="contact-form">
        
        <input name="fname" id="fname" type="text" placeholder="First name" value={this.state.fname} onChange={this.handleFirstName}/>
        <input name="lname" id="lname" type="text" placeholder="Last name" value={this.state.lname} onChange={this.handleLastName}/>
        <p id="name-error" className={ this.state.nameError ? 'display-robot' : 'hide-robot' }>
          Please enter your name
        </p>
        <input name="email" id="email" type="email" placeholder="Your e-mail address" value={this.state.email} onChange={this.handleEmail}/>
        <p data-value={this.state.emailError} id="email-error" className={ this.state.emailError ? 'display-robot' : 'hide-robot' }>
          Please enter a valid e-mail address
        </p>
        <input name="subject" id="subject" type="text" placeholder="Subject" value={this.state.subject} onChange={this.handleSubject}/>
        <p data-value={this.state.subjectError} id="subject-error" className={ this.state.subjectError ? 'display-robot' : 'hide-robot' }>
          Please enter a subject
        </p>
        <textarea name="message" id="message" placeholder="What's on your mind?" value={this.state.message} onChange={this.handleMessage}></textarea>
        <p data-value={this.state.messageError} id="message-error" className={ this.state.messageError ? 'display-robot' : 'hide-robot' }>
          Please enter a message
        </p>
        <input id="submit" type="submit" value="Send!" />
        <p id="submit-error" className={this.state.submit ? 'hide-robot' : 'display-robot'}>
          Please fill in all fields correctly
        </p>
        </form>
        </fieldset>
      </main>
    );
  }
}

export default Contact;