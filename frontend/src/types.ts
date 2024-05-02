/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Forms
 */
interface FormDataUsername {
  username: string
}
interface CreateCampaignInputs {
  campaign: string
}
interface EditCampaignInputs {
  campaign: string
  status: string
}
interface FormDataText {
  text?: string
}
interface PointOfInterestText {
  text?: string
  parent?: string
}
interface PointOfInterestInputs {
  text: string
  parent: string
  type: string
}
/**
 * API
*/
interface UserInfoDTO {
  username: string | null
  player: { characters: number }
  master: { campaigns: number }
}
interface UsernameBody {
  username: string
}
interface UsernameDTO {
  username: string
}
interface CampaignInfoDTO {
  id: number
  name: string
  groups: number
  status: CampaignStatus
}
type CampaignsDTO = CampaignInfoDTO[]
interface CharacterInfo {
  name: string
  level: number
  class: string // migliora con enum
  img: string
}
type CharactersDTO = CharacterInfo[]
interface CreateCampaignBody {
  name: string
}
interface EditCampaignBody {
  name: string
  status: CampaignStatus
}
interface CampaignGroupDTO {
  id: number
  name: string
}
interface CampaignPlaceOfInterestDTO {
  id: number
  name: string
  place: PlacesOfInterestType
  description: string
  parent: number | null
  children: number[]
}
interface CampaignDTO {
  id: number
  name: string
  description: string
  plot: string
  placesOfInterest: PlacesOfInterestDTO
  groups: CampaignGroupDTO[]
}
interface UpsertDescriptionBody {
  description: string
}
interface UpsertPlotBody {
  plot: string
}
interface PlacesOfInterestDTO {
  points: CampaignPlaceOfInterestDTO[]
  roots: number[]
}
interface UpdatePoiNameBody {
  name: string
}
interface CreatePoiBody {
  name: string
  parent: string | null
  type: string
}
interface UpdatePoiBody {
  description: string
  parent: string | null
}
/**
 * Redux
 */
type Status = 'success' | 'idle' | 'error' | 'loading'
interface State {
  userInfo: UserStore
  masterInfo: MasterStore
  playerInfo: PlayerStore
}
interface UserStore {
  user: User
  isUserLogged: boolean
  errorMessage: string
  token: string
  userInfo: UserInfo
  authStatus: Status
  userInfoStatus: Status
  usernameStatus: Status
}
interface User {
  picture: string
  email: string
  familyName: string
  givenName: string
  hd: string
  id: string
  locale: string
  name: string
  verifiedEmail: boolean
}
interface PlayerStore {
  characters: Characters
  charactersInfoStatus: Status
  errorMessage: string
}
interface MasterStore {
  campaigns: Campaigns
  campaign: Campaign
  campaignsInfoStatus: Status
  errorMessage: string
  campaignInfoStatus: Status
}
interface Authenticated {
  token: string
}
interface UserInfo {
  username: Username['username']
  player: { characters: number }
  master: { campaigns: number }
}
interface Username {
  username: string | null
}
interface CampaignListItem {
  id: number
  name: string
  groups: number
  status: CampaignStatus
}
type Campaigns = CampaignListItem[]
interface Character {
  name: string
  level: number
  class: string // migliora con enum
  img: string
}
type Characters = Character[]
type CampaignStatus = 'active' | 'on_hold' | 'ended'
type PlacesOfInterestType = 'world' | 'continent' | 'region' | 'area' | 'city' | 'camp' | 'neighborhood' | 'point'
interface Campaign {
  id: number
  name: string
  description: string
  plot: string
  placesOfInterest: PlacesOfInterest
  groups: CampaignGroupDTO[]
}
interface PlacesOfInterest {
  points: Record<number, PlaceOfInterestPoint>
  roots: number[]
}
interface PlaceOfInterestPoint {
  name: string
  place: PlacesOfInterestType
  description: string
  parent: number | null
  children: number[]
}
/**
 * Utils
 */
interface WithChildren {
  children?: React.ReactNode
}
interface Option {
  name: string
  id: string
  disabled?: boolean
}
