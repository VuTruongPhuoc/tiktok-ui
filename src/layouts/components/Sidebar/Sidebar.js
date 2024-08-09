import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    MapIcon,
    MapActiveIcon,
    UserExitIcon,
    UseExitActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import config from '~/config';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function SideBar() {
    const image = () => {
        return (
            <Image
                className={cx('user-avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/99095e17a41c7bb3ea3bd5cb262b0938.jpeg?lk3s=a5d48078&nonce=16153&refresh_token=c9dc3e761e5392d39be05f8d14880846&x-expires=1723273200&x-signature=Ik%2FCyKYZk82HAsG2oCO8Ym2j5nA%3D&shp=a5d48078&shcp=81f88b70"
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
                        title="Following"
                        to={config.routes.following}
                        icon={
                            <div className={cx('user-exit-following')}>
                                <UserExitIcon />
                            </div>
                        }
                        iconActive={
                            <div className={cx('user-exit-following')}>
                                <UseExitActiveIcon />
                            </div>
                        }
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
            </aside>
        </>
    );
}

export default SideBar;
