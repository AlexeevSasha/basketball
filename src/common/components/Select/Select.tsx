import {FC} from 'react';
import Select, {StylesConfig} from 'react-select';
import styled from "styled-components";


export interface IOption {
    value: string | number;
    label: string;
}


export interface ISelectProps {
    options: IOption[]
    isMulti?: boolean;
    pagesSize?: boolean;
    defaultValue?: IOption;
    onChange?: any;
    menuPlacement?: 'top';
    value?: IOption;
    error?: string;
    id?: string;
    label?: string;
}

export const Selects: FC<ISelectProps> = ({
                                              options,
                                              isMulti,
                                              pagesSize,
                                              defaultValue,
                                              onChange,
                                              menuPlacement,
                                              value,
                                              error, id, label, ...rest
                                          }) => {
    return (
        <div>
            {label && <LabelStyle htmlFor={id}>{label}</LabelStyle>}
            <Select
                inputId={id}
                styles={customStyles}
                value={value}
                menuPlacement={menuPlacement}
                classNamePrefix="Select"
                isMulti={isMulti}
                options={options}
                defaultValue={defaultValue}
                onChange={onChange}
                {...rest}
            />
            {error ? <ErrorStyle>{error}</ErrorStyle> : ''}
        </div>
    );
};

const LabelStyle = styled.label`
  color: ${({theme}) => theme.colors.grey};
  font-size: 14px;
  display: block;
  margin-bottom: 5px;
`

const ErrorStyle = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.lightestRed};
  margin-top: 4px;
`

export const customStyles: StylesConfig<IOption> = {
    container: (styles,) => ({
        ...styles,
        maxWidth: '768px',
        width: '100%',
    }),
    control: (styles, {isFocused, isMulti}) => ({
        ...styles,
        backgroundColor: isMulti ? "white" : '#F6F6F6',
        borderColor: "#D1D1D1",
        cursor: "pointer",
        padding: `1px`,
        border: isFocused ? 0 : 0,
        height: '40px',
        boxShadow: isFocused ? 'none' : 'none',
        ":hover": {
            color: "#FFFFFF",
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)'
        },
    }),
    option: (styles, {isSelected}) => ({
        ...styles,
        backgroundColor: isSelected ? "#C60E2E" : '',
        color: isSelected ? "#FFFFFF" : "#9C9C9C",
        cursor: "pointer",
        transition: "all 0.05s linear",
        ":hover": {
            backgroundColor: "#FF5761",
            color: "#FFFFFF",
        },
    }),

    multiValue: (styles) => ({
        ...styles,
        backgroundColor: '#E4163A',
        color: "#FFFFFF",
        borderRadius: 4,
    }),

    multiValueLabel: (styles) => ({
        ...styles,
        color: "#FFFFFF",
    }),
    multiValueRemove: (styles) => ({
        ...styles,
        color: "#FFFFFF",
        transition: "all 0.05s linear",
        ":hover": {
            backgroundColor: "#FF768E",
            color: "#FFFFFF",
        },
    }),
}


