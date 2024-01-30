import { useEffect, useState } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
    return () => 
       window.removeEventListener("scroll", listenToScroll); 
  }, [])
  
  
    const listenToScroll = () => {
      const contactUs = document.getElementById('contact-aside');
      const footer = document.getElementById('page-footer');

      if (contactUs && footer) {
        const contactUsBottom = contactUs.getBoundingClientRect().bottom;
        const footerTop = footer.getBoundingClientRect().top;

        let isUnder = contactUsBottom < footerTop;
        setIsVisible(isUnder);
      }
    };
    
    return (
      
       <aside id="contact-aside" className="contact-aside d-none d-sm-block">
        {isVisible 
        &&
        <>
          <a href="#contact">
            <p>
            <div className="contact-line "></div>
            </p>
            <p>Contact us</p>
          </a>
        </>
        }
       </aside>
    );
}