 
 import HotelSection from "@/components/Hotelsection"
import Hero from "../components/Hero"
import AmenitiesSection from "@/components/Amenities"
   import About from "@/components/About"
import GallerySection from "@/components/Gallary"
import GuestReviewsSection from "@/components/Guest"
import ContactUsSection from "@/components/Contactform"


export default function Home() {
  return (
    <>
   
      <Hero/>
      <HotelSection/> 
      <AmenitiesSection/>
      <About/>
      <GallerySection/>
      <GuestReviewsSection/>
      <ContactUsSection/>
    </>
  )
}
