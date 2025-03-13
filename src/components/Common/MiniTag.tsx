import React from 'react';

export interface IMiniTagProps {
  text: string;
  color?: string;
  colorText?: string;
}

const MiniTag = (props: IMiniTagProps) => {
  return (
    <span
      className="px-3 py-[3px] border-slate-300 rounded-full inline-block cursor-pointer text-sm"
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
