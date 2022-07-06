import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const Header = ({ content, setContent, setShow, show, handleCız }) => {
  const [form, setForm] = useState({ gorev: "", id: "", isDone: false });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const { id, gorev, isDone } = form;
  const onSubmitChange = (e) => {
    e.preventDefault();

    const newform = { id: new Date().getTime(), gorev: gorev, isDone: isDone };
    // console.log(id);
    if (gorev === "") {
      return false;
    }
    setContent([...content, newform]);
    console.log(content);
    setForm({ gorev: "" });
  };
  console.log(content);
  console.log(show);

  return (
    <>
      <form onSubmit={onSubmitChange}>
        <span className={show ? "header-arrow-hide" : "header-arrow-show"}>
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
