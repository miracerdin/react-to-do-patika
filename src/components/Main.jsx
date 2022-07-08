import React from "react";
import { MdDelete } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { useEffect } from "react";
const Main = ({
  content,
  show,
  removeItem,
  handleCız,
  click,
  // data,
}) => {
  return (
    <>
      <div className="container container-main">
        {!show ? (
          <ul>
            {click.map((item) => {
              console.log(item);
              const { id, gorev, isDone } = item;
              return (
                <li key={id}>
                  <span className="tik" onClick={() => handleCız(id)}>
                    {<AiOutlineCheck size={20} />}
                  </span>
                  <p className={"done"}>{gorev}</p>
                  <span>
                    <MdDelete onClick={() => removeItem(id)} />
                  </span>
                </li>
              );
            })}
          </ul>
        ) : (
          <ul>
            {click.map((item) => {
              console.log(item);
              const { id, gorev, isDone } = item;
              return (
                <li key={id}>
                  <span className="tik1" onClick={() => handleCız(id)}>
                    {isDone ? <AiOutlineCheck size={20} /> : null}
                  </span>
                  <p className={isDone ? "done" : null}>{gorev}</p>
                  <span>
                    <MdDelete onClick={() => removeItem(id)} />
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {/* <span>{content.length} items left</span>
      <button onClick={handleAll}>All</button>
      <button onClick={handleActive}>Active</button>
      <button onClick={handleCompleted}>Completed</button> */}
    </>
  );
};

export default Main;
