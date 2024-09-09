import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Cards() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <div className="boxes">
<Carousel responsive={responsive}>
  <div className="box1">
    <img className="picc1" src="pic1.jpg" alt="hello" />
    <h2 className="info1">Dr.Amjad</h2>
    <p className="content1">A highly skilled physician specializing in cardiology, this doctor focuses on diagnosing and treating heart conditions. With expertise in managing chronic heart diseases, performing diagnostic.</p>
    <button className="tap">Read me</button>
    </div>
  <div className="box1">
    <img className="picc1" src= "./pic2.jpeg" alt=""/>
    <h2 className="info2">Dr.Steve</h2>
    <p className="content2">Orthopedic Surgeon: Focuses on the musculoskeletal system, including bones, joints, ligaments, and muscles. This doctor performs surgeries to address fractures, joint replacements.</p>
    <button className="tap">Read me</button>
  </div>
  <div className="box1">
    <img className="picc1" src= "./pic3.jpeg" alt=""/>
    <h2 className="info3">Dr.Gwen</h2>
    <p className="content3">Dermatologist: Expert in diagnosing and treating a wide range of skin issues, from acne and eczema to more serious conditions like melanoma. They also offer cosmetic dermatology services.</p>
  <button className="tap">Read me </button>
  </div>
  <div className="box1">
    <img className="picc1" src= "./pic4.jpeg" alt=""/>
    <h2 className="info4">Dr.Havard</h2>
    <p className="content4">Dermatologist: Expert in diagnosing and treating a wide range of skin issues, from acne and eczema to more serious conditions like melanoma. They also offer cosmetic dermatology services.</p>
    <button className="tap">Read me </button>
  </div>
  <div className="box1">
    <img className="picc1" src= "./pic5.png" alt=""/>
    <h2 className="info5">Dr.Amelia</h2>
    <p className="content5">Neurologist: Specializes in disorders of the nervous system, including the brain, spinal cord, and nerves. They diagnose and manage conditions such as migraines, epilepsy, multiple sclerosis.</p>
    <button className="tap">Read me </button>
  </div>
  <div className="box1">
    <img className="picc1" src= "pic6.jpeg" alt=""/>
    <h2 className="info6">Dr.amjad</h2>
    <p className="content6">Oncologist: Dedicated to the diagnosis and treatment of cancer. This doctor manages various types of cancer through chemotherapy, targeted therapies, immunotherapy, and supportive care.</p>
    <button className="tap">Read me </button>
  </div>
 
</Carousel>
        </div>
    )
}
