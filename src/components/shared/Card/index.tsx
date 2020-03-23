
import React ,{useEffect}from "react";
import {Text} from "../Text"
import {CardWrapper,NextImg} from './styled'
import next from '../../../assets/icons/right-arrow.png'
interface Props {
  title: string;
  subTitle: string;
  imgSrc: string;
  onNext?:any ;
}

const Card: React.FC<Props> = ({
  title,
  subTitle,
  imgSrc,
  onNext
}) => {

useEffect(()=>{

},[])
  return (
    <CardWrapper>
      {!!imgSrc&&<img src={imgSrc} alt="logo" />}
      <span>
      <Text value={title} />
      <Text value={subTitle} />
      </span>
      {!!onNext&&<NextImg onClick={()=>{onNext()}} src={next}/>}
    </CardWrapper>
  );
};

export default Card;
