import React from "react";

const Contact = () => {
return(
  <main>
    <fieldset>
      <legend>Feel free to contact me!</legend>
      <form action="https://formspree.io/jenbon@jennurate.com" method="POST" id="contact-form">
      
      <input name="firstname" type="text" id="firstname" class="hide-robot" required/>

      <input name="fname" id="fname" type="text" placeholder="First name" required/>
      <input name="lname" id="lname" type="text" placeholder="Last name"  required/>
      <p id="name-error" class="hide-robot"></p>
      <input name="email" id="email" type="email" placeholder="Your e-mail address"  required/>
      <p id="email-error" class="hide-robot"></p>
      <input name="subject" id="subject" type="text" placeholder="Subject"  />
      <p id="subject-error" class="hide-robot"></p>
      <textarea name="message" id="message" placeholder="What's on your mind? 😊" required></textarea>
      <p id="message-error" class="hide-robot"></p>
      <input id="submit" type="submit" value="Send!" />
      </form>
    </fieldset>
  </main>
  );
}

export default Contact;