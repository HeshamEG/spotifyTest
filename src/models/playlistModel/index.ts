import { types, flow } from "mobx-state-tree";
import { playlistApi as playlistRequest } from '../../api';
import { ListItem } from './model';
export const PlayListsPagination = types
  .model({
    list: types.optional(types.array(ListItem), []),
    offset: types.string,
    limit: types.string
  })
  .actions(self => {
    function updateList(newItems: any) {
      let concatList = self.list.concat(newItems);
      self.list.replace(concatList.slice())
    }


    const fetchList = flow(function* () {
      try {
        self.offset = self.list.length.toString();
        const data = yield playlistRequest.getLists(self.limit, self.offset);
        updateList(data.data.playlists.items);
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
      return self.list
    });
    return { updateList, fetchList }
  })



