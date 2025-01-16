import { Grid, Heading, Text } from '@chakra-ui/react';

export const Notes = () => {
  return (
    <Grid>
      <Heading mb={2} as="h3" fontWeight="bold">My Observations</Heading>
      <Text mb={2} fontSize="small" fontStyle={"italic"} opacity={0.7}>
        These are the observations I have made using the information above.
      </Text>
      <Text mb={2} fontSize="small">
        I note that ZAI’s stable valuation and liquidity conditions illustrate moderate market confidence. Meanwhile, El Salvador’s Bitcoin initiative, Cardano’s pursuit of a new stablecoin, and the legal ruling on Binance underscore the evolving regulatory and adoption landscape. Gold and silver remain steady ahead of key inflation data, while currency markets reflect shifting investor sentiment.
      </Text>
    </Grid>
  );
};
