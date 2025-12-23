
// import Card1 from './components/card1'
// import React from 'react'

// const cardData = [
//   {
//     id: 1,
//     status: "Available",
//     price: "$22",
//     name: "Rahul Sharma",
//     jobRole: "UI / UX Designer",
//     company: "Epic Coder",
//     skills: "PHP / Developer",
//     description: "Creative UI/UX designer with a passion for clean and modern design."
//   },
//   {
//     id: 2,
//     status: "Available",
//     price: "$30",
//     name: "Anjali Verma",
//     jobRole: "Frontend Developer",
//     company: "Pixel Studio",
//     skills: "React / JavaScript",
//     description: "Frontend developer focused on performance and smooth user experience."
//   },
//   {
//     id: 3,
//     status: "Busy",
//     price: "$45",
//     name: "Amit Singh",
//     jobRole: "Full Stack Developer",
//     company: "Tech Wave",
//     skills: "Node / MongoDB",
//     description: "Full stack developer with strong backend and scalable systems."
//   },
//   {
//     id: 4,
//     status: "Available",
//     price: "$28",
//     name: "Neha Kapoor",
//     jobRole: "Product Designer",
//     company: "Design Hub",
//     skills: "Figma / UX Research",
//     description: "Product designer specializing in user-centric and minimal designs."
//   },
//   {
//     id: 5,
//     status: "Available",
//     price: "$35",
//     name: "Rohit Mehta",
//     jobRole: "Backend Developer",
//     company: "CodeStack",
//     skills: "Java / Spring Boot",
//     description: "Backend engineer focused on secure and scalable architectures."
//   },
//   {
//     id: 6,
//     status: "Busy",
//     price: "$50",
//     name: "Sneha Iyer",
//     jobRole: "Mobile App Developer",
//     company: "Appify",
//     skills: "Flutter / Dart",
//     description: "Cross-platform mobile developer building smooth and elegant apps."
//   },
//   {
//     id: 7,
//     status: "Available",
//     price: "$40",
//     name: "Karan Malhotra",
//     jobRole: "DevOps Engineer",
//     company: "CloudOps",
//     skills: "AWS / Docker",
//     description: "DevOps engineer ensuring fast deployments and high availability."
//   },
//   {
//     id: 8,
//     status: "Available",
//     price: "$26",
//     name: "Pooja Nair",
//     jobRole: "Graphic Designer",
//     company: "Creative Box",
//     skills: "Photoshop / Illustrator",
//     description: "Graphic designer with a strong eye for luxury and branding."
//   },
//   {
//     id: 9,
//     status: "Busy",
//     price: "$55",
//     name: "Arjun Patel",
//     jobRole: "Data Analyst",
//     company: "DataCraft",
//     skills: "Python / Power BI",
//     description: "Data analyst turning raw data into meaningful business insights."
//   },
//   {
//     id: 10,
//     status: "Available",
//     price: "$60",
//     name: "Meera Joshi",
//     jobRole: "AI Engineer",
//     company: "NeuroTech",
//     skills: "Python / Machine Learning",
//     description: "AI engineer building intelligent and scalable ML solutions."
//   }
// ];const App = () => {
//   return (
//     <>
//       {cardData.map((elem) => (
//         <Card1
//           key={elem.id}   // ✅ unique key
//           status={elem.status}
//           price={elem.price}
//           id={elem.id}
//           name={elem.name}
//           jobRole={elem.jobRole}
//           skills={elem.skills}
//           company={elem.company}
//           description={elem.description}
//         />
//       ))}
//     </>
//   );
// };

// export default App;

import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'
const App = () => {
  return (
    <>

    <Section1/>
    <Section2/>
    </>
  )
}

export default App
