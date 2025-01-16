import { Grid, Heading, Text } from '@chakra-ui/react';

export const Decisions = () => {
  return (
    <Grid>
      <Heading mb={2} as="h3" fontWeight="bold">Decisions Made</Heading>
      <Text mb={2} fontSize="small" fontStyle={"italic"} opacity={0.7}>
        This is what I have decided to do with the information and the observations above.
      </Text>
      <Text mb={2} fontSize="small">
        I propose allocating 1,200 MAHA to the MAHA/ZAI pool, given its high TVL and robust APR, ensuring continued deep liquidity and strong returns. Next, 400 MAHA should incentivize the sZAI/ZAI pool to bolster mid-range liquidity growth. Allocating 200 MAHA to users holding ZAI further rewards stable adoption, while another 200 MAHA to the ETH/ZAI pool helps revive its lower TVL. This distribution balances immediate and long-term liquidity goals across the protocol.
      </Text>
    </Grid>
  );
};
