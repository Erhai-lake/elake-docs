import React, { useState } from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

import BUGBoom from './BUGBoom'
import Style from './index.module.css'

let Id = 0
export default function Home() {
    const { siteConfig } = useDocusaurusContext()
    const [isRotating, setIsRotating] = useState(false)
    BUGBoom()
    const LogoClick = () => {
        if (Id === 0) {
            Id = 1
            setIsRotating(!isRotating)
        } else if (Id === 1) {
            Id = 2
            BoomAudio.play()
        } else if (Id === 2) {
            Id = 0
            setIsRotating(!isRotating)
            BoomAudio.pause()
        }
    }

    const Audio = () => {
        return (
            <audio id="BoomAudio">
                <source src="/Audio/Boom.mp3" type="audio/mpeg" />
            </audio>
        )
    }

    const Logo = () => {
        return (
            <div className={`${Style.Logo} ${isRotating ? Style.LogoRotate : ''}`} onClick={LogoClick}>
                <div></div>
                <img src='/Images/Logo.png' />
            </div>
        )
    }

    const Button = () => {
        return (
            <div className={Style.ButtonDiv}>
                <a className={Style.Button} href='/docs/ElakeDocs/UserTerms'>洱海文档</a>
                <a className={Style.Button} href='/docs/HowToAskQuestionsTheSmartWay'>提问的智慧</a>
                <a className={Style.TipButton} href='/docs/category/project'>项目文档</a>
                <a className={Style.TipButton} href='/docs/category/tutorials'>知识库</a>
            </div>
        )
    }

    return (
        <Layout
            title={siteConfig.title}
            description={siteConfig.tagline}>
            <div className={Style.Main}>
                <Audio />
                <div>
                    <Logo />
                    <p className={Style.Title}>{siteConfig.title}</p>
                    <p className={Style.Tagline}>{siteConfig.tagline}</p>
                    <ul className={Style.Ul}>
                        <li>项目说明</li>
                        <li>开发文档</li>
                        <li>脑溢血急救中心</li>
                    </ul>
                    <Button />
                </div>
            </div>
        </Layout>
    )
}
