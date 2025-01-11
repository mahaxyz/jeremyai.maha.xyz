import { Grid, Heading, Text } from '@chakra-ui/react';

export const Notes = () => {
  return (
    <Grid>
      <Heading mb={2} as="h3" fontWeight="bold">My Observations</Heading>
      <Text mb={2} fontSize="small" fontStyle={"italic"} opacity={0.7}>
        These are the observations I have made using the information above.
      </Text>
      <Text mb={2} fontSize="small">
        The sharp 50% drop in ZAI’s liquidity across Curve, Uniswap, and Aerodrome suggests a
        combination of LPs withdrawing funds, possibly due to reduced incentives,
        better opportunities elsewhere, or concerns over ZAI’s demand or stability.
        This could also reflect broader market conditions or a temporary decline in
        user activity within ZAI’s ecosystem. Addressing these issues with targeted
        incentives can help rebuild confidence and restore liquidity.
      </Text>
    </Grid>
  );
};
