import React from "react";
import "./contact.css"

function Contact_with_us(){
    return(
        <div className="conta">

            <div className="container">
                <h1 className="bbbb">Connect with me</h1>
                <p>  We would love to respond to your queries and help you succeed.  Feel free to get in touch with us. </p>
                <div className="contact-box">
                <div className="contact-left">
                    <h3>Send your request</h3>
                    <form action="">
                        <div className="input-row">
                            <div className="input-group">
                                <label htmlFor="">Name</label>
                                <input className="inputyyyy" type="text" placeholder="Abbas Surakji" />
                            </div>

                            <div className="input-group">
                                <label htmlFor="">Phone</label>
                                <input className="inputyyyy" type="text" placeholder="0567701516" />
                            </div>


                        </div>
                        <div className="input-row">
                            <div className="input-group">
                                <label htmlFor="">Email</label>
                                <input className="inputyyyy" type="text" placeholder="...@gmail.com" />
                            </div>

                            <div className="input-group">
                                <label htmlFor="">Subject</label>
                                <input className="inputyyyy" type="text" placeholder="Product Demo" />
                            </div>


                        </div>

                        <label htmlFor="">Message</label>
                        <textarea rows="7" placeholder="Your Message"> </textarea>
                        <button type="submit" className="button11111">SEND</button>

                    </form>




                </div>
                <div className="contact-right">
                <h3>Reach Us</h3>
                    <table>
                        <tr>
                            <td>Email</td>
                            <td>Concatus@wxample.com</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>+972567701516</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>Nablus/Haifa street</td>
                        </tr>
                    </table>
                </div>
            </div>
            </div>

            

        </div>
    )
}
export default Contact_with_us