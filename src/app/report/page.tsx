import React, { Suspense } from 'react';
import { Report } from '@/lib/pages/reports';

const ReportPage = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Report />
    </Suspense>
);

export default ReportPage;
