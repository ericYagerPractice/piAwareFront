/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAircraftData = /* GraphQL */ `
  query GetAircraftData($id: ID!) {
    getAircraftData(id: $id) {
      id
      data
      createdAt
      updatedAt
    }
  }
`;
export const listAircraftDatas = /* GraphQL */ `
  query ListAircraftDatas(
    $filter: ModelAircraftDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAircraftDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        data
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
