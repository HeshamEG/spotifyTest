import { api } from '../index';


const getLists = async (limit: string, offset: string) => await api.get(`browse/featured-playlists/?${'limit=' + limit + '&offset=' + offset}`);
const getListTrack = async (playlist_id: string) => await api.get(`playlists/${playlist_id}/tracks`);



export const playlistApi = {
    getLists,
    getListTrack
}