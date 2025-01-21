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

export const getReports = async () => {
  try {
    const response = await axios.get<IReport[]>(
      'http://localhost:5003/reports/'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching reports:', error);
    throw error;
  }
};

export const getReport = async (id: string) => {
  try {
    const response = await axios.get<IReport>(
      `http://localhost:5003/reports/${id}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching reports:', error);
    throw error;
  }
};

export default getReports;
