
import '../../assets/css/contact.css';
import '../../assets/css/modal.css'
import Newsletter from './newsletter';
const location = {
    address: 'Dwarka, Delhi.',
    lat: 28.5823,
    lng: 77.0500,
}

const ContactUs = () => {
    return ( 
        <>
        <div className="hello-cons" id="contact"></div>
        <div className="contact">
            <div className="contact-inner row">
                <div className="contact-left col-sm-4">

                    <div className='logotext'>AaarHak</div>

                    <div className='contact-left-text contact-right-links'>
                        <button className='contact-btns contact-btns1'>Know more!</button> &nbsp; <button className='contact-btns'>Subscribe to Newsletter</button>
                    </div>

                    
                </div>
                <div className='col-sm-2'>

                </div>
                <div className="contact-right col-sm-6">
                    <div className='mapper'>
                        <div className='contact-right-heading'>
                            USEFUL LINKS
                        </div>


                    </div>
                </div>
                <center>
                <hr style={{color:'white', width:'95%',marginTop:'40px', height:'2px'}}></hr>
                </center>
                <div className='row'>
                    <div className='col-sm-4 social-media-buttons-contact'>
                        <p>© Aarakshak | <font style={{color:'#10b0d3'}}> All rights reserved. </font></p>
                    </div>
                    <div className='col-sm-2'> </div>
                    <div className='col-sm-2'> </div>
                    <div className='col-sm-4 social-media-buttons-contact'>
                            <a target="blank" href="">
                                <li class="fa-solid fa-envelope fa-2x ln"></li>
                            </a>
                            <a target="blank" href="">
                                <li class="fab fa-facebook fa-2x git"></li>
                            </a>
                            <a target="blank" href="">
                                <li class="fab fa-instagram fa-2x insta"></li>
                            </a>
                            <a target="blank" href="">
                                <li class="fab fa-twitter fa-2x"></li>
                            </a>
                    </div>
                </div>
            </div>
        </div>
        </>
        );
}
export default ContactUs;