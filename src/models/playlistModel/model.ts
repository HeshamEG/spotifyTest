import { types } from "mobx-state-tree";
export const img = types.model({
    height: types.null,
    url: types.string,
    width: types.null,
});
export const external_urls = types.model({
    spotify: types.string
});
export const owner = types.model({
    display_name: types.string,
    external_urls: types.optional(external_urls, { spotify: '' }),
    href: types.string, id: types.string, type: types.string

});
export const tracks = types.model({
    href: types.string, total: types.number
});
export const ListItem = types
    .model({
        name: types.string,
        images: types.array(img),
        collaborative: types.boolean,
        description: types.string,
        external_urls: types.frozen(),
        href: types.string,
        id: types.string,
        owner: types.optional(owner, {
            display_name: '',
            href: '', id: '', type: ''
        }),
        primary_color: types.frozen(),
        public: types.frozen(),
        snapshot_id: types.string,
        tracks: types.frozen(),
        type: types.string,
        uri: types.string,

    });
