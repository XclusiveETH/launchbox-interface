import { axiosInstance } from '@/utils/axios';

type IIncentive = {
  fetchSystemIncentiveChannels: () => Promise<GetSystemIncentiveChannels[]>;
  fetchTokenIncentives: (tokenId: string) => Promise<GetTokenIncentives>;
  activateIncentive: (id: string, data: ActivateIncentiveProps) => Promise<ActivateIncentiveResponse>;
  deleteIncentive: (id: string, data: DeleteIncentiveProps) => Promise<ActivateIncentiveResponse>;
};

const incentive: IIncentive = {
  fetchSystemIncentiveChannels: async (): Promise<GetSystemIncentiveChannels[]> => {
    const response = await axiosInstance.get(`launchbox/incentive_channels`);

    return response.data;
  },

  fetchTokenIncentives: async (tokenId: string): Promise<GetTokenIncentives> => {
    const response = await axiosInstance.get(`launchbox/tokens/${tokenId}/ranking`);

    return response.data?.data;
  },

  activateIncentive: async (id: string, data: ActivateIncentiveProps): Promise<ActivateIncentiveResponse> => {
    const response = await axiosInstance.post(`launchbox/tokens/${id}/incentives`, data);

    return response.data;
  },

  deleteIncentive: async (id: string, data: DeleteIncentiveProps): Promise<ActivateIncentiveResponse> => {
    const response = await axiosInstance.delete(`launchbox/tokens/${id}/incentives`, { data });

    return response.data;
  },
};

export default incentive;
