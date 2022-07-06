import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";

const Home = () => {
  const [content, setContent] = useState(
    JSON.parse(localStorage.getItem("content")) || []
  );
  const [show, setShow] = useState(true);
  useEffect(() => {
    localStorage.setItem("content", JSON.stringify(content));
  }, [content]);
  const removeItem = (id) => {
    const newList = content.filter((item) => item.id !== id);
    setContent(newList);
    localStorage.setItem("content", JSON.stringify(content));
  };
  const [isDonen, setIsDonen] = useState(false);
  const handleCız = (id) => {
    const cızık = content.filter((item) => item.id === id);
    cızık[0].isDone = !cızık[0].isDone;
    localStorage.setItem("content", JSON.stringify(content));
    setIsDonen(!isDonen);
  };
  useEffect(() => console.log("hello"), [isDonen]);
  console.log(content);
  return (
    <>
      <Header
        content={content}
        setContent={setContent}
        setShow={setShow}
        show={show}
        handleCız={handleCız}
      />

      <Main
        content={content}
        show={show}
        removeItem={removeItem}
        // isDonen={isDonen}
        handleCız={handleCız}
      />
    </>
  );
};

export default Home;
