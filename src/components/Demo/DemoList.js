import React, { useMemo } from "react";

import classes from "./DemoList.module.css";

const DemoList = (props) => {
  const { items: listItems } = props;
  const sortedList = useMemo(() => {
    console.log("list sorted");
    return listItems.sort((a, b) => a - b);
  }, [listItems]);
  console.log("DemoList component ran");
  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
