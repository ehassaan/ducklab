import api from './api';

export interface Connection {
  _id: string;
  name: string;
  type: string;
}

export default {
  fetchConnections: async (): Promise<Connection[]> => {
    const res = await api.get('/api/connections');
    if (res.status === 200) return res.data.data as Connection[];
    else {
      throw Error(res.data.message);
    }
  },
};
