import * as React from 'react';
import cx from 'classnames';
import { ICommonProps } from '../../utils';
import { StyledContainerDiv, StyledInputText } from './style';

export interface IInputProps extends ICommonProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'readOnly' | 'required' | 'defaultValue'> {
    autoComplete?: 'on' | 'off';
    ref?: React.MutableRefObject<HTMLInputElement>;
    value?: string;
    readonly?: boolean;
    height?: string;
    width?: string;
    label?: string;
    require?: string;
    errFunc?: (text: string) => string;
    errType?: string;
    addonBefore?: React.ReactNode;
    addonAfter?: string | React.ReactNode;
    defValue?: string;
    onChangeValidate?: (value: string) => boolean; // 讓父層判斷此次 onChange 內容是否合法，若為 false 則不執行 setInputText
    onChangeCallback?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPressEnterCallback?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Module = React.forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
    const { label, require, onChangeCallback, onPressEnterCallback, ...others } = props; // 先解構

    const value = props.value ? props.value : props.defValue || '';

    const [inputText, setInputText] = React.useState<string>(value);
    const [errMsg, setErrMsg] = React.useState<string>('');

    const addonBeforeArr = [];
    addonBeforeArr.push(props.addonBefore);
    const addonAfterArr = [];
    addonAfterArr.push(props.addonAfter);

    React.useEffect(() => {
        setInputText(value);
    }, [value]);

    return (
        <StyledContainerDiv label={props.label} className={cx('ld-input', props.className)} require={require}>
            {/* {require && label && <RequireSpan>*</RequireSpan>} */}
            {label && <label htmlFor={label}>{label}</label>}
            <div className={cx('inputWrap', { disabled: props.disabled })}>
                {/* 多包這一層是因為errMsg */}
                {addonBeforeArr}
                <StyledInputText
                    {...others}
                    ref={ref}
                    className={'input'}
                    height={props.height}
                    width={props.width}
                    value={inputText}
                    readOnly={props.readonly}
                    onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                        const currentTxt = e.target.value;
                        props.onBlur && props.onBlur(e);
                        props.errFunc && props.errType === 'onBlur' && setErrMsg(props.errFunc(currentTxt));
                    }}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const currentTxt = e.target.value;
                        let isLegal = true;
                        // 檢查新的值是否合法，若不合法則不更新 state
                        if (props.onChangeValidate) isLegal = props.onChangeValidate(currentTxt);

                        if (isLegal) {
                            props.onChange && props.onChange(e);
                            onChangeCallback && onChangeCallback(e);

                            setInputText(currentTxt);
                            props.errFunc && props.errType === 'onChange' && setErrMsg(props.errFunc(currentTxt));
                        }
                    }}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        props.onKeyDown && props.onKeyDown(e);
                        e.keyCode === 13 && onPressEnterCallback && onPressEnterCallback(e);
                    }}
                />
                {addonAfterArr}

                {errMsg ? <div className="msg">{errMsg}</div> : ''}
            </div>
        </StyledContainerDiv>
    );
});

export default Module;
