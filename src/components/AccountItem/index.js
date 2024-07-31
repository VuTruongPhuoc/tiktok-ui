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
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/99095e17a41c7bb3ea3bd5cb262b0938.jpeg?lk3s=a5d48078&nonce=36379&refresh_token=a5fcc1024ef73e5d16c5072af2281270&x-expires=1722589200&x-signature=Uz8Izc9WQbRgKdqC8bjEQtA4EbE%3D&shp=a5d48078&shcp=81f88b70"
                    alt="Hoa"
                />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>hoaa.hanassii</span>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </h4>
                    <span className={cx('username')}>daolephuonghoa</span>
                </div>
            </div>
        </>
    );
}

export default AccountItem;
