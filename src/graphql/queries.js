/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAircraftData7fo2gqgduzeixltfai6c3v3dhaDev = /* GraphQL */ `
  query GetAircraftData7fo2gqgduzeixltfai6c3v3dhaDev($id: String!) {
    getAircraftData7fo2gqgduzeixltfai6c3v3dhaDev(id: $id) {
      id
      data
    }
  }
`;
export const listAircraftData7fo2gqgduzeixltfai6c3v3dhaDevs = /* GraphQL */ `
  query ListAircraftData7fo2gqgduzeixltfai6c3v3dhaDevs(
    $filter: TableAircraftData7fo2gqgduzeixltfai6c3v3dhaDevFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAircraftData7fo2gqgduzeixltfai6c3v3dhaDevs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        data
      }
      nextToken
    }
  }
`;
