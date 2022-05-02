import {FC, InputHTMLAttributes} from "react";
import styled from "styled-components";
import {SearchIcon} from "../SVGConstans/SVG";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search: FC<Props> = ({onChange, ...attr}) => {
    return (
        <SearchWrapper>
            <InputStyle
                type="search"
                placeholder="Search..."
                onChange={onChange}
                {...attr}
            />
            <IconStyle> <SearchIcon/></IconStyle>
        </SearchWrapper>
    );
};


const SearchWrapper = styled.div`
  position: relative;
  display: inline;
  max-width: 365px;
  width: 100%;
  @media ${({theme}) => theme.media._768} {
    max-width: none;
  }
`
const InputStyle = styled.input`
  max-width: 365px;
  width: 100%;
  height: 40px;
  background: white;
  border: 1px solid ${({theme}) => theme.colors.lightestGrey};
  border-radius: 4px;
  padding: 0 30px 0 12px;
  @media ${({theme}) => theme.media._768} {
    max-width: none;
  }
`

const IconStyle = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  right: 10px;
  height: 16px;
  top: 50%;
  cursor: pointer;
  transform: translateY(-50%);



`

