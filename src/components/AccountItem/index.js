import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <>
            <div className={cx('wrapper')}>
                <Image
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/99095e17a41c7bb3ea3bd5cb262b0938.jpeg?lk3s=a5d48078&nonce=14955&refresh_token=d1712649878bd0603b6473f0647fdf3f&x-expires=1722996000&x-signature=5oeBGS559yeFdblM3SiMM9A%2BmfA%3D&shp=a5d48078&shcp=81f88b70https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/99095e17a41c7bb3ea3bd5cb262b0938.jpeg?lk3s=a5d48078&nonce=44833&refresh_token=7116dcd085a8fc1e5735548d08996535&x-expires=1722999600&x-signature=2AGSTqacesajyY9EU383EoKZRnM%3D&shp=a5d48078&shcp=81f88b70"
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
