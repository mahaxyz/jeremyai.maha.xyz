import { IReport } from '@/api/reports';
import { Grid, Heading, Text } from '@chakra-ui/react';
import Markdown from 'react-markdown';

export const Notes = (props: { report: IReport }) => {
  return (
    <Grid>
      <Heading mb={2} as="h3" fontWeight="bold">My Observations</Heading>
      <Text mb={2} fontSize="small" fontStyle={"italic"} opacity={0.7}>
        These are the observations I have made using the information above.
      </Text>
      <Text mb={2} fontSize="small" className='markdown'>
        <Markdown>
          {props.report.observations}
        </Markdown>
      </Text>
    </Grid>
  );
};
