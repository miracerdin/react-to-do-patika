import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const Home = () => {
  const [content, setContent] = useState(
    JSON.parse(localStorage.getItem("content")) || []
  );
  const [all, setAll] = useState([]);
  const [active, setActive] = useState([]);
  const [complete, setComplete] = useState([]);
  const [click, setClick] = useState(content);
  const [show, setShow] = useState(true);
  const [isDonen, setIsDonen] = useState(false);

  useEffect(() => {
    localStorage.setItem("content", JSON.stringify(content));
  }, [content]);

  const removeItem = (id) => {
    const newList = content.filter((item) => item.id !== id);
    setContent(newList);
    localStorage.setItem("content", JSON.stringify(content));
  };

  const handleCız = (id) => {
    const cızık = content.filter((item) => item.id === id);
    cızık[0].isDone = !cızık[0].isDone;
    // localStorage.setItem("content", JSON.stringify(content));
    setIsDonen(!isDonen);
  };
  useEffect(() => console.log("hello"), [isDonen]);
  console.log(content);

  const handleAll = () => {
    setContent(JSON.parse(localStorage.getItem("content")) || []);
    setClick(content);
  };

  const handleActive = () => {
    const active = content.filter((item) => item.isDone === false);
    setActive(active);
    setClick(active);
  };
  const handleCompleted = () => {
    const complete = content.filter((item) => item.isDone === true);
    setComplete(complete);
    setClick(complete);
    console.log(complete);
  };
  useEffect(() => {
    setClick(content);
  }, [content]);

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
        click={click}
        // data={data}
        // isDonen={isDonen}
        handleCız={handleCız}
        // complete={complete}
        // actived={actived}
      />
      <Footer
        click={click}
        content={content}
        handleAll={handleAll}
        handleActive={handleActive}
        handleCompleted={handleCompleted}
      />
    </>
  );
};

export default Home;
