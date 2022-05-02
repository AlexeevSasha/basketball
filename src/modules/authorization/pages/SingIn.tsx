import {FC} from "react";
import {SingInForm} from "../components/SingInForm";
import {SingInSvg} from "../../../common/components";
import {FlexWrapper, ImageSvg} from '../components/style'


export const SingIn: FC = () => {
    return (
        <FlexWrapper>
            <SingInForm/>
            <ImageSvg>
                <SingInSvg/>
            </ImageSvg>
        </FlexWrapper>
    )
}

