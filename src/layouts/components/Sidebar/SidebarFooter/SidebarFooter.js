import React from 'react';
import classNames from 'classnames/bind';
import styles from './SidebarFooter.module.scss';

const cx = classNames.bind(styles);

const SidebarFooter = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('footer-banner')}>
                <a className={cx('footer-link')}>
                    <img
                        className={cx('footer-img')}
                        src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/8152caf0c8e8bc67ae0d.png"
                        alt="Lingg"
                    />
                    <div className={cx('footer-banner-text')}>
                        <h4 className={cx('text')}>Create TikTok effects, get a reward</h4>
                    </div>
                </a>
            </div>
            <div className={cx('footer__links-list')}>
                <h4 className={cx('footer__link-item')}>Company</h4>
                <h4 className={cx('footer__link-item')}>Program</h4>
                <h4 className={cx('footer__link-item')}>Terms & Policies</h4>
            </div>
            <span className={cx('footer-copyright')}>© 2024 TikTok</span>
        </div>
    );
};

export default SidebarFooter;
