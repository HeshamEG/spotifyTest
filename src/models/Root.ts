import { useContext, createContext } from "react";
import { types, Instance } from "mobx-state-tree";
import { PlayListsPagination, TracksList } from "./"

const RootModel = types.model({
  playListsPagination: PlayListsPagination,
  tracksList: TracksList
});

export const rootStore = RootModel.create({
  playListsPagination: { offset: '0', limit: '4' },
  tracksList: { id: '' }
});



export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;
export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
}
