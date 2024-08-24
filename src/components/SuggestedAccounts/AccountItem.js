import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (attrs) => (
        <div tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('info-popper')}>
                <AccountPreview />
            </PopperWrapper>
        </div>
    );

    return (
        <div>
            <Tippy interactive delay={[800, 300]} offset={[-20, 0]} render={renderPreview} placement="bottom-start" zIndex={9998}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/854d031a6fa50bb3892d1097ea6ee412~c5_100x100.jpeg?lk3s=a5d48078&nonce=2459&refresh_token=2e124f487d4c3b588dfc941020908ee0&x-expires=1724245200&x-signature=RsJN6hbt42oLhxQ5X%2FCplESQ6vk%3D&shp=a5d48078&shcp=81f88b70"
                        alt="Lingg"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>ng_ningg</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                        </p>
                        <p className={cx('name')}>Lingg</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
