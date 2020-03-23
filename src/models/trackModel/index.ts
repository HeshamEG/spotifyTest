/* eslint-disable @typescript-eslint/no-unused-expressions */
import { types, flow } from "mobx-state-tree";
import { playlistApi as playlistRequest } from '../../api';
import { ListItem } from './model';
export const TracksList = types
    .model({
        list: types.optional(types.array(ListItem), []),
        id: types.string
    })
    .actions(self => {
        function updateList(newItems: any) {
            let concatList = self.list.concat(newItems)
            let reorderList = concatList.sort((a, b) => a.track.artists[0].name.localeCompare(b.track.artists[0].name));
            let finalList: Array<any> = [];
            reorderList.map(item => finalList.filter(listItem => listItem.track.artists[0].name === item.track.artists[0].name).length === 0 && finalList.push(item))

            self.list.replace(finalList.slice())

        }

        const fetchTrack = flow(function* (id) {
            try {
                const data = yield playlistRequest.getListTrack(id);
                updateList(data.data.items);
            } catch (error) {
                console.error("Failed to fetch projects", error);
            }
            return self.list
        });
        return { fetchTrack }
    });




