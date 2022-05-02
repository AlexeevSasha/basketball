import {forwardRef, useEffect, useState} from "react";
import {InputFileIcon} from "../SVGConstans/SVG";
import styled from "styled-components";
import {saveImages} from "../../../api/images/imagesServise";
import {Notification} from "../Notification/Notification";

interface IProps extends React.ComponentPropsWithoutRef<"input"> {
    listFile?: FileList | undefined | string;
    imgHandler?: any;
}


const fileControl = (file: File) => {
    return new Promise((res: (value: string) => void) => {
        const type = file.type.split('/')[1];
        if (type !== 'png' && type !== 'jpeg') {
            res('The photo only contains the format jpeg/png')
        } else if ((file.size / 1024) / 1024 > 1) {
            res('The size should not exceed 1 MB')
        } else {
            res('')
        }
    });
};

export const InputFile = forwardRef<HTMLInputElement, IProps>(({listFile, imgHandler, ...attr}, ref) => {
    const [image, setImage] = useState<string>('');
    const [errors, setErrors] = useState('')
    useEffect(() => {
        setErrors('');
        if (typeof listFile === "string") {
            setImage(listFile)
            imgHandler(listFile)
        } else if (listFile instanceof Object && listFile[0]) {
            setImage(URL.createObjectURL(listFile[0]));
            const imgUrl = async () => {
                const chekImg: string = await fileControl(listFile[0])
                if (chekImg) {
                    setErrors(chekImg)
                } else {
                    const url: string = await saveImages(listFile[0]);
                    imgHandler(url)
                }
            }
            imgUrl()
        } else setImage('')
    }, [listFile])
    return (
        <>
            <Notification error={errors}/>
            <LabelStyle>
                <IconStyle><InputFileIcon/></IconStyle>
                {image ? <ImgStyle src={image}/> : ''}
                <InputStyle type="file"   {...attr} ref={ref} accept={'image/png,image/jpeg'}/>
            </LabelStyle>
        </>
    )
})
const LabelStyle = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 340px;
  width: 100%;
  height: 240px;
  overflow: hidden;
  background: ${({theme}) => theme.colors.lightestGrey};
  border-radius: 5px;
  opacity: .7;
  cursor: pointer;
  text-align: center;
  @media ${({theme}) => theme.media._980} {
    max-width: 200px;
    height: 150px;
  }
`

const IconStyle = styled.div`
  z-index: 1;
  opacity: .7;
`

const ImgStyle = styled.img`
  position: absolute;
  z-index: 0;
  max-width: 250px;
  height: 100%;
  height: 230px;
  object-fit: contain;
  opacity: .7;
  @media ${({theme}) => theme.media._980} {
    max-width: 160px;
    max-height: 150px;

  }
`
const InputStyle = styled.input`
  display: none;
  outline: 0;
  opacity: 0;
  pointer-events: none;
  user-select: none
`