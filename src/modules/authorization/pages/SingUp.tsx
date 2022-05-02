import {FC} from "react";
import {SingUpForm} from "../components/SingUpForm";
import {SingUpSvg} from "../../../common/components";
import {FlexWrapper, ImageSvg} from '../components/style'

export const SingUp: FC = () => {
    return (
        <FlexWrapper>
            <SingUpForm/>
            <ImageSvg>
                <SingUpSvg/>
            </ImageSvg>
        </FlexWrapper>
    )
}

