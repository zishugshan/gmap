import { useState } from "react";

function ListGroup(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <h1>{props.heading}</h1>
      {props.items.length === 0 && <p>No {props.heading} Listed</p>}
      <ul className="list-group">
        {props.items.map((item, Index) => (
          <li
            className={
              selectedIndex === Index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(Index);
              props.func(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
