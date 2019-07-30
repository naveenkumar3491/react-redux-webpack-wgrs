import React from 'react';
import styles from './sample.module.scss';
import './App.scss';

function Sample() {
    console.log(styles);
  return (
    <div >
   <button className={styles.error}>ddw Error Button</button>
    </div>
  );
}

export default Sample;
