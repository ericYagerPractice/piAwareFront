/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAircraftData = /* GraphQL */ `
  mutation CreateAircraftData(
    $input: CreateAircraftDataInput!
    $condition: ModelAircraftDataConditionInput
  ) {
    createAircraftData(input: $input, condition: $condition) {
      id
      data
      createdAt
      updatedAt
    }
  }
`;
export const updateAircraftData = /* GraphQL */ `
  mutation UpdateAircraftData(
    $input: UpdateAircraftDataInput!
    $condition: ModelAircraftDataConditionInput
  ) {
    updateAircraftData(input: $input, condition: $condition) {
      id
      data
      createdAt
      updatedAt
    }
  }
`;
export const deleteAircraftData = /* GraphQL */ `
  mutation DeleteAircraftData(
    $input: DeleteAircraftDataInput!
    $condition: ModelAircraftDataConditionInput
  ) {
    deleteAircraftData(input: $input, condition: $condition) {
      id
      data
      createdAt
      updatedAt
    }
  }
`;
