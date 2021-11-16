import React from "react";
interface SectionHeaderProps{
  title:String;
  xContClassName?: String;
  xTitleClassName?: String;
  xOutlineClassName?: String;
}
const defaultProps ={
  xContClassName: "",
  xTitleClassName: "",
  xOutlineClassName: ""
}

export const SectionHeader: React.FC<SectionHeaderProps> = (props) => {

  return (
     //<div className='community-container'>
       <HeaderTitle title={props.title} xContClassName={props.xContClassName} xTitleClassName={props.xTitleClassName} xOutlineClassName={props.xOutlineClassName} />
     //</div>
  )
}
const HeaderTitle = ({title, xContClassName, xTitleClassName,xOutlineClassName }) => (
  <div className={'section-header-container '+xContClassName}>
   <svg xmlns="http://www.w3.org/2000/svg"
     xmlnsXlink="http://www.w3.org/1999/xlink">
    <text x="0%" y="50%" textAnchor="start" fontSize="66px" fill='none' strokeWidth=".2" stroke="white" fontFamily="sans-serif">{title}</text>
   </svg>
   <span className={'section-header-title ' + xTitleClassName}>{title}</span>
   
   
   <span className='section-header-accent'> </span>
  </div>
)

SectionHeader.defaultProps = defaultProps;