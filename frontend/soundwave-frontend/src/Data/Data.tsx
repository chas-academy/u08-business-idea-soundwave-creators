// interface ReviewData {
//     name: string;
//     img: string;
//     review: string;
//   }

//   const  data: ReviewData[] = [
//     {
//       name: "",
//       img: "/students/John_Morgan.jpg",
//       review: "",
//     },
//     {
//       name: "",
//       img: "/students/Ellie_Anderson.jpg",
//       review: "",
//     },
//     {
//       name: "",
//       img: "/students/Nia_Adebayo.jpg",
//       review: "",
//     },
//     {
//       name: "",
//       img: "/students/Rigo_Louie.jpg",
//       review: "",
//     },
//     {
//       name: "",
//       img: "/students/Mia_Williams.jpg",
//       review: "",
//     },
//   ];

//   export default data;


// src/Data/Data.tsx
interface ReviewData {
  name: string;
  img: string;
  review: string;
}

const data: ReviewData[] = [
  {
    name: "Hero 1",
    img: "/src/assets/hero1.png",
    review: "This is Hero 1's review.",
  },
  {
    name: "Hero 2",
    img: "/src/assets/hero2.png",
    review: "This is Hero 2's review.",
  },
  {
    name: "Hero 3",
    img: "/src/assets/hero3.png",
    review: "This is Hero 3's review.",
  },
  {
    name: "Hero 4",
    img: "/src/assets/hero4.png",
    review: "This is Hero 4's review.",
  },
  {
    name: "Hero 5",
    img: "/src/assets/hero5.png",
    review: "This is Hero 5's review.",
  },
  {
    name: "Hero 6",
    img: "/src/assets/hero6.png",
    review: "This is Hero 6's review.",
  },
];

export default data;
