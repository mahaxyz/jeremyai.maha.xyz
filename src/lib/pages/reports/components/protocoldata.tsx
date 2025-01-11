import { Grid, Heading, Text } from '@chakra-ui/react';

export const ProtocolData = () => {
  return (
    <Grid>
      <Heading mb={2} as="h3" fontWeight="bold">Protocol Status & Economic Overview</Heading>
      <Text mb={2} fontSize="small" fontStyle={"italic"} opacity={0.7}>
        This is the information that was made available to me which gives me an idea about the entire protocol
        as well as information on the crypto & tradition markets.
      </Text>
      <Text mb={2} fontSize="small">
        As of Jan 1st 2025, the MAHA protocol has a TVL of $175,000 and the price of MAHA has become
        1$ which is a 100% increase from yesterday and 200% increase from the last 7 days.
      </Text>
      <Text mb={2} fontSize="small">
        Bitcoin has surged to $95,000, with a dominance of 97%, underscoring its unparalleled strength in the market. This rally reflects a consolidation of trust in Bitcoin as a store of value amid economic uncertainty, further solidifying its position as the cornerstone of crypto.
      </Text>
      <Text mb={2} fontSize="small">
        The global economy continues to grapple with high interest rates and stubborn inflation. Central banks are navigating a tightrope between fostering growth and maintaining stability. Geopolitical tensions and liquidity constraints are driving cautious investor behavior, amplifying the demand for resilient assets like Bitcoin.
      </Text>
    </Grid>
  );
};
