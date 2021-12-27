import React from "react";
import {SectionHeader} from '../components/SectionHeader'
interface SectionBaseProps {
  title: String;
  colorClass: String;
  headerColorClass: String;
}

export const SectionBase: React.FC<SectionBaseProps> = ( props ) => {

  return (
    <div className={'sectionBase '+props.colorClass}>
      <SectionHeader title={props.title}></SectionHeader>

    </div>

  )

}