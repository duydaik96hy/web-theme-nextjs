import React from 'react';
import styles from './common.module.css';

export interface IMiniTagProps {
  text: string;
  color?: string;
  colorText?: string;
}

const MiniTag = (props: IMiniTagProps) => {
  return (
    <span
      className={styles.mini_tag}
      style={{
        backgroundColor: props.color ?? 'white',
        borderWidth: 1,
        color: props.colorText ?? 'black',
      }}
    >
      {props.text}
    </span>
  );
};

export default MiniTag;
