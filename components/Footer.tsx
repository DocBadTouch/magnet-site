import React from "react";
import Image from 'next/image';
import footerLogo from '../assets/img/magnet-logo.svg';
import avaxPowered from '../assets/img/powered-by-avalanche.svg';
import useIntersect from "../hooks/useIntersect";
import {SocialsNav} from './Header'
interface FooterProps {

}
export const Footer: React.FC<FooterProps> = () => {
    
    return(
    <footer >
        <div className="wrapper">
            <CallToAction  />
            <Content/>
        </div>
    </footer>
)}
const CallToAction = ({}) => { 
    return(
    <div  className="cta" >
        <div className="col-left">
            <div className="title">
                Liftoff in 3.. 2.. 1..
            </div>
        </div>
        <div className="col-right">
            <div className="btn-group">
                <a href="https://discord.gg/magnetdao" target="_blank" rel="noreferrer" className="btn btn-secondary"><span>Join Discord</span></a>
            </div>
        </div>
    </div>
)}
const Content = () => (
    <div className="content">
        <div className="col-left">
            <a href="#hero" id="logo-footer"><Image src={footerLogo} alt="Magnet DAO Logo" /></a>
            <SocialsNav/>
        </div>
        <div className="col-right">
            <a href="https://www.avax.network/" target="_blank" rel="noreferrer" id="powered-by-avalanche" title="Visit avax.network"><Image src={avaxPowered} alt="Powered by Avalanche" /></a>
        </div>
    </div>


)