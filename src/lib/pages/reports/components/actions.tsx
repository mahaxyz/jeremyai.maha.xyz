import { Grid, Heading, Link, List, Text } from '@chakra-ui/react';

export const Actions = () => {
  return (
    <Grid>
      <Heading mb={2} as="h3" fontWeight="bold">Actions</Heading>
      <Text mb={2} fontSize="small" fontStyle={"italic"} opacity={0.7}>
        These are the on-chain transactions I have executed on the decisions above.
      </Text>
      <List.Root as="ol">
        <List.Item><Link href='https://etherscan.io/tx/0x6b902f2e4dfdc4060f9e29436095036d0b1eb176b431e0d171c578151500a7a8' target='_blank' color={"orange.300"}>Etherscan Tx</Link></List.Item>
        <List.Item><Link href='https://etherscan.io/tx/0x6b902f2e4dfdc4060f9e29436095036d0b1eb176b431e0d171c578151500a7a8' target='_blank' color={"orange.300"}>Basescan Tx</Link></List.Item>
      </List.Root>
    </Grid>
  );
};
