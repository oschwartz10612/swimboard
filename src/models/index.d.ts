import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Lane {
  readonly id: string;
  readonly currentOccupant?: string | null;
  readonly currentScore?: string | null;
  constructor(init: ModelInit<Lane>);
  static copyOf(source: Lane, mutator: (draft: MutableModel<Lane>) => MutableModel<Lane> | void): Lane;
}