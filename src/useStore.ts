import React, { useEffect, useState } from "react";
export let store: any = {
  ls: [{ title: "card1.0", body: "body1.0", id: Date.now().toString() }],
};
let listeners: React.Dispatch<any>[] = [];

// setStore(store => ({...store, isFoo: false}))
export function setStore(val: Record<string, unknown> | ((store: any) => Record<string, unknown>)) : void {
  if (typeof val === "object" && val !== null) {
    store = val;
  } else {
    store = val(store);
  }
  store = val;
  listeners.forEach((l) => l(val));
}

export function getStore() {
  return { ...store };
}

// setStore(store => {
//     return {...store }
// })

export default function useStore() {
  const listener = useState<any>()[1];
  let ezYpZ= 5;
  console.log(ezYpZ);
  useEffect(() => {
    listeners.push(listener);
    return () => void (listeners = listeners.filter((l) => l === listener));   
  }, []);
  return [store, setStore];
}
