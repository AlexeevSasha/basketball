import {FC} from "react";
import styled from "styled-components";
import {CreateIcon, DeleteIcon, BreadCrumbs} from "../";

interface IProps {
    onDelete?: () => void;
    onEdit?: () => void;
}

export const HeaderCardInfo: FC<IProps> = ({onDelete, onEdit}) => {
    return (
        <HeaderCard>
            <BreadCrumbs/>
            <WrapperButton>
                <Button>
                    <ImgButton onClick={onEdit}><CreateIcon/></ImgButton>
                    <ImgButton onClick={onDelete}><DeleteIcon/></ImgButton>
                </Button>
            </WrapperButton>
        </HeaderCard>
    )
}

const HeaderCard = styled.div`
  width: 100%;
  background: white;
  border-radius: 10px 10px 0 0;
  border: 0.5px solid ${({theme}) => theme.colors.lightGrey};
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const WrapperButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 32px;
  @media (max-width: 768px) {
    margin-right: 16px;
  }
`
const Button = styled.div`
  background: transparent;
  border: none;
`
const ImgButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  width: 24px;
  margin-left: 24px;

  & > svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 768px) {
    margin-left: 16px;
    width: 20px;
    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`


