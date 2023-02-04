import { Weather, Visibility } from './enums'

export interface NonSensitiveInfoDiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
}

export interface DiaryEntry extends NonSensitiveInfoDiaryEntry {
  comment: string
}

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
