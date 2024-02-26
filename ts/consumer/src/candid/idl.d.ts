import type { IDL } from "@dfinity/candid";
export type {
  IndexedEvent as CandidEvent,
  EventsResponse as CandidEventsResponse,
  _SERVICE as EventSinkCanister,
} from "./types";

export const idlFactory: IDL.InterfaceFactory;
