import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/854d031a6fa50bb3892d1097ea6ee412~c5_100x100.jpeg?lk3s=a5d48078&nonce=2459&refresh_token=2e124f487d4c3b588dfc941020908ee0&x-expires=1724245200&x-signature=RsJN6hbt42oLhxQ5X%2FCplESQ6vk%3D&shp=a5d48078&shcp=81f88b70"
                    alt="Lingg"
                />
                <Button outline>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>ng_ningg</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </p>
                <p className={cx('name')}>Lingg</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
                <p className={cx('description')}>Rich, Beautiful girl</p>
            </div>
        </div>
    );
}

export default AccountPreview;
