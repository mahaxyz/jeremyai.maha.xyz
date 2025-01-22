import { IReport } from '@/api/reports';
import { Grid, Heading, Link, List, Text } from '@chakra-ui/react';

export const Actions = (props: { report: IReport }) => {
  console.log(props.report);
  return (
    <Grid>
      <Heading mb={2} as="h3" fontWeight="bold">Onchain Actions</Heading>
      <Text mb={2} fontSize="small" fontStyle={"italic"} opacity={0.7}>
        These are the on-chain transactions I have executed on the decisions above.
      </Text>
      <List.Root as="ol" fontSize={14}>
        {
          props.report.action.map((action, index) => {
            const [link, text] = action.split('-');
            return (
              <List.Item key={index}>
                <Link href={link} fontSize={14} target='_blank' color={"orange.300"}>{text}</Link>
              </List.Item>
            )
          })
        }
      </List.Root>
    </Grid>
  );
};
