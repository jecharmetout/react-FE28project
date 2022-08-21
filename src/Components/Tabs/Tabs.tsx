import React, {useState} from 'react'
//@ts-ignore
import styles from './Tabs.module.css'


const Tabs = () => {
    const tabItems = {
      all: "All",
      myfav: "My favorites",
      popular: "Popular"
    };
    const [value, setValue] = React.useState(0);
    const actArray = [];
    for (let i = 0; i < 4; i++) {
      if (i === value) {
        actArray.push("btn active");
      } else {
        actArray.push("btn");
      }
    }
    return (
      <div className={`${styles.wrapper} ${styles.wrapperTabs}`}>
        <ul className={styles.tabList}>
          <li>
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
          </li>
        </ul>
        <br />
        <br />
        <div>
          <h2>TAB NO: {value + 1}</h2>
        </div>
      </div>
    );
  };

export default Tabs