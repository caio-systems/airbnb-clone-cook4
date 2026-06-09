export interface GuestCount {
  adults: number
  children: number
  infants: number
  pets?: number
}

export interface SearchParams {
  location: string
  checkIn: string
  checkOut: string
  guests: GuestCount
}

export interface SearchBarProps {
  onSearch?: (params: SearchParams) => void
  className?: string
  initialValues?: Partial<SearchParams>
}

export interface GuestSelectorProps {
  guests: GuestCount
  onGuestChange: (guests: GuestCount) => void
  onClose: () => void
}

export interface DateRange {
  start: string
  end: string
}
