import React from 'react'
//@ts-ignore
import styles from './Title.module.css'

const Title = ({ title }: any) => {
    return (
      <div className={styles.wrapperTitle}>
        <h2 className={styles.title}>{title}</h2>
      </div>
    );
  };
export default Title