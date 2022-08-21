import React, { FC, useState } from "react";
// @ts-ignore
import styles from "./App.module.css";
import Button, {ButtonType} from './Components/Button'
import User from './Components/User'
// import Menu from './components/navbar';
// import Input from './components/Input';
const Navbar = () => {
  return (
    <nav className={styles.wrapperNavbar}>
      <div className={styles.burgerBtn}>
        <span />
      </div>
      <main>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          consequatur facere aut ullam, deleniti eligendi, blanditiis, vitae
          maxime est sit atque in porro. Soluta eligendi dignissimos, iure nulla
          ullam aliquid.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          consequatur facere aut ullam, deleniti eligendi, blanditiis, vitae
          maxime est sit atque in porro. Soluta eligendi dignissimos, iure nulla
          ullam aliquid.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          consequatur facere aut ullam, deleniti eligendi, blanditiis, vitae
          maxime est sit atque in porro. Soluta eligendi dignissimos, iure nulla
          ullam aliquid.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          consequatur facere aut ullam, deleniti eligendi, blanditiis, vitae
          maxime est sit atque in porro. Soluta eligendi dignissimos, iure nulla
          ullam aliquid.
        </p>
      </main>
      {/* <Menu/> */}
    </nav>
  );
};


const Title = ({ title, className }: any) => {
  return (
    <div className={styles.wrapperTitle}>
      <h2 className={className}>{title}</h2>
    </div>
  );
};
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
    <>
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
    </>
  );
};
function App() {
  // const [value, setValue] = useState<string>('');

  // const onChange = (inputValue:string)=>{
  //   setValue(inputValue)
  // }

  return (
    <div className={styles.app}>
      {/* <Input placeholder={'Placeholder'} onChange={onChange} value={value} disabled={true}/> */}
      {/* <Navbar /> */}
      <div className={styles.wrapper}>
        <Button
          type={ButtonType.Primary}
          title={"Primary"}
          onClick={() => {
            console.log("primary");
          }}
          className={styles.primary}
          disabled={false}
        />
        <Button
          type={ButtonType.Primary}
          title={"Primary"}
          onClick={() => {
            console.log("primary");
          }}
          className={styles.primary}
          disabled={true}
        />
        <Button
          type={ButtonType.Secondary}
          title={"Secondary"}
          onClick={() => {
            console.log("secondary");
          }}
          className={styles.secondary}
          disabled={false}
        />
        <Button
          type={ButtonType.Secondary}
          title={"Secondary"}
          onClick={() => {
            console.log("secondary");
          }}
          className={styles.secondary}
          disabled={true}
        />
        <Button
          type={ButtonType.Error}
          title={"Error"}
          onClick={() => {
            console.log("error");
          }}
          className={styles.error}
          disabled={false}
        />
        <Button
          type={ButtonType.Error}
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
      <div className={`${styles.wrapper} ${styles.wrapperTabs}`}>
        <Tabs />
      </div>
      <div className={`${styles.wrapper}`}>
        <Title title={"Sign In"} className={styles.title} />
      </div>
    </div>
  );
}

export default App;
