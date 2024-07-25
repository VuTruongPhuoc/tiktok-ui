import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <>
            <div className={cx('wrapper')}>
                <img
                    className={cx('avatar')}
                    src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/daabb3492fb60065fb43903c6239cd39~c5_300x300.webp?lk3s=a5d48078&nonce=58502&refresh_token=f93c17b7059b9d4768ba041d8ee81a5e&x-expires=1722074400&x-signature=zle%2F9MCwfHmzmfqhhz006F5I2qs%3D&shp=a5d48078&shcp=c1333099"
                    alt="Hoa"
                />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>Vu Truong Phuoc</span>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </h4>
                    <span className={cx('username')}>phuoc</span>
                </div>
            </div>
        </>
    );
}

export default AccountItem;
