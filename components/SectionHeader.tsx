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
     <div className='community-container'>
       <HeaderTitle title={props.title} xContClassName={props.xContClassName} xTitleClassName={props.xTitleClassName} xOutlineClassName={props.xOutlineClassName} />
     </div>
  )
}
const HeaderTitle = ({title, xContClassName, xTitleClassName,xOutlineClassName }) => (
  <div className={'section-header-container '+xContClassName}>
   <span className={'section-header-title ' + xTitleClassName}>{title}</span>
   <span className={'section-header-outline ' + xOutlineClassName}>{title}</span>
   <span className='section-header-accent'> </span>
  </div>
)

SectionHeader.defaultProps = defaultProps;