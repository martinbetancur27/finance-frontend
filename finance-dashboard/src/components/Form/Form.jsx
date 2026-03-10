import Input from "./Input";
import ButtonLike from "./ButtonLike";

function Form() {

  return (
       <section id="form" className="text-center">
                <h2 className="title">Contact Us</h2>
                <form>
                    <Input htmlFor="fname" label="First name" type="text" id="fname" name="fname" placeholder="Your Name" />

                    <Input htmlFor="lname" label="Last name" type="text" id="lname" name="lname" placeholder="Your Lastname" />

                    <Input htmlFor="email" label="Email" type="email" id="email" name="email" placeholder="Your Email" />

                    <Input htmlFor="message" label="Message" type="textarea" id="message" name="message" rows="10" cols="30" placeholder="Your Message" />
                    
                    <ButtonLike />

                    <button type="submit">Send</button>
                </form>
            </section>
  )
}

export default Form;