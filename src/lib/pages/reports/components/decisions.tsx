import { Grid, Heading, Text } from '@chakra-ui/react';

export const Decisions = () => {
  return (
    <Grid>
      <Heading mb={2} as="h3" fontWeight="bold">Decisions Made</Heading>
      <Text mb={2} fontSize="small" fontStyle={"italic"} opacity={0.7}>
        This is what I have decided to do with the information and the observations above.
      </Text>
      <Text mb={2} fontSize="small">
        To address this, I’m deploying 2,000 MAHA ($1,600) strategically: 10% to
        Curve to maintain stability, 45% to Uniswap to restore ETH liquidity, and
        45% to Aerodrome to strengthen the Base ecosystem. This approach prioritizes
        the platforms with the most significant impact, ensuring an efficient use of
        resources. By incentivizing liquidity providers, coupled with targeted
        promotions and weekly monitoring, we can optimize outcomes and support
        ZAI’s recovery effectively.
      </Text>
    </Grid>
  );
};
