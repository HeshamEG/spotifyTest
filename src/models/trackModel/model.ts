import { types } from "mobx-state-tree";

export const ListItem = types
    .model({
        added_at: types.string,
        added_by: types.frozen(),
        is_local: types.boolean,
        primary_color: types.frozen(),
        track: types.frozen(),
        video_thumbnail: types.frozen(),
    });
export const PlayListsPagination = types
    .model({
        list: types.optional(types.array(ListItem), []),
        id: types.string
    })