import api from './api';

export const datasetService = {
  fetchDatasets: async (connId: string) => {
    const res = await api.get('/api/connections/' + connId + '/datasets');
    if (res.status === 200) return res.data.data;
    else {
      throw Error(res.data.message);
    }
  },
};
