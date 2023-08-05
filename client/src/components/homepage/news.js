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
                    <h2 className="title">Police Sammelan 2023</h2>
                    <p className="copy" style={{textAlign:""}}>On August 8th, an important event for police officials to meet and discuss crucial matters. Food will be served during the gathering.</p>
                    <a href="https://www.govtgk.com/orient-mahila-vikas-yojana/" target="_blank" rel="noopener noreferrer"><button className="btnschemes">Know More!</button></a>
                    </div>
                </div>
                <div className="cardcard" data-aos="fade-up">
                    <div className="content">
                    <h2 className="title">Swatantrata Diwas Tyaari</h2>
                    <p className="copy" style={{textAlign:""}}>On the occasion of Independence Day, more than 10,000 police personnel would be deployed in different roles across the Red Fort and other landmarks.</p>
                    <a href="https://aatmnirbharsena.org/blog/dena-shakti-scheme/" target="_blank" rel="noopener noreferrer"><button className="btnschemes">Know More!</button></a>
                    </div>
                </div>
                <div className="cardcard" data-aos="fade-down">
                    <div className="content">
                    <h2 className="title">Collect ID Cards</h2>
                    <p className="copy" style={{textAlign:""}}>Please collect your new ID badges from the designated office by 07 August 2023. ID Bagde  is mandatory for security and identification purposes.</p>
                    <a href="https://www.lendingkart.com/blog/udyogini-scheme/" target="_blank" rel="noopener noreferrer"><button className="btnschemes">Know More!</button></a>
                    </div>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default News;