import * as React from 'react';
import cx from 'classnames';
import { ICommonProps } from '../../utils';
import { StyledClickOutside, StyledTriggers, StyledWindows } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const ToggleContext = React.createContext({} as { on: boolean | undefined; toggle: (set?: boolean) => void });

export interface IClickOutsideProps {
    defaultOpen?: boolean;
    className?: string;
    ref?: React.RefObject<HTMLDivElement>;
    onChange?: (state: boolean) => void;
    scrollClose?: boolean;
    style?: React.CSSProperties;
}
export interface ITriggerProps extends ICommonProps {
    onClick?: () => void;
    onFocus?: (data: any) => void;
    toggle?: boolean;
    children?: React.ReactNode
}
export interface IWindowProps extends ICommonProps {
    onClick?: () => void;
    closeBtn?: boolean;
    close?: boolean;
    exclude?: string[];
}

type TOutside = React.ForwardRefExoticComponent<
    React.PropsWithChildren<Pick<IClickOutsideProps, 'defaultOpen' | 'className' | 'onChange' | 'scrollClose' | 'style'> & React.RefAttributes<HTMLDivElement>>
> & {
    Trigger?: React.FC<ITriggerProps>; //觸發元件
    Window?: React.FC<IWindowProps>; //主元件
};

const ClickOutside: TOutside = React.forwardRef<HTMLDivElement, IClickOutsideProps>((props, ref) => {
    const classname = 'ClickOutside';

    const { children, defaultOpen, className, scrollClose, onChange, style } = props;
    const [dtmState, setdtmState] = React.useState<boolean | undefined>(defaultOpen || undefined);

    // const arr = children as Array<any>;
    // const simple = !(Array.isArray(arr) && arr.some((data: any) => ['Trigger', 'Window'].includes(data.type && data.type.name)));
    // console.log(simple);
    const Module_ref = React.useRef<HTMLDivElement>(null);
    const _handleClickOutside = (event: Event) => {
        if (Module_ref.current && !Module_ref.current.contains(event.target as Node)) {
            setdtmState(false);
        }
        document.removeEventListener('mousedown', _handleClickOutside);
    };

    const toggle = (set?: boolean) => {
        document.addEventListener('mousedown', _handleClickOutside);
        setdtmState(pre => {
            const state = set === undefined ? !pre : set;
            return state;
        });
    };

    React.useImperativeHandle(ref, (): any => ({
        toggle: toggle,
    }));

    const _Scroll = () => toggle(false);

    React.useEffect(() => {
        defaultOpen && document.addEventListener('mousedown', _handleClickOutside);
        if (scrollClose) {
            document.addEventListener('scroll', _Scroll);
            return () => {
                document.removeEventListener('scroll', _Scroll);
            };
        }
        return () => {
            document.removeEventListener('mousedown', _handleClickOutside);
        };
    }, []);

    React.useEffect(() => {
        if (onChange && dtmState !== undefined) {
            onChange(dtmState);
        }
    }, [dtmState]);

    // console.log((children as Array<any>).some((data: any) => ['Trigger', 'Window'].includes(data.type && data.type.name)));
    return (
        <ToggleContext.Provider
            value={{
                on: dtmState,
                toggle: toggle,
            }}
        >
            {/* {simple && !dtmState && ( */}
            <StyledClickOutside
                className={cx(classname, { [className as any]: className })}
                ref={Module_ref}
                onClick={() => {
                    document.addEventListener('mousedown', _handleClickOutside);
                }}
                style={style}
            >
                {children}
            </StyledClickOutside>
            {/* )} */}
        </ToggleContext.Provider>
    );
});

const Trigger: React.FC<ITriggerProps> = props => {
    const { children, toggle, onClick } = props;
    return (
        <ToggleContext.Consumer>
            {contextValue => (
                <StyledTriggers
                    className={cx('Trigger', 'ld-outside-trigger', props.className)}
                    onClick={() => {
                        contextValue.toggle(toggle ? undefined : true);
                        onClick && onClick();
                    }}
                // onFocus={() => contextValue.toggle(toggle ? undefined : true)}
                >
                    {children}
                </StyledTriggers>
            )}
        </ToggleContext.Consumer>
    );
};

const Window: React.FC<IWindowProps> = props => {
    const { children, closeBtn, onClick, close, exclude } = props;
    return (
        <ToggleContext.Consumer>
            {contextValue => (
                <StyledWindows
                    className={cx('Window', 'ld-outside-window', props.className, { show: contextValue.on }, { paddingRight: closeBtn })}
                    onClick={e => {
                        const { nodeName } = e.target as HTMLElement;
                        if (close) {
                            if (exclude?.every(ele => !(ele?.toLocaleUpperCase() === nodeName))) {
                                contextValue.toggle(false);
                            }
                        }
                    }}
                >
                    {closeBtn && (
                        // <Icon
                        //     type={'cross'}
                        //     className={'closeBtn'}
                        //     onClick={() => {
                        //         contextValue.toggle(false);
                        //         onClick && onClick();
                        //     }}
                        // />
                        <FontAwesomeIcon
                            icon={faTimes}
                        />
                    )}
                    {children}
                </StyledWindows>
            )}
        </ToggleContext.Consumer>
    );
};

ClickOutside.Window = Window;
ClickOutside.Trigger = Trigger;
ClickOutside.displayName = 'ClickOutside';

export default ClickOutside;
