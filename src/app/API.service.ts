/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateLane: OnCreateLaneSubscription;
  onUpdateLane: OnUpdateLaneSubscription;
  onDeleteLane: OnDeleteLaneSubscription;
};

export type CreateLaneInput = {
  id?: string | null;
  currentOccupant?: string | null;
  currentScore?: string | null;
  _version?: number | null;
};

export type ModelLaneConditionInput = {
  currentOccupant?: ModelStringInput | null;
  currentScore?: ModelStringInput | null;
  and?: Array<ModelLaneConditionInput | null> | null;
  or?: Array<ModelLaneConditionInput | null> | null;
  not?: ModelLaneConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Lane = {
  __typename: "Lane";
  id: string;
  currentOccupant?: string | null;
  currentScore?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateLaneInput = {
  id: string;
  currentOccupant?: string | null;
  currentScore?: string | null;
  _version?: number | null;
};

export type DeleteLaneInput = {
  id: string;
  _version?: number | null;
};

export type ModelLaneFilterInput = {
  id?: ModelIDInput | null;
  currentOccupant?: ModelStringInput | null;
  currentScore?: ModelStringInput | null;
  and?: Array<ModelLaneFilterInput | null> | null;
  or?: Array<ModelLaneFilterInput | null> | null;
  not?: ModelLaneFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelLaneConnection = {
  __typename: "ModelLaneConnection";
  items: Array<Lane | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type CreateLaneMutation = {
  __typename: "Lane";
  id: string;
  currentOccupant?: string | null;
  currentScore?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateLaneMutation = {
  __typename: "Lane";
  id: string;
  currentOccupant?: string | null;
  currentScore?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteLaneMutation = {
  __typename: "Lane";
  id: string;
  currentOccupant?: string | null;
  currentScore?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type SyncLanesQuery = {
  __typename: "ModelLaneConnection";
  items: Array<{
    __typename: "Lane";
    id: string;
    currentOccupant?: string | null;
    currentScore?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetLaneQuery = {
  __typename: "Lane";
  id: string;
  currentOccupant?: string | null;
  currentScore?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListLanesQuery = {
  __typename: "ModelLaneConnection";
  items: Array<{
    __typename: "Lane";
    id: string;
    currentOccupant?: string | null;
    currentScore?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreateLaneSubscription = {
  __typename: "Lane";
  id: string;
  currentOccupant?: string | null;
  currentScore?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateLaneSubscription = {
  __typename: "Lane";
  id: string;
  currentOccupant?: string | null;
  currentScore?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteLaneSubscription = {
  __typename: "Lane";
  id: string;
  currentOccupant?: string | null;
  currentScore?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateLane(
    input: CreateLaneInput,
    condition?: ModelLaneConditionInput
  ): Promise<CreateLaneMutation> {
    const statement = `mutation CreateLane($input: CreateLaneInput!, $condition: ModelLaneConditionInput) {
        createLane(input: $input, condition: $condition) {
          __typename
          id
          currentOccupant
          currentScore
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateLaneMutation>response.data.createLane;
  }
  async UpdateLane(
    input: UpdateLaneInput,
    condition?: ModelLaneConditionInput
  ): Promise<UpdateLaneMutation> {
    const statement = `mutation UpdateLane($input: UpdateLaneInput!, $condition: ModelLaneConditionInput) {
        updateLane(input: $input, condition: $condition) {
          __typename
          id
          currentOccupant
          currentScore
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateLaneMutation>response.data.updateLane;
  }
  async DeleteLane(
    input: DeleteLaneInput,
    condition?: ModelLaneConditionInput
  ): Promise<DeleteLaneMutation> {
    const statement = `mutation DeleteLane($input: DeleteLaneInput!, $condition: ModelLaneConditionInput) {
        deleteLane(input: $input, condition: $condition) {
          __typename
          id
          currentOccupant
          currentScore
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteLaneMutation>response.data.deleteLane;
  }
  async SyncLanes(
    filter?: ModelLaneFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncLanesQuery> {
    const statement = `query SyncLanes($filter: ModelLaneFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncLanes(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            currentOccupant
            currentScore
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncLanesQuery>response.data.syncLanes;
  }
  async GetLane(id: string): Promise<GetLaneQuery> {
    const statement = `query GetLane($id: ID!) {
        getLane(id: $id) {
          __typename
          id
          currentOccupant
          currentScore
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetLaneQuery>response.data.getLane;
  }
  async ListLanes(
    filter?: ModelLaneFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListLanesQuery> {
    const statement = `query ListLanes($filter: ModelLaneFilterInput, $limit: Int, $nextToken: String) {
        listLanes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            currentOccupant
            currentScore
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListLanesQuery>response.data.listLanes;
  }
  OnCreateLaneListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateLane">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateLane {
        onCreateLane {
          __typename
          id
          currentOccupant
          currentScore
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateLane">>
  >;

  OnUpdateLaneListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateLane">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateLane {
        onUpdateLane {
          __typename
          id
          currentOccupant
          currentScore
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateLane">>
  >;

  OnDeleteLaneListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteLane">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteLane {
        onDeleteLane {
          __typename
          id
          currentOccupant
          currentScore
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteLane">>
  >;
}
