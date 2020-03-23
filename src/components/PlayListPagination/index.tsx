/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { observer } from "mobx-react"
import { useMst } from "../../models/Root";
import { useHistory } from "react-router-dom";

import Card from "../shared/Card"
import { ListWrapper } from "./styled"
import { SideText } from '../shared/Text';

interface Props { }
interface Item {
  id: string
}
const List: React.FC<Props> = observer((props) => {
  const { playListsPagination } = useMst();
  const history = useHistory();
  // const { track } = useParams();

  useEffect(() => {

  }, [])
  const openPlayList = (item: Item) => {
    history.push(`${'/playlist/' + item.id}`);
  }

  return (
    <ListWrapper >
      <SideText> {`${'total list :' + playListsPagination.list.length}`}</SideText>
      {playListsPagination.list.map((item , index)=> {
        return (<Card onNext={() => openPlayList(item)} key={index} title={item.name} subTitle={item.owner.display_name} imgSrc={item.images[0].url} />)
      })}
    </ListWrapper>
  );
});

export default List;
