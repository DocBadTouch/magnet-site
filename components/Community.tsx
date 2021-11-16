import React from 'react'
import Image from 'next/image'
import logo from '../public/Logo_v2.0.png'
import globe from '../public/globe.png'
import globe3d from '../public/globe.svg'

interface CommunityProps {

}

export const Community: React.FC<CommunityProps> = ({  }) => {

   return (
    <section id="community">
    <div className="wrapper">

        <div className="col-left">
            <div className="join">
                <div className="line1">Join the</div>
                <img srcSet='../assets/img/magnet-logo-community.svg' data-srcset="../assets/img/magnet-logo-community.svg" alt="magnet" title="Magnet logo" className="line2"/>
                <div className="line3">community</div>
            </div>
        </div>

        <div className="col-right">
            <div className="flex-row">
                <div className="community-item">
                    <div className="label">Discord community</div>
                    <div className="description"><p>Consectetur adipiscing elit. Cras ullamcorper tortor dui, sed porttitor felis imperdiet vel.</p></div>
                </div>
                <div className="community-item">
                    <div className="label">Telegram community</div>
                    <div className="description"><p>Consectetur adipiscing elit. Cras ullamcorper tortor dui, sed porttitor felis imperdiet vel.</p></div>
                </div>
            </div>
            <div className="flex-row">
                <div className="community-item">
                    <div className="label">Twitter account</div>
                    <div className="description"><p>Consectetur adipiscing elit. Cras ullamcorper tortor dui, sed porttitor felis imperdiet vel.</p></div>
                </div>
                <div className="community-item">
                    <div className="label">Medium blog</div>
                    <div className="description"><p>Consectetur adipiscing elit. Cras ullamcorper tortor dui, sed porttitor felis imperdiet vel.</p></div>
                </div>
            </div>
        </div>

    </div>
</section>
   )
}
