/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { observer } from "mobx-react"
import { useMst } from "../../models/Root";

import Card from "../shared/Card"
import {ListWrapper} from "./styled"
import {SideText} from '../shared/Text';

interface Props { }
interface Item{
  id:string
}
const List: React.FC<Props> = observer((props) => {
  const { tracksList } = useMst();

  return (
    <ListWrapper >
     <SideText> {`${'total list :'+tracksList.list.length}`}</SideText>
      {tracksList.list.map((item,index) => {
        return (<Card  key={index}  title={item.track.artists[0].name} subTitle={item.track.artists[0].type} imgSrc={''} />)
      })}
    </ListWrapper>
  );

});

export default List;
