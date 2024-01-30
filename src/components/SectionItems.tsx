
import Items from "./Items";
import SectionHeader from "./SectionHeader";

export default function SectionItems() {
    
    return (
        <section className="section-about-container" style={{border:"2px red block"}}> 
        <SectionHeader></SectionHeader>
        <Items></Items>
       </section>
    );
}