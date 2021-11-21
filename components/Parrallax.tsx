
import { height, width } from "@mui/system";
import React, {useState} from "react";
import useIntersect from "../hooks/useIntersect";


const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);

export const Parallax = ({props, children}) =>{
  const {setNode:ref, entry, merp } = useIntersect({
    //rootMargin: `${props.height}`,
    threshold: buildThresholdArray()
  });
  return (
    <div  className={props.className} style={{position:"relative",height: props.height, width: props.width}} >
      <div ref={ref} style={{position:"absolute", height: "100vh", width: '100%', top: '-100%'}}>f </div>
      <div  className="parallax-foreground" style={{position:"absolute", top: `${props.ratio-5-merp.current*props.ratio|| 0}%`}}>
        {children}
      </div>
    </div>
  )

}