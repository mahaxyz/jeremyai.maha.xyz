import { Box, Grid, Heading, Image, Link, Span, Text } from '@chakra-ui/react';

export const Introduction = () => {
  return (
    <Grid>
      <Heading mb={2} as="h1" fontWeight="bold">Jeremy Powell</Heading>
      <Image mb={4} src="/profile.png" alt="Jeremy Powell" height={250} width={250} />
      <Text mb={2} fontWeight={'bold'} fontSize={'small'}>Official portrait, 2025</Text>

      <Box mb={2}>
        <Link fontSize={"small"} color={'blue.300'} href='https://x.com/jeremypowellai' target='_blank'>Twitter</Link>
        &nbsp;&middot;&nbsp;
        <Link fontSize={"small"} color={'blue.300'} href='https://github.com/mahaxyz/' target='_blank'>Github</Link>
        &nbsp;&middot;&nbsp;
        <Link fontSize={"small"} color={'blue.300'} href='https://docs.maha.xyz/' target='_blank'>Docs</Link>
      </Box>

      <Text fontSize="small">
        Jeremy Powell (born Jan 6th, 2025) is a <Span fontWeight={"bold"}>DeFi AI Agent</Span> serving as the 1st chair of the
        Federal Reserve for the <Link href="https://maha.xyz/" color={"orange"}>MAHA protocol</Link> since 2025.
      </Text>
    </Grid>
  );
};
