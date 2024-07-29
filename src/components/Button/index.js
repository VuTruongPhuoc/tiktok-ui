import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary,
    outline = false,
    disabled = false,
    rounded = false,
    text = false,
    small = false,
    large = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    onMouseUp,
    passProps,
}) {
    let Comp = 'button';

    const props = {
        onClick,
        onMouseUp,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    // Remove event listner when button is disabled
    if (disabled) {
        // delete props.onClick;
        console.log(Object.keys(props));
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        disabled,
        rounded,
        text,
        small,
        large,
    });

    return (
        <>
            <Comp className={classes} {...props}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span className={cx('title')}>{children}</span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            </Comp>
        </>
    );
}

export default Button;
