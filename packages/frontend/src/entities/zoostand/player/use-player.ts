import { create } from 'zustand'

import { PlayerColor } from '#/shared'
import { createSelectorFunctions } from '#/shared/lib/selectors'

interface IPlayerStore {
  color: PlayerColor
  togglePlayer: () => void
}

export const usePlayer = create<IPlayerStore>((set, get) => ({
  color: 'white',
  togglePlayer: () => {
    if (get().color === 'white') {
      set({ color: 'black' })
    } else {
      set({ color: 'white' })
    }
  }
}))

export const playerSelectors = createSelectorFunctions(usePlayer)
