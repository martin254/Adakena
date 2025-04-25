import fiction from "../assets/categories/fiction.png";
import StoryBook from "../assets/categories/children.png";
import Coloring from "../assets/categories/Coloring.jpg";
import Tracing from "../assets/categories/Coloring.jpg";
import business from "../assets/categories/business.png";
import academic from "../assets/categories/academic.png";
import religious from "../assets/categories/religious.png";


import book_1 from './book_1.png'
import book_2 from './book_2.png'
import book_3 from './book_3.png'
import book_4 from './book_4.png'
import book_5 from './book_5.png'
import book_6 from './book_6.png'
import book_7 from './book_7.png'
import book_8 from './book_8.png'
import book_9 from './book_9.png'
import book_10 from './book_10.png'
import book_11 from './book_11.png'
import book_12 from './book_12.png'
import book_13 from './book_13.png'
import book_14 from './book_14.png'
import book_15 from './book_15.png'
import book_16 from './book_16.png'
import book_17 from './book_17.png'
import book_18 from './book_18.png'
import book_19 from './book_19.png'
import book_20 from './book_20.png'
import book_21 from './book_21.png'
import book_22 from './book_22.png'
import book_23 from './book_23.png'
import book_24 from './book_24.png'
import book_25 from './book_25.png'
import book_26 from './book_26.png'
import book_27 from './book_27.png'
import book_28 from './book_28.png'
import book_29 from './book_29.png'
import book_30 from './book_30.png'
import book_31 from './book_31.png'
import book_32 from './book_32.png'
import book_33 from './book_33.png'
import book_34 from './book_34.png'
import book_35 from './book_35.png'
import book_36 from './book_36.png'
import dinopage2 from './dino_2.png'
import dinopage3 from './dino_3.png'
import dinopage4 from './dino_4.png'
import dinopage5 from './dino_5.png'
import Tracing_1 from './Tracing_1.png'
import Tracing_2 from './Tracing_2.png'
import Tracing_3 from './Tracing_3.jpg'
import Tracing_4 from './Tracing_4.png'
import Adakena10 from './Adakena10.jpg'
import Adakena1 from './Adakena1.jpg'
import Adakena2 from './Adakena2.jpg'
import Adakena3 from './Adakena3.jpg'
import Adakena4 from './Adakena4.jpg'
import Tiny_Dino from './Tiny_Dino.png'
import tracingbook from './TracingCover.png'

export const categories = [
    {
        name: "Tracing",
        image: Tracing,
    },
    {
        name: "StoryBook",
        image: fiction,
    },
    {
        name: "Coloring",
        image: Coloring,
    },
    {
        name: "Academic",
        image: academic,
    },
   
];


// icons
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaYoutube,
  } from "react-icons/fa6";


  export const books = [
    {
      _id: "1",
      slug: "tracing-workbook",
      asin: "1068795514", 
      name: "Tracing Workbook",
      image: tracingbook,
      price: 8,
      description: "Tracing Workbook for Preschoolers and Toddlers Letters, Numbers, Shapes, Lines & More! Unlock your child’s learning potential with this fun and engaging tracing workbook! Designed for children aged 3+, this educational resource helps develop essential pre-writing and fine motor skills through 100+ pages of creative activities.",
      category: "Tracing",
      date: 1716634345448,
      popular: true,
      previewPages: [Tracing_1, Tracing_2, Tracing_3, Tracing_4 ],
    },
    {
      _id: "2",
      slug: "tiny-tinnie-dino",
      asin: "1068795514", 
      name: "Tiny Tinnie Dino",
      image: Tiny_Dino,
      price: 5,
      description: "Welcome to the exciting world of dinosaurs! This coloring book is perfect for young explorers aged 3 to 6 who love dinosaurs and creativity. Packed with over 50 pages of delightful dinosaur illustrations, this book offers a fun and educational journey through the prehistoric era.",
      category: "Coloring",
      date: 1716634345448,
      popular: true,
      previewPages: [dinopage2, dinopage3, dinopage4, dinopage5 ],
    },
    {
      _id: "3",
      slug: "power-of-dreams",
      name: "Power of Dreams",
      asin: "1068795506", 
      image: Adakena10,
      price: 8,
      description: "Power of Dreams: Aspiring Little Heroes is a heartwarming collection of stories celebrating the boundless imagination and incredible potential of black children from diverse backgrounds around the world. This vibrant book takes young readers on an inspiring journey through the dreams and aspirations of black kids who envision themselves as future heroes in their own unique ways. From artists to astronauts, chefs to engineers, scientists to entrepreneurs each story shines a light on the possibilities that lie within every black child, encouraging them to dream big, stay curious, and follow their passions.",
      category: "StoryBook",
      date: 1716634345448,
      popular: true,
      previewPages: [Adakena1, Adakena2, Adakena3, Adakena4 ],
    },
  ]
  ;



// FOOTER SECTION
export const FOOTER_LINKS = [
    {
      title: "Learn More",
      links: [
        "About Us",
        "Latest books",
        "FAQ",
      ],
    },
    {
      title: "Our Community",
      links: [
        "Terms and Conditions",
        "Customer Reviews",
      ],
    },
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: "Contact Us",
    links: [
      { label: "Contact Number", value: "+447449121774" },
      { label: "Email Address", value: "info@adakena.com" },
    ],
  };
  
  export const SOCIALS = {
    title: "Social",
    links: [
      { icon: <FaFacebook />, id: "facebook" },
      { icon: <FaInstagram />, id: "instagram" },
      { icon: <FaTwitter />, id: "twitter" },
    ],
  };
