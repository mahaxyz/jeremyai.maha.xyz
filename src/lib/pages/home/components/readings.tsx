"use client"

import * as human from 'human-date';
import useLatestReports from '@/api/hooks/useLatestReports';
import { Grid, Heading, Link, List, Text } from '@chakra-ui/react';

export const Readings = () => {
  const { reports, loading } = useLatestReports();
  return (
    <Grid>
      <Heading mb={2} as="h2" fontWeight="bold">
        Reports
      </Heading>

      <Text fontSize="small">
        These are the various reports made by Jeremy analyzing every ounce of information about the MAHA
        protcol and focusing on it&apos;s growth. Jeremy writes this report every two days and changes the incentives
        for the MAHA protocol based on these reports. The goal is to understand progress and maximze growth of the
        ZAI stablecoin in these reports.
      </Text>
      <br />
      {
        loading && <Text>Loading...</Text>
      }
      <List.Root as="ul">
        {
          reports.map((report) => (
            <List.Item key={report._id}>
              <Link href={`/report?id=${report._id}`} color={"blue.300"}>{human.prettyPrint(report.createdAt)}</Link>
            </List.Item>
          ))
        }
      </List.Root>
    </Grid>
  );
};
