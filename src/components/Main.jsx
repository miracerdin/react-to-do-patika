import React from "react";
import { MdDelete } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
const Main = ({ content, show, removeItem, handleCız }) => {
  return (
    <>
      <div className="container container-main">
        {!show ? (
          <ul>
            {content.map((item) => {
              console.log(item);
              const { id, gorev, isDone } = item;
              return (
                <li key={id}>
                  <span className="tik" onClick={() => handleCız(id)}>
                    {<AiOutlineCheck size={20} />}
                  </span>
                  <span className={"done"}>{gorev}</span>
                  <span>
                    <MdDelete onClick={() => removeItem(id)} />
                  </span>
                </li>
              );
            })}
          </ul>
        ) : (
          <ul>
            {content.map((item) => {
              console.log(item);
              const { id, gorev, isDone } = item;
              return (
                <li key={id}>
                  <span className="tik1" onClick={() => handleCız(id)}>
                    {isDone ? <AiOutlineCheck size={20} /> : null}
                  </span>
                  <span className={isDone ? "done" : null}>{gorev}</span>
                  <span>
                    <MdDelete onClick={() => removeItem(id)} />
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <span>{content.length} items left</span>
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </>
  );
};

export default Main;
