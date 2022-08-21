import { allowedNodeEnvironmentFlags } from "process";
import React, { useState, FC, MouseEvent } from "react";
//@ts-ignore
import styles from "./Tabs.module.css";

const TABS_NAME = [
  {
    key: "all",
    title: "All"
  },
  {
    key: "myFavorites",
    title: "My favorites"
  },
  {
    key: "popular",
    title: "Popular"
  },
  {
    key: "disabled",
    title: "Disabled"
  }
];
// type TabsPropsType = {
//   onClick: (value:string) => void;

// }
const Tabs =  () => {
  // const [value, setValue] = React.useState(0);
  // const actArray = [];
  // for (let i = 0; i < 4; i++) {
  //   if (i === value) {
  //     actArray.push("btn active");
  //   } else {
  //     actArray.push("btn");
  //   }
  // }
  const targetTabs = (evt:MouseEvent<HTMLButtonElement>) =>{
    console.log(evt.target)

  }
  return (
    <div className={`${styles.wrapper} ${styles.wrapperTabs}`}>
      <ul className={styles.tabList}>
        {TABS_NAME.map((tab) => {
          if(tab.key!=='disabled'){
            return <li key={tab.key}><button onClick={targetTabs}>{tab.title}</button></li>
          }else{
            return <li key={tab.key}><button onClick={targetTabs} disabled>{tab.title}</button></li>
          }
        }
          
           
          
      )}

        {/* <li>
          <button
            type="button"
            className={actArray[0]}
            onClick={() => {
              setValue(0);
            }}
          >
            All
          </button>
        </li>
        <li>
          <button
            type="button"
            className={actArray[1]}
            onClick={() => {
              setValue(1);
            }}
          >
            My favorites
          </button>
        </li>
        <li>
          <button
            type="button"
            className={actArray[2]}
            disabled
            onClick={() => {
              setValue(2);
            }}
          >
            Disabled
          </button>
        </li>
        <li>
          <button
            type="button"
            className={actArray[3]}
            onClick={() => {
              setValue(3);
            }}
          >
            Popular
          </button>
        </li> */}
      </ul>
      <br />
      <br />
      {/* <div>
        <h2>TAB NO: {value + 1}</h2>
      </div> */}
    </div>
  );
};

export default Tabs;
