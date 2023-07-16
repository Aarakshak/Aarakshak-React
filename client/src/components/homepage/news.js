import React, { useEffect } from "react";
import '../../assets/css/news.css';
import AOS from "aos";

const News = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

      useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);

    return ( 
        <div className='schemes-outer'>
            <div className='schemes-inner row'>
            <div className='schemes-inner1 col-sm-1'>
                <div className='schemes-heading2'>
                    <h1> ताजा खबर / </h1>
                </div>
                <div className='schemes-heading'>
                    <h1> What's new. </h1>
                </div>
            </div>
            <div className="page-content col-sm-11">
                <div className="cardcard" data-aos="fade-down">
                    <div className="content">
                    <h2 className="title">Lorem ipsum</h2>
                    <p className="copy" style={{textAlign:""}}>Lorem ipsum et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    <a href="https://www.govtgk.com/orient-mahila-vikas-yojana/" target="_blank" rel="noopener noreferrer"><button className="btnschemes">Know More!</button></a>
                    </div>
                </div>
                <div className="cardcard" data-aos="fade-up">
                    <div className="content">
                    <h2 className="title">Lorem ipsum</h2>
                    <p className="copy" style={{textAlign:""}}>Lorem ipsum et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    <a href="https://aatmnirbharsena.org/blog/dena-shakti-scheme/" target="_blank" rel="noopener noreferrer"><button className="btnschemes">Know More!</button></a>
                    </div>
                </div>
                <div className="cardcard" data-aos="fade-down">
                    <div className="content">
                    <h2 className="title">Lorem ipsum</h2>
                    <p className="copy" style={{textAlign:""}}>Lorem ipsum et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    <a href="https://www.lendingkart.com/blog/udyogini-scheme/" target="_blank" rel="noopener noreferrer"><button className="btnschemes">Know More!</button></a>
                    </div>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default News;