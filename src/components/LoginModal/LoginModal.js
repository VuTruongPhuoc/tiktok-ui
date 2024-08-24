import React from 'react';
import classNames from 'classnames/bind';
import styles from './LoginModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

const LoginModal = ({ onClose }) => {
    return (
        <div className={cx('modal')}>
            <div className={cx('modal-container')}>
                <div className={cx('modal-close')} onClick={onClose}>
                    <span>
                        <FontAwesomeIcon icon={faClose} />
                    </span>
                </div>
                <div className={cx('modal-body')}>
                    <header className={cx('modal-header')}>Log in to TikTok</header>
                    <div className={cx('modal-options-list')}>
                        <div className={cx('modal-option-item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                            <p className={cx('label')}>Use phone / email / username</p>
                        </div>
                        <div className={cx('modal-option-item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faFacebook} />
                            <p className={cx('label')}>Continue with Facebook</p>
                        </div>
                        <div className={cx('modal-option-item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faGoogle} />
                            <p className={cx('label')}> Continue with Google</p>
                        </div>
                        <div className={cx('modal-option-item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faGoogle} />
                            <p className={cx('label')}> Continue with Google</p>
                        </div>
                        <div className={cx('modal-option-item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faGoogle} />
                            <p className={cx('label')}> Continue with Google</p>
                        </div>
                        <div className={cx('modal-option-item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faGoogle} />
                            <p className={cx('label')}> Continue with Google</p>
                        </div>
                        <div className={cx('modal-option-item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faGoogle} />
                            <p className={cx('label')}> Continue with Google</p>
                        </div>
                        <div className={cx('modal-option-item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faGoogle} />
                            <p className={cx('label')}> Continue with Google</p>
                        </div>
                        <div className={cx('modal-option-item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faGoogle} />
                            <p className={cx('label')}> Continue with Google</p>
                        </div>
                    </div>
                </div>
                <div className={cx('modal-policy')}>
                    <p className={cx('policy-content')}>
                        By continuing with an account located in <a>Vietnam</a>, you agree to our{' '}
                        <a>Terms of Service</a> and acknowledge that you have read our <a>Privacy Policy</a>.
                    </p>
                </div>
                <div className={cx('modal-footer')}>
                    <p className={cx('footer-content')}>Don’t have an account?</p>
                    <a className={cx('footer-link')}>Sign up</a>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
