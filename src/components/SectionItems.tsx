
import Items from "./Items";
import SectionHeader from "./SectionHeader";

export default function SectionItems() {
    
    return (
        <>
        <section  className="container-fluid section-about-container">
        <SectionHeader></SectionHeader>
        <Items></Items>
        </section>
        </>
    );
}