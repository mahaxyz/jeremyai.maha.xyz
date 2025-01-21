"use client"

import { Flex } from '@chakra-ui/react';
import { Introduction } from './components/introduction';
import { ProtocolData } from './components/protocoldata';
import { Notes } from './components/notes';
import { Decisions } from './components/decisions';
import { Actions } from './components/actions';
import { useSearchParams } from 'next/navigation';
import useReport from '@/api/hooks/useReport';

export const Report = () => {
  const query = useSearchParams();
  const { report, loading } = useReport(query.get('id'));

  if (loading) return <div>loading...</div>
  if (!report) return <div>report not found...</div>

  return (
    <Flex
      direction="column"
      gap={4}
      mb={8}
      w="full"
    >
      <Introduction report={report} />
      {/* <hr /> */}
      <ProtocolData report={report} />
      <hr />
      <Notes report={report} />
      <hr />
      <Decisions report={report} />
      <hr />
      <Actions report={report} />
    </Flex>
  );
};
