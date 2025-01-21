import { IReport } from '@/api/reports';
import * as human from 'human-date';
import { Box, Grid, Heading, Link, Text } from '@chakra-ui/react';

export const Introduction = (props: { report: IReport }) => {
  return (
    <Grid>
      <Heading mb={2} as="h1" fontWeight="bold">Report - {human.prettyPrint(props.report.createdAt)}</Heading>

      <Box mb={2}>
        <Link fontSize={"small"} color={'blue.300'} href='https://x.com/jeremypowellai' target='_blank'>Tweet Link</Link>
        &nbsp;&middot;&nbsp;
        {/* <Link fontSize={"small"} color={'blue.300'} href='https://github.com/mahaxyz/' target='_blank'>Blockchain Hash</Link>
        &nbsp;&middot;&nbsp; */}
        <Link fontSize={"small"} color={'blue.300'} href='https://github.com/mahaxyz/' target='_blank'>Share</Link>
      </Box>

      <Text fontSize="small" fontStyle={"italic"} opacity={0.7}>
        This is the report made by Jeremy on {human.prettyPrint(props.report.createdAt)} about the MAHA protocol, his thoughts and decisions
        on what to do next with the protocol.
      </Text>
    </Grid>
  );
};
