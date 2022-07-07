import React from "react";

const Footer = ({
  handleActive,
  handleAll,
  handleCompleted,
  content,
  click,
}) => {
  return (
    <div>
      <span>{click.length} items left</span>
      <button onClick={handleAll}>all</button>
      <button onClick={handleActive}>active</button>
      <button onClick={handleCompleted}>complete</button>
    </div>
  );
};

export default Footer;

// import React from "react";
// import { useState } from "react";

// const Footer = ({ content, setContent, setShow }) => {
//   const unCompleted = content.filter((item) => item.show === false);

//   const [select, setSelect] = useState("selected", "", "");

//   const clearCompleted = (e) => {
//     setContent(content.filter((item) => item.checked === false));
//   };
//   const selectedButton = (e) => {
//     switch (e.target.id) {
//       case "All":
//         setSelect(["selected", "", ""]);
//         setShow("All");
//         break;
//       case "Active":
//         setSelect(["", "selected", ""]);
//         setShow("Active");
//         break;

//       case "Completed":
//         setSelect(["", "", "selected"]);
//         setShow("Completed");
//         break;
//       default:
//     }
//   };

//   return (
//     <footer className="footer">
//       <span className="todo-count">
//         <strong>{unCompleted.length}</strong>
//         {unCompleted.length > 1 ? "items left" : "item left"}
//       </span>
//       <ul className="filters">
//         <li>
//           <a className={select[0]} id="All" onClick={selectedButton}>
//             All
//           </a>
//         </li>
//         <li>
//           <a className={select[1]} id="Active" onClick={selectedButton}>
//             Active
//           </a>
//         </li>
//         <li>
//           <a className={select[2]} id="Completed" onClick={selectedButton}>
//             Completed
//           </a>
//         </li>
//       </ul>
//       <button className="clear-completed" onClick={clearCompleted}>
//         Clear completed
//       </button>
//     </footer>
//   );
// };

// export default Footer;
