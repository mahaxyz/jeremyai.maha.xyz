import axios from 'axios';

export interface IReport {
  _id: string;
  overview: string;
  observations: string;
  decisions: string;
  action: [];
  createdAt: string;
  updatedAt: string;
}

// const host = 'http://localhost:5003';
const host = 'http://jeremi-api.maha.xyz';

export const getReports = async () => {
  try {
    const response = await axios.get<IReport[]>(`${host}/reports/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching reports:', error);
    throw error;
  }
};

export const getReport = async (id: string) => {
  try {
    const response = await axios.get<IReport>(`${host}/reports/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching reports:', error);
    throw error;
  }
};

export default getReports;
