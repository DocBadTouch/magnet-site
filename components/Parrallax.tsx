
import { height, width } from "@mui/system";
import React, {useState} from "react";
import useIntersect from "../hooks/useIntersect";


const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);

export const Parallax = ({props, children}) =>{
  const {setNode:ref, entry } = useIntersect({
    //rootMargin: `${props.height}`,
    threshold: buildThresholdArray()
  });
  return (
    <div  className={props.className} style={{position:"relative",height: props.height, width: props.width}} >
      <div ref={ref} style={{position:"absolute", height: "1800px", width: '100%', top: '-50%'}}>f </div>
      <div  className="parallax-foreground" style={{position:"absolute", top: `${props.ratio-5-entry?.intersectionRatio*props.ratio|| 0}%`}}>
        {children}
      </div>
    </div>
  )

}