export interface IEngineConfig {
  // Add properties and methods as needed
}

export interface IEngineState {
  // Add properties and methods as needed
}

export interface IEngineEvent {
  type: string;
  data: any;
}

export interface IEngineMessage {
  type: string;
  data: any;
}

export interface IEngineMessageHandler {
  (message: IEngineMessage): void;
}