import React, {useState} from "react";
// @ts-ignore
import styles from "./App.module.css";

const Button = ({ title, onClick, className, disabled }: any) => {
  // const buttonType = {
  //   primary: styles.primaty,
  //   secondary: styles.secondary,
  //   error: styles.error,
  // }

  return (
    <button
      onClick={onClick}
      className={`${className || ""}`}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

const User = ({ userName }: any) => {
  return (
    <div className={styles.user}>
      <p>{userName}</p>
    </div>
  );
};
const Title = ({ title, className }: any) => {
  return (
    <div className={styles.wrapperTitle}>
      <h2 className={className}>{title}</h2>
    </div>
  
  )
};
const Tabs = () => {
  const tabItems = {
    all: 'All',
    myfav: 'My favorites',
    popular: 'Popular',
  }
  const [value,setValue] = React.useState(0)
  const actArray = []
  for(let i=0;i<4;i++){
    if (i===value){
      actArray.push('btn active')
    }
    else{
      actArray.push('btn')
    }
  }
  return (
    <>
      
      <ul className={styles.tabList}>
        <li><button type='button' className={actArray[0]} onClick={()=>{setValue(0)}}>All</button></li>
        <li><button type='button' className={actArray[1]} onClick={()=>{setValue(1)}}>My favorites</button></li>
        <li><button type='button' className={actArray[2]} disabled onClick={()=>{setValue(2)}}>Disabled</button></li>
        <li><button type='button' className={actArray[3]} onClick={()=>{setValue(3)}}>Popular</button></li>
      </ul>
      <br/><br/>
      <div>
        <h2>TAB NO: {value+1}</h2>
      </div>
    </>
  );
};
function App() {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <Button
          title={"Primary"}
          onClick={() => {
            console.log("primary");
          }}
          className={styles.primary}
          disabled={false}
        />
        <Button
          title={"Primary"}
          onClick={() => {
            console.log("primary");
          }}
          className={styles.primary}
          disabled={true}
        />
        <Button
          title={"Secondary"}
          onClick={() => {
            console.log("secondary");
          }}
          className={styles.secondary}
          disabled={false}
        />
        <Button
          title={"Secondary"}
          onClick={() => {
            console.log("secondary");
          }}
          className={styles.secondary}
          disabled={true}
        />
        <Button
          title={"Error"}
          onClick={() => {
            console.log("error");
          }}
          className={styles.error}
          disabled={false}
        />
        <Button
          title={"Error"}
          onClick={() => {
            console.log("error");
          }}
          className={styles.error}
          disabled={true}
        />
      </div>

      <div className={styles.wrapper}>
        <User userName={"Artem Malkin"} />
      </div>
      <div className={`${styles.wrapper} ${styles.wrapperTabs}`} >
        <Tabs/>
      </div>
      <div className={`${styles.wrapper} ${styles.wrapperTabs}`}>
        <Title title={'Sign In'} className={styles.title}/>
      </div>
      
    </div>
  );
}

export default App;
