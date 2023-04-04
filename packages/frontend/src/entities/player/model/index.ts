import { create } from 'zustand'

import { PlayerColor } from '#/shared'
import { createSelectorFunctions } from '#/shared/lib/selectors'

interface IPlayerStore {
  color: PlayerColor
}

export const usePlayer = create<IPlayerStore>(() => ({
  color: 'white'
}))

export const playerSelectors = createSelectorFunctions(usePlayer)
