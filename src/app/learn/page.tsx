"use client";
import React, { useState } from "react";
import jData from "./data.json";

const Home = () => {
  const [data, setData] = useState(jData);

  const removeItem = (id: number) => {
    const s = data.filter((item) => {
      return item.id !== id;
    });
    setData(s);
  };

  const updateItem = (id:number) =>{
    setData(
      data.map((i)=>{
        if(i.id === id){
          i.name = "rsml"
        }
        return i
      })
    )
  }

  return (
    <>
      {data.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <br />
          <button onClick={() => removeItem(item.id)}>remove item</button>
          <button onClick={()=> updateItem(item.id)}>update Item</button>
        </div>
      ))}
      <br />
    </>
  );
};
export default Home;
