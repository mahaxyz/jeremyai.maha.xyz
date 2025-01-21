'use client';

import { useState, useEffect, useCallback } from 'react';
import getReports, { IReport } from '../reports';

const useLatestReports = () => {
  const [reports, setReports] = useState<IReport[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchLatestReports = useCallback(async () => {
    setLoading(true);
    try {
      const reports = await getReports();
      setReports(reports);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLatestReports();
  }, [fetchLatestReports]);

  return { reports, loading };
};

export default useLatestReports;
