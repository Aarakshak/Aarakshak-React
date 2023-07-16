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
                <div className="contact-left col-sm-6">
                            
                    {/* <img src={LogoMain} className='logo-contact'></img> */}

                    <div className='logotext'>AaarHak</div>

                    <div className='contact-left-text'>
                        
                        Aarakshak is a Near Field Communication-based solution, which can be used for securely tracking and authenticating police personnel on ground duty in real time.
                        <br></br>

                    </div>
                </div>
                <div className="contact-right col-sm-6">
                    <div className='mapper'>
                        <div className='contact-right-heading'>
                            USEFUL LINKS
                        </div>
                        <div className='contact-right-links'>
                            <div><a className='con-link' href=''><i class="fa-solid fa-1x fa-circle-chevron-right"></i> Get Involved</a></div>
                            <div><a className='con-link' href="#subnews"><i class="fa-solid fa-1x fa-circle-chevron-right"></i> Subscribe to Newsletter</a><Newsletter /></div>
                            <div><a className='con-link' href=''><i class="fa-solid fa-1x fa-circle-chevron-right"></i> Read more about Aarakshak</a></div>
                        </div>
                        <div className='social-media-buttons-contact'>
                            <a target="blank" href="tel:+91-9910545503">
                                <li class="fa-solid fa-phone fa-2x ln"></li>
                            </a>
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
                            <p>© Aarakshak | All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        );
}
export default ContactUs;