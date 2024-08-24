import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    MapIcon,
    MapActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import config from '~/config';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import SidebarFooter from './SidebarFooter';

const cx = classNames.bind(styles);

function SideBar() {
    const image = () => {
        return (
            <Image
                className={cx('user-avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/99095e17a41c7bb3ea3bd5cb262b0938.jpeg?lk3s=a5d48078&nonce=96661&refresh_token=d62d39f90159a6e1cdb4cd5f17e1cc0e&x-expires=1724245200&x-signature=7wucZ4YvhKl9HEFxT2Q92jGPe20%3D&shp=a5d48078&shcp=81f88b70"
                alt="Hoa"
                fallback="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/8e01c31828aa9057d487babd27dba98e~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=56887&refresh_token=3b20c5356b041a474b21e86165f48904&x-expires=1722996000&x-signature=C0fv6FOijyYD4VJiLWTIveFsIAQ%3D&shp=a5d48078&shcp=81f88b70"
            />
        );
    };

    return (
        <>
            <aside className={cx('wrapper')}>
                <Menu>
                    <MenuItem
                        title="For You"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        iconActive={<HomeActiveIcon />}
                    />
                    <MenuItem
                        title="Explore"
                        to={config.routes.explore}
                        icon={<MapIcon />}
                        iconActive={<MapActiveIcon />}
                    />

                    <MenuItem
                        title="Friends"
                        to={config.routes.friends}
                        icon={<UserGroupIcon />}
                        iconActive={<UserGroupActiveIcon />}
                    />
                    <MenuItem
                        title="LIVE"
                        to={config.routes.live}
                        icon={<LiveIcon />}
                        iconActive={<LiveActiveIcon />}
                    />
                    <MenuItem title="Profile" to="/@hoaa" icon={image()} iconActive={image()}></MenuItem>
                </Menu>
                <SuggestedAccounts label="Following accounts" />
                <SuggestedAccounts label="Suggest accounts" />
                <SidebarFooter />
            </aside>
        </>
    );
}

export default SideBar;
