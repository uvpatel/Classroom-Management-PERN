import { BaseRecord, DataProvider, GetListParams, GetListResponse } from "@refinedev/core";
import { mockSubjects } from "./constants";




export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>(
    { resource }: GetListParams
  ): Promise<GetListResponse<TData>> => {

    if (resource !== "subjects") {
      return { data: [] as TData[], total: 0 };
    }

    // handle "subjects"
    return {
      data: mockSubjects as unknown as TData[],
      total: mockSubjects.length,
    };
  },

  getOne: async () => {throw new Error('This function is not present in mock data provider')},
  create: async () => {throw new Error('This function is not present in mock data provider')},
  update: async () => {throw new Error('This function is not present in mock data provider')},
  deleteOne: async () => {throw new Error('This function is not present in mock data provider')},

  getApiUrl: () => ''
};
