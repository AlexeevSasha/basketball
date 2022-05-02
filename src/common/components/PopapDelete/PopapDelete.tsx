import {FC} from "react";
import styled, {keyframes} from "styled-components";
import {Button, ButtonCancel} from '../';


interface ModalProps {
    visible?: boolean;
    onClose: () => void;
    onHandlerClickYes?: () => void;
    player?: boolean
}

export const PopapDelete: FC<ModalProps> = ({visible = false, onClose, onHandlerClickYes, player}) => {
    if (!visible) return null;
    return (
        <PositionFixed onClick={onClose}>
            <Wrapper onClick={e => e.stopPropagation()}>
                <PopapTitle>{player ? 'Are you sure you want to delete this player?' : 'You definitely want to delete the command?'}</PopapTitle>
                <ButtonFlexWrapper>
                    <MarginDiv>
                        <ButtonCancel onClick={onClose}>No</ButtonCancel>
                    </MarginDiv>
                    <Button onClick={onHandlerClickYes}>Yes</Button>
                </ButtonFlexWrapper>
            </Wrapper>
        </PositionFixed>
    )
}

const MarginDiv = styled.div`
  margin-right: 24px;
  width: 100%;
`

const ButtonFlexWrapper = styled.div`
  display: flex`

const PopapTitle = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  color: ${({theme}) => theme.colors.darkGrey};

  @media ${({theme}) => theme.media._480} {
    font-size: 20px;
  }
`

const animate = keyframes`
  0% {
    transform: translateY(-150px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const PositionFixed = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);

`

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  background: white;
  position: relative;
  padding: 40px;
  margin: 0 20px;
  max-height: calc(100vh - 40px);
  text-align: left;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
  animation: ${animate} 0.5s ease;
`




