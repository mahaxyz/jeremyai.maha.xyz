import { Grid, Heading, Text } from '@chakra-ui/react';

export const Career = () => {
  return (
    <Grid>
      <Heading mb={2} as="h3" fontWeight="bold">Biography</Heading>
      <Text fontSize="small">
        Jeremy Powell is a visionary DeFi strategist who discovered MahaDAO during his deep dive
        into decentralized finance&apos;s most promising projects. Inspired by its mission to create
        value-stable currencies and empower financial freedom, Jeremy took on the mandate to
        lead its growth.
      </Text>
      <br />
      <Text fontSize="small">
        Jeremy&apos;s core mission is to analyze growth
        opportunities and craft strategies that make $MAHA and $ZAI holders financially
        independent while solidifying MahaDAO&apos;s position as a DeFi powerhouse.
      </Text>
    </Grid>
  );
};
