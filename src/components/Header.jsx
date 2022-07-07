import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
const Header = ({ content, setContent, setShow, show, handleCız }) => {
  const [form, setForm] = useState({ gorev: "", id: "", isDone: false });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmitChange = (e) => {
    e.preventDefault();
    const { id, gorev, isDone } = form;
    const newform = { id: new Date().getTime(), gorev: gorev, isDone: false };
    // console.log(id);
    if (gorev === "") {
      return false;
    }
    setForm(newform);
    setContent([...content, newform]);
    console.log(content);
    setForm({ gorev: "" });
  };
  useEffect(() => {
    setContent(content);
  }, [content]);
  console.log(content);
  console.log(form);

  return (
    <>
      <form onSubmit={onSubmitChange}>
        <span className={show ? " header-arrow-hide" : "header-arrow-show"}>
          <IoIosArrowDown size={20} onClick={() => setShow(!show)} />
        </span>
        <input
          type="text"
          name="gorev"
          id="gorev"
          onChange={(e) => onChangeInput(e)}
          value={form.gorev}
        />
      </form>
    </>
  );
};

export default Header;
