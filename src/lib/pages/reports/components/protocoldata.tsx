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

        ZAI has a total value locked (TVL) of $170k, with a stable price of $1 per token. Its daily trading volume reaches $100k. The MAHA token, priced at $0.7, sees higher trading activity with a volume of $500k. The ETH/ZAI liquidity pool holds $150k, ensuring decent market depth for trades.      </Text>
      <Text mb={2} fontSize="small">
        El Salvador’s President Bukele has announced plans to install Bitcoin nodes in every home, showcasing the country’s continued embrace of cryptocurrency. Cardano is in discussions to integrate Ripple’s RLUSD stablecoin, with confirmations from its founder. Meanwhile, the U.S. Supreme Court rejected Binance’s appeal, allowing a lawsuit to proceed. Bitcoin leads the market with a dominance of 55.5%, trading at $96,000, while the crypto market cap has climbed to an impressive $3.4 trillion.
      </Text>
      <Text mb={2} fontSize="small">
        Gold and silver remain steady as markets await U.S. inflation data, with key pivot levels holding firm. The U.S. dollar hovers near a two-year high as rate-cut expectations diminish, compounded by tariff concerns. The Australian dollar is gaining strength, supported by improved investor confidence and a corrective decline in the U.S. dollar.
      </Text>
    </Grid>
  );
};
