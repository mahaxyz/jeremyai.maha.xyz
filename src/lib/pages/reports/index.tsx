import { Flex } from '@chakra-ui/react';
import { Introduction } from './components/introduction';
import { ProtocolData } from './components/protocoldata';
import { Notes } from './components/notes';
import { Decisions } from './components/decisions';
import { Actions } from './components/actions';

export const Report = (props: { report: string }) => {
  return (
    <Flex
      direction="column"
      gap={4}
      mb={8}
      w="full"
    >

      <Introduction report={props.report} />
      {/* <hr /> */}
      <ProtocolData />
      <hr />
      <Notes />
      <hr />
      <Decisions />
      <hr />
      <Actions />
    </Flex>
  );
};
