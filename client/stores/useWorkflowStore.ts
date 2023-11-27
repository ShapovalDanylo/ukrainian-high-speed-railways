import { ISearchResultData } from '@/types/trip'
import { create } from 'zustand'
import { ISelectedSeat } from '@/widgets/SelectSeats'

interface WorkflowStore {
    searchResultData: ISearchResultData[]
    setSearchResultData: (searchResultData: ISearchResultData[]) => void

    activeTrip: ISearchResultData | null
    setActiveTrip: (activeTrip: ISearchResultData | null) => void

    selectedSeats: ISelectedSeat[]
    setSelectedSeats: (selectedSeats: ISelectedSeat[]) => void
}

export const useWorkflowStore = create<WorkflowStore>()((set, get) => ({
    searchResultData: [],
    setSearchResultData: (searchResultData: ISearchResultData[]) => set({ searchResultData }),

    activeTrip: null,
    setActiveTrip: (activeTrip: ISearchResultData | null) => set({ activeTrip }),

    selectedSeats: [],
    setSelectedSeats: (selectedSeats: ISelectedSeat[]) => set({ selectedSeats })
}))