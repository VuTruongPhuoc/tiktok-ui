import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSignIn,
    faEllipsisVertical,
    faEarthAsia,
    faQuestionCircle,
    faKeyboard,
    faGear,
    faCoins,
    faUser,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import Search from '~/layouts/components/Search';
import { InboxIcon, MessagesIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import LoginModal from '~/components/LoginModal';
import { useState } from 'react';

const cx = classNames.bind(styles);

const currentUser = false;

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const [isOpenModal, setIsOpenModal] = useState(false);

    //Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //Handle logic
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    const closeModal = () => setIsOpenModal(false);
    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('logo')}>
                        <Link to={config.routes.home}>
                            <img src={images.logo.default} alt="Tiktok" />
                        </Link>
                    </div>

                    <Search />

                    <div className={cx('actions')}>
                        {currentUser ? (
                            <>
                                <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                    <div className={cx('action-btn')}>
                                        <UploadIcon />
                                    </div>
                                </Tippy>
                                <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                                    <div className={cx('action-btn')}>
                                        <MessagesIcon />
                                    </div>
                                </Tippy>
                                <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                    <div className={cx('action-btn')}>
                                        <InboxIcon />
                                        <sup className={cx('inbox-amount')}>13</sup>
                                    </div>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                <Button text>Upload</Button>
                                <Button
                                    primary
                                    leftIcon={<FontAwesomeIcon icon={faSignIn} />}
                                    onClick={() => {
                                        setIsOpenModal(true);
                                    }}
                                >
                                    Log in
                                </Button>
                                {isOpenModal && <LoginModal onClose={closeModal} />}
                            </>
                        )}
                        <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                            {currentUser ? (
                                <Image
                                    className={cx('user-avatar')}
                                    src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/99095e17a41c7bb3ea3bd5cb262b0938.jpeg?lk3s=a5d48078&nonce=80636&refresh_token=f4b2ab6d09a85ce73ef94cb05885c269&x-expires=1724245200&x-signature=BuGjqDfL9nHDbnX%2FXjPHGAfMmD8%3D&shp=a5d48078&shcp=81f88b70"
                                    alt="Hoa"
                                    fallback="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/8e01c31828aa9057d487babd27dba98e~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=56887&refresh_token=3b20c5356b041a474b21e86165f48904&x-expires=1722996000&x-signature=C0fv6FOijyYD4VJiLWTIveFsIAQ%3D&shp=a5d48078&shcp=81f88b70"
                                />
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )}
                        </Menu>
                    </div>
                </div>
            </header>
            {/* {console.log(cx('wrapper'))} */}
        </>
    );
}

export default Header;
