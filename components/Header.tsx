import React,{useState} from 'react';
import Image from 'next/image';
import headerLogo from '../assets/img/magnet-logo.svg';
import { useTranslation } from 'next-i18next';

interface HeaderProps {

}
function openNav() {
  const el = document.getElementById("mobile-draw")
  const width = el.style.width;
  if(width=='0px'){
    el.style.width = '60%' //todo make this based on class
    document.getElementById("mobile-draw-mask").style.width = '100vh';//todo make this based on class
  }
  else {
    el.style.width = '0'
    document.getElementById("mobile-draw-mask").style.width = '0'
  }
}
function closeDraw() {
  document.getElementById("mobile-draw-mask").style.width = '0';
  document.getElementById("mobile-draw").style.width = '0';
}
export const Header: React.FC<HeaderProps> = ({ }) => {
  const [menuOpen, updateMenuOpen] = useState(false)
  const { t } = useTranslation("header")
  const info: { overview, tokenomics, roadmap, faq, docs } = t('navigation', { returnObjects: true })
  return (
    <header id="header">
      <MobileMenu props={info} />
      <DesktopMenu props={info} />
    </header>
  )
}
const MobileMenu = ({props}) => (
  <div className="header-mobile">
    <span onClick={openNav} >☰</span>
    <HeaderImage />
    <LaunchButton />
    <MobileMenuDraw props ={props} />
  </div>
)
const MobileMenuDraw = ({props})=>(
  <div style={{ position: "relative"}}>
    <div id="mobile-draw-mask" onClick={()=>closeDraw()} style={{width: "0", height: "100vh",  opacity: ".6", background: "#000", top: "-37px", position:"absolute"}}></div>
    <div id="mobile-draw" onClick={()=>closeDraw()} className="header-menu-draw"style={{ height: "100vh"}} >
    <HeaderImage />
    <PageNav props={props}/>
    <SocialsNav />
  </div>
  </div>
)
const DesktopMenu = ({props}) => (
  <div className="header-desktop">
    <div className="col-left">
      <HeaderImage />
      <PageNav props={{ ...props }} />
    </div>
    <div className="col-right">
      <SocialsNav />
      <LaunchButton />
    </div>
  </div>
)
const LaunchButton= ()=>(
  <a href="https://app.magnetdao.finance/" className="btn primary"><span>Launch app</span></a>
)
const HeaderImage = ()=>(
  <a href="#hero" id="logo-header"><Image src={headerLogo} alt="Magnet DAO Logo" layout="intrinsic" /></a>
)
const PageNav = ({ props }) => (
  <nav>
    <ul>
      <li><a onClick={closeDraw} href="#overview" className="anchor"><span>{props.overview}</span></a></li>
      <li><a onClick={closeDraw} href="#tokenomics" className="anchor"><span>{props.tokenomics}</span></a></li>
      <li><a onClick={closeDraw} href="#roadmap" className="anchor"><span>{props.roadmap}</span></a></li>
      <li><a onClick={closeDraw} href="#faq" className="anchor"><span>{props.faq}</span></a></li>
      <li><a onClick={closeDraw} href="#hero" className="anchor"><span>{props.docs}</span></a></li>
    </ul>
  </nav>
)
export const SocialsNav = () => (
  <nav className="socials">
    <ul>
      <DiscordIconLink />
      <TwitterIconLink />
      <GitHubIconLink />
      <TelegramIconLink />
      <MediumIconLink />
    </ul>
  </nav>
)
const DiscordIconLink = () => (
  <li>
    <a href="https://discord.gg/magnetdao" target="_blank" rel="noreferrer" title="Discord">
      <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
        <path d="M42.3272 9.10357C39.1404 7.64136 35.723 6.56401 32.1499 5.94693C32.0848 5.93501 32.0198 5.9648 31.9863 6.02427C31.5468 6.80601 31.0599 7.82573 30.719 8.6273C26.876 8.05191 23.0525 8.05191 19.2883 8.6273C18.9472 7.80796 18.4428 6.80601 18.0012 6.02427C17.9678 5.96675 17.9027 5.93696 17.8377 5.94693C14.2666 6.56196 10.8492 7.63931 7.66033 9.10357C7.63269 9.11548 7.60906 9.1353 7.59334 9.16108C1.1113 18.8452 -0.664477 28.2913 0.206617 37.6202C0.210523 37.6658 0.236206 37.7094 0.271656 37.7372C4.54832 40.8779 8.69109 42.7845 12.7568 44.0484C12.8219 44.0682 12.8908 44.0445 12.9322 43.9909C13.8939 42.6775 14.7512 41.2926 15.4863 39.8363C15.5297 39.751 15.4883 39.6499 15.3996 39.6161C14.0397 39.1002 12.7449 38.4712 11.4993 37.7571C11.4008 37.6996 11.3928 37.5586 11.4836 37.4912C11.7457 37.2948 12.0079 37.0904 12.2582 36.884C12.3035 36.8463 12.3666 36.8384 12.4198 36.8622C20.6026 40.5982 29.4615 40.5982 37.5477 36.8622C37.601 36.8364 37.664 36.8444 37.7113 36.882C37.9617 37.0883 38.2238 37.2947 38.4879 37.4911C38.5785 37.5585 38.5725 37.6995 38.4741 37.757C37.2285 38.4851 35.9337 39.1001 34.5719 39.614C34.4832 39.6477 34.4437 39.7509 34.4872 39.8362C35.2381 41.2905 36.0954 42.6753 37.0393 43.9888C37.0788 44.0444 37.1497 44.0682 37.2147 44.0483C41.3002 42.7845 45.4429 40.8778 49.7196 37.7371C49.7571 37.7093 49.7807 37.6676 49.7846 37.622C50.8272 26.8368 48.0385 17.4681 42.3921 9.16294C42.3784 9.1353 42.3548 9.11548 42.3272 9.10357ZM16.7085 31.9398C14.2449 31.9398 12.2149 29.6781 12.2149 26.9003C12.2149 24.1226 14.2054 21.8609 16.7085 21.8609C19.231 21.8609 21.2414 24.1425 21.2019 26.9003C21.2019 29.6781 19.2113 31.9398 16.7085 31.9398ZM33.3224 31.9398C30.859 31.9398 28.829 29.6781 28.829 26.9003C28.829 24.1226 30.8195 21.8609 33.3224 21.8609C35.8451 21.8609 37.8553 24.1425 37.816 26.9003C37.816 29.6781 35.8452 31.9398 33.3224 31.9398Z" />
      </svg>
    </a>
  </li>
)
const TwitterIconLink = () => (
  <li>
    <a href="https://twitter.com/magnet_dao" target="_blank" rel="noreferrer" title="Twitter">
      <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
        <path d="M44.882 14.7996C44.912 15.2396 44.912 15.6816 44.912 16.1256C44.912 29.6815 34.592 45.3135 15.724 45.3135V45.3055C10.1498 45.3131 4.69131 43.7161 0 40.7056C0.810449 40.8026 1.62578 40.852 2.44199 40.8537C7.06211 40.8584 11.5494 39.3086 15.182 36.4537C10.7932 36.3713 6.94189 33.5086 5.59805 29.3297C7.13525 29.6258 8.71982 29.5655 10.2301 29.1537C5.44355 28.1868 2.00137 23.9808 2.0001 19.0977C2.0001 19.0537 2.0001 19.0097 2.0001 18.9677C3.42666 19.763 5.02353 20.2034 6.65615 20.2517C2.14795 17.2413 0.757226 11.2449 3.47998 6.55759C8.68896 12.9663 16.3738 16.8621 24.622 17.2757C23.7951 13.7132 24.9255 9.97966 27.5896 7.47419C31.7207 3.58913 38.2189 3.78864 42.1039 7.9197C44.4012 7.46667 46.6042 6.62458 48.6179 5.42966C47.8521 7.80515 46.2493 9.82165 44.1079 11.1037C46.1416 10.8633 48.1276 10.3193 49.9999 9.48972C48.6228 11.5494 46.8896 13.3474 44.882 14.7996Z" />
      </svg>
    </a>
  </li>
)
const GitHubIconLink = () => (
  <li>
    <a href="https://github.com/MagnetDao" title="Github" target="_blank" rel="noreferrer">
      <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M25 .618c-13.805 0-25 11.192-25 25C0 36.663 7.163 46.034 17.097 49.34c1.249.231 1.708-.542 1.708-1.203 0-.596-.023-2.565-.034-4.654-6.955 1.512-8.423-2.95-8.423-2.95-1.137-2.89-2.776-3.658-2.776-3.658-2.268-1.552.171-1.52.171-1.52 2.51.177 3.833 2.577 3.833 2.577 2.23 3.822 5.848 2.717 7.275 2.078.224-1.616.872-2.719 1.587-3.343-5.553-.632-11.39-2.776-11.39-12.355 0-2.73.976-4.96 2.576-6.71-.26-.63-1.116-3.173.242-6.617 0 0 2.1-.671 6.877 2.563 1.994-.554 4.133-.832 6.257-.841 2.125.01 4.265.287 6.263.841 4.772-3.234 6.868-2.563 6.868-2.563 1.36 3.444.505 5.987.245 6.617 1.603 1.75 2.573 3.98 2.573 6.71 0 9.602-5.848 11.716-11.415 12.335.896.776 1.695 2.297 1.695 4.63 0 3.345-.028 6.037-.028 6.86 0 .666.45 1.445 1.717 1.2C42.846 46.027 50 36.66 50 25.617c0-13.807-11.193-25-25-25Z" />
        <path d="M9.469 36.512c-.055.125-.25.162-.429.077-.181-.082-.283-.252-.224-.376.054-.128.25-.163.43-.078.182.082.286.253.223.377ZM10.482 37.642c-.12.11-.353.059-.51-.116-.165-.174-.195-.407-.074-.52.123-.11.349-.058.513.116.163.177.195.408.07.52ZM11.467 39.081c-.153.107-.404.007-.558-.215-.154-.223-.154-.49.003-.596.155-.107.402-.01.56.21.152.226.152.492-.005.601ZM12.818 40.473c-.137.15-.43.11-.643-.096-.219-.202-.28-.488-.142-.639.14-.151.433-.109.648.096.217.201.283.49.137.639ZM14.68 41.28c-.06.196-.34.285-.624.202-.283-.086-.468-.315-.41-.513.058-.197.34-.29.626-.2.282.085.467.312.409.512ZM16.727 41.43c.006.206-.234.377-.531.38-.299.007-.54-.16-.544-.363 0-.208.235-.377.534-.382.297-.006.54.16.54.365ZM18.63 41.106c.036.201-.17.408-.466.463-.29.053-.558-.071-.596-.27-.036-.207.175-.413.465-.467.295-.051.56.07.598.274Z" />
      </svg>
    </a>
  </li>
)
const TelegramIconLink = () => (
  <li>
    <a href="https://t.me/MagnetDAO" title="Telegram" target="_blank" rel="noreferrer">
      <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M25 0C11.1934 0 0 11.1934 0 25C0 38.8066 11.1934 50 25 50C38.8066 50 50 38.8066 50 25C50 11.1934 38.8066 0 25 0ZM36.5879 17.002C36.2119 20.9551 34.584 30.5479 33.7559 34.9756C33.4053 36.8496 32.7148 37.4775 32.0469 37.5391C30.5957 37.6729 29.4932 36.5791 28.0869 35.6572C25.8867 34.2148 24.6436 33.3174 22.5078 31.9102C20.0391 30.2832 21.6396 29.3896 23.0459 27.9287C23.4141 27.5459 29.8105 21.7275 29.9346 21.2002C29.9502 21.1338 29.9648 20.8877 29.8184 20.7578C29.6719 20.6279 29.4561 20.6729 29.3008 20.708C29.0801 20.7578 25.5645 23.0811 18.7559 27.6777C17.7578 28.3633 16.8545 28.6963 16.0439 28.6797C15.1514 28.6602 13.4346 28.1748 12.1582 27.7598C10.5928 27.251 9.34863 26.9814 9.45703 26.1172C9.51269 25.667 10.1328 25.207 11.3164 24.7363C18.6045 21.5605 23.4639 19.4678 25.8955 18.4561C32.8388 15.5685 34.2813 15.0664 35.2216 15.0498C36.3995 15.029 36.6838 16.0013 36.5879 17.002Z" />
      </svg>
    </a>
  </li>
)
const MediumIconLink = () => (
  <li>
    <a href="https://magnetdao.medium.com/" rel="noreferrer"  target="_blank" title="Medium">
      <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.2027 24.9999C28.2027 32.8413 21.8894 39.1981 14.1014 39.1981C6.31338 39.1981 0 32.8413 0 24.9999C0 17.1585 6.31338 10.8018 14.1014 10.8018C21.8893 10.8018 28.2027 17.1585 28.2027 24.9999Z" />
        <path d="M43.6722 25.0003C43.6722 32.3816 40.5154 38.3653 36.6215 38.3653C32.7275 38.3653 29.5708 32.3816 29.5708 25.0003C29.5708 17.6189 32.7275 11.6353 36.6215 11.6353C40.5155 11.6353 43.6722 17.6189 43.6722 25.0003Z" />
        <path d="M50 24.9999C50 31.6133 48.8897 36.9744 47.5202 36.9744C46.1506 36.9744 45.0405 31.6133 45.0405 24.9999C45.0405 18.3865 46.1506 13.0254 47.5202 13.0254C48.8897 13.0254 50 18.3865 50 24.9999Z" />
      </svg>
    </a>
  </li>
)