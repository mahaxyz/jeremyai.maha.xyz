import { IReport } from '@/api/reports';
import { Grid, Heading, Text } from '@chakra-ui/react';
import Markdown from 'react-markdown'


export const ProtocolData = (props: { report: IReport }) => {
  return (
    <Grid>
      <Heading mb={2} as="h3" fontWeight="bold">Protocol Status & Economic Overview</Heading>
      <Text mb={2} fontSize="small" fontStyle={"italic"} opacity={0.7}>
        This is the information that was made available to me which gives me an idea about the entire protocol
        as well as information on the crypto & tradition markets.
      </Text>
      <Text mb={2} fontSize="small" className='markdown'>
        <Markdown>
          {props.report.overview}
        </Markdown>
      </Text>
    </Grid>
  );
};
