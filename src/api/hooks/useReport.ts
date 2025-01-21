'use client';

import { useState, useEffect, useCallback } from 'react';
import { getReport, IReport } from '../reports';

const useReport = (id: string | null) => {
  const [report, setReport] = useState<IReport | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchLatestReports = useCallback(async () => {
    if (!id) return;
    setLoading(true);
    try {
      const reports = await getReport(id);
      setReport(reports);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchLatestReports();
  }, [fetchLatestReports]);

  return { report, loading };
};

export default useReport;
