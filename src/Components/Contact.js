import React, {useState} from 'react'; 
import '../style/Contact.css'; 
import pdf from '../Resume.pdf'; 
import db from '../firebase'; 

function Contact() {
    // const [input, setInput] = useState([]); 

    const[name, setName] = useState(""); 
    const[email, setEmail] = useState(""); 
    const [message, setMessage] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault(); 

        db.collection('contact').add({
            name: name, 
            email: email, 
            message: message
        }); 

        setName(""); 
        setEmail(""); 
        setMessage("");
    };

    return (
        <div id="contact">
            <h1>Contact</h1>
            <div className="contact__section">
                <form>
                    <input 
                        type="text" 
                        id="name" 
                        value={name}
                        placeholder="Name"
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        type="text" 
                        id="email" 
                        value={email}
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <textarea 
                        id="message" 
                        value={message}
                        placeholder="Message"
                        onChange={e => setMessage(e.target.value)}
                    />
                    <button onClick={handleSubmit} type="submit">Submit</button>
                </form>
                <div className="contact__info">
                    <div className="email">
                        <div className="title">Email</div>
                        <div className="description">daogena@gmail.com</div>
                    </div>
                    <div className="phone-number">
                        <div className="title">Phone Number</div>
                        <div className="description">(609) 432-3435</div>
                    </div>
                    <div className="resume">
                        <div className="resume__button">
                            <a href={pdf} target="_blank" rel="noopener noreferrer">Resume</a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
