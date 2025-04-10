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
import Adakena10 from './Adakena10.jpg'
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
    // Fiction
    {
        _id: "1",
        name: "Tracing Workbook",
        image: tracingbook,
        price: 30,
        description: "Tracing Workbook for Preschoolers and Toddlers Letters, Numbers, Shapes, Lines & More! Unlock your child’s learning potential with this fun and engaging tracing workbook! Designed for children aged 3+, this educational resource helps develop essential pre-writing and fine motor skills through 100+ pages of creative activities.",
        category: "Tracing",
        date: 1716634345448,
        popular: true,
    },
    {
        _id: "2",
        name: "Tiny Tinnie Dino",
        image: Tiny_Dino,
        price: 20,
        description: "Dinosaur Colouring Book. Welcome to the exciting world of dinosaurs! This coloring book is perfect for young explorers aged 3 to 6 who love dinosaurs and creativity. Packed with over 50 pages of delightful dinosaur illustrations, this book offers a fun and educational journey through the prehistoric era.",
        category: "Coloring",
        date: 1716634345448,
        popular: true,
    },
    {
        _id: "3",
        name: "Power of Dreams",
        image: Adakena10,
        price: 15,
        description: "Aspiring Little Heroes.",
        category: "StoryBook",
        date: 1716634345448,
        popular: true,
    },
    

    

];



// FOOTER SECTION
export const FOOTER_LINKS = [
    {
      title: "Learn More",
      links: [
        "About Us",
        "Latest books",
        "Hot Offers",
        "Popular books",
        "FAQ",
        "Privacy Policy",
      ],
    },
    {
      title: "Our Community",
      links: [
        "Terms and Conditions",
        "Special Offers",
        "Customer Reviews",
      ],
    },
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: "Contact Us",
    links: [
      { label: "Contact Number", value: "123-456-7890" },
      { label: "Email Address", value: "info@bacala.com" },
    ],
  };
  
  export const SOCIALS = {
    title: "Social",
    links: [
      { icon: <FaFacebook />, id: "facebook" },
      { icon: <FaInstagram />, id: "instagram" },
      { icon: <FaTwitter />, id: "twitter" },
      { icon: <FaYoutube />, id: "youtube" },
      { icon: <FaLinkedin />, id: "linkedin" },
    ],
  };
