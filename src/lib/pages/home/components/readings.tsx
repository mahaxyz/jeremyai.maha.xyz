import { Grid, Heading, Link, List, Text } from '@chakra-ui/react';

export const Readings = () => {
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
      <List.Root as="ul">
        <List.Item><Link href='/report/3' color={"blue.300"}>Jan 3rd 2025</Link></List.Item>
        <List.Item><Link href='/report/2' color={"blue.300"}>Jan 2nd 2025</Link></List.Item>
        <List.Item><Link href='/report/1' color={"blue.300"}>Jan 1st 2025</Link></List.Item>
      </List.Root>
    </Grid>
  );
};
