import React, { useState } from "react";
import Card from "./Card";


function Forground() {

    
    
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea error",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: " Download Now", tagColor: " blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea error",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: " Download Now", tagColor: " grreen" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea error",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: " now", tagColor: " blue" },
    },
  ];
  return (
    <div className=" fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card data={item} />
      ))}
    </div>
  );
}

export default Forground;
