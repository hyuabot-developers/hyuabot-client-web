import {defineStore} from 'pinia';
import {ReadingRoomItem} from 'src/models/readingRoom.item';
import {api} from 'boot/axios';
import {AxiosResponse} from 'axios';
import {useGlobalStore} from 'stores/global.store';

export type ReadingRoomState = {
  readingRoomList: ReadingRoomItem[];
}
export const useReadingRoomStore = defineStore({
  id: 'readingRoomStore',
  state: () => ({readingRoomList: []} as ReadingRoomState),
  getters: {
    getArrivalList: (state: ReadingRoomState) => {
      return (readingRoomName: string) => state.readingRoomList.filter(item => item.name === readingRoomName)
    },
  },
  actions: {
    async fetchReadingRoomList(campus: string) {
      const globalStore = useGlobalStore();
      const response: AxiosResponse<ReadingRoomItem[]> = await api.get(`/library/${campus}`)
      this.readingRoomList = response.data;
      globalStore.isLoading = false;
    },
  },
});
