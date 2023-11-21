import { create } from 'zustand'
import { FlyModel } from '../model/fly.model';



interface AppState {
  flies: FlyModel[]
  createFly: (fly: FlyModel) => void;
  removeFly: (fly: FlyModel) => void;
}

export const useStore = create<AppState>((set) => ({
  flies: [],
  createFly: (fly: FlyModel) => set((state: AppState) => ({ ...state, flies: [...state.flies, fly] })),
  removeFly: (fly: FlyModel) => set((state: AppState) => ({ ...state, flies: state.flies.filter(f => f.id !== fly.id) })),
}))