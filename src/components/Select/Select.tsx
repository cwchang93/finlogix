import * as React from 'react';
import cx from 'classnames';
import { ICommonProps } from '../../utils';
import ClickOutside from '../ClickOutside/ClickOutside';
import { SelectSTY, OptionSTY } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


export interface ISelectProps extends ICommonProps {
    onChange?: (value: string | number) => void;
    defValue?: string | number;
    data: { text: string; value: string | number }[];
}
const { Window, Trigger } = ClickOutside;
const Select: React.FC<ISelectProps> = props => {
    const { onChange, data, defValue } = props;
    const [select, setSelect] = React.useState<any>({});
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        if (data?.length) {
            if (defValue) {
                const selectedData = data.find(item => item.value === defValue)
                setSelect(selectedData);
            } else {
                setSelect(data[0]);
            }
        }
    }, [data, defValue]);

    // React.useEffect(() => {
    //     if (select !== undefined && select.value !== defValue && onChange) {
    //         onChange(select.value);
    //     }
    // }, [select]);

    const handleSelect = (item: { text: string; value: string | number }) => {
        setSelect(item);
        if (!!onChange) {
            onChange(item.value);
        }
    };

    return (
        <SelectSTY className={cx('Select', props.className)}>
            <ClickOutside onChange={state => setOpen(state)}>
                {/* <Trigger toggle={true} className={cx({ open: open })}> */}
                <span>{select?.text}</span>
                <FontAwesomeIcon icon={faAngleDown} />
                {/* </Trigger> */}
                {/* <Window close> */}
                <OptionSTY>
                    {data.map((item, index) => {
                        return (
                            <div key={`Select_Option-${index}`} onClick={() => handleSelect(item)}>
                                {item.text}
                            </div>
                        );
                    })}
                </OptionSTY>
                {/* </Window> */}
            </ClickOutside>
        </SelectSTY>
    );
};

Select.defaultProps = {};

export default Select;
