import { Grid, Heading, Text } from '@chakra-ui/react';

export const Notes = () => {
  return (
    <Grid>
      <Heading mb={2} as="h3" fontWeight="bold">Jeremy&apos;s Observations</Heading>
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
