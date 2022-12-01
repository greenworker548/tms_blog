import React from 'react'

import './Footer.scss'

interface FooterType {
  className?: string
}

export const Footer = ({ className }: FooterType) => {
    return (
        <footer className={`footer--${className}`}>
            <div className='wrapper'>
                <div className='footer__body'>
                    <span>©2022 Blogfolio</span>
                    <span>All rights reserved</span>
                </div>
            </div>
        </footer>
    )
}
