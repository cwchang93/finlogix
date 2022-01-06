import * as React from 'react';
import cx from 'classnames';
import { ICommonProps } from '../../utils';
import { StyledItem, StyledMenuList, StyledTitle, StyledDropDown } from './style';

export interface IDropDownProps extends ICommonProps {
    disabled?: boolean;
    visible?: boolean;
    menu?: { title: string; href: string }[];
    customMenu?: React.ReactNode[] | null;
    ifOpenMenu?: boolean;
    ulRef?: React.MutableRefObject<HTMLUListElement>;
    onChangeState?: (state: boolean) => void;
}

const ClickOutside = (ref: any, callback: () => void) => {
    function handleClickOutside(event: Event) {
        if (ref.current && !ref.current.contains(event.target)) {
            callback();
        }
    }

    React.useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
};

const DropDown: React.FC<IDropDownProps> = props => {
    const { menu, disabled = false, children, customMenu = null } = props;

    const [show, setShow] = React.useState(false);
    const [top, setTop] = React.useState(25);

    const dropdownRef = React.useRef<HTMLDivElement>(null);
    const titleRef = React.useRef<any>(null);

    ClickOutside(dropdownRef, () => setShow(false));

    React.useEffect(() => {
        const handleSetTop = () => setTop(titleRef.current.getBoundingClientRect().height);
        window.addEventListener('load', handleSetTop);
        return () => {
            window.removeEventListener('load', handleSetTop);
        };
    }, []);

    React.useEffect(() => {
        setTop(titleRef.current.getBoundingClientRect().height);
    }, [titleRef.current]);

    React.useEffect(() => {
        setShow(!!props.ifOpenMenu);
    }, [props.ifOpenMenu]);

    React.useEffect(() => {
        props.onChangeState && props.onChangeState(show);
    }, [show]);

    const renderMenu = () => {
        if (customMenu)
            return React.Children.map(customMenu, (child, i) => {
                return (
                    <StyledItem className="Item" key={`item${i}_CustomChild`}>
                        {child}
                    </StyledItem>
                );
            });
        return menu?.map((item: { title: string; href: string }, i) => {
            return (
                <StyledItem className="Item" key={`item${i}_${item.title}`}>
                    <a href={item.href}>{item.title}</a>
                </StyledItem>
            );
        });
    };

    return (
        <StyledDropDown className={cx('DropDown', 'ld-dropdown', props.className)} ref={dropdownRef} onClick={() => !disabled && setShow(!show)}>
            <StyledTitle className="Title" ref={titleRef} disabled={disabled}>
                {children}
            </StyledTitle>
            <StyledMenuList data-testid="ld-dropdownUl" className="MenuList" show={show} top={top} ref={props.ulRef}>
                {renderMenu()}
            </StyledMenuList>
        </StyledDropDown>
    );
};

DropDown.defaultProps = { disabled: false, customMenu: null };

export default DropDown;
