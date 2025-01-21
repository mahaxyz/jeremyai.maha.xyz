import { IReport } from '@/api/reports';
import { Grid, Heading, Text } from '@chakra-ui/react';
import Markdown from 'react-markdown'


export const Decisions = (props: { report: IReport }) => {
  return (
    <Grid>
      <Heading mb={2} as="h3" fontWeight="bold">Decisions Made</Heading>
      <Text mb={2} fontSize="small" fontStyle={"italic"} opacity={0.7}>
        This is what I have decided to do with the information and the observations above.
      </Text>
      <Text mb={2} fontSize="small" className='markdown'>
        <Markdown>
          {props.report.decisions}
        </Markdown>
      </Text>
    </Grid>
  );
};
