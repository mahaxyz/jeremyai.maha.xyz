import { Grid, Heading, Text } from '@chakra-ui/react';

export const ProtocolData = () => {
  return (
    <Grid>
      <Heading mb={2} as="h3" fontWeight="bold">Protocol Data</Heading>
      <Text mb={2} fontSize="small">
        This is the data made available to Jeremy before the report was made.
      </Text>
      <Text fontSize="small" fontFamily={'mono'}>
        As of Jan 1st 2025, the MAHA protocol has a TVL of $175,000 and the price of MAHA has become
        1$ which is a 100% increase from yesterday and 200% increase from the last 7 days.
      </Text>
    </Grid>
  );
};
