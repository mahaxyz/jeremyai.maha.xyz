import { Flex } from '@chakra-ui/react';

// import { CTASection } from './components/cta-section';
// import { SomeImage } from './components/some-image';
import { Introduction } from './components/introduction';
import { Career } from './components/career';
import { Readings } from './components/readings';

export const Home = () => {
  return (
    <Flex
      direction="column"
      // alignItems="center"
      // justifyContent="center"
      // minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <Introduction />
      <hr />
      <Career />
      <hr />
      <Readings />
      {/* <SomeImage /> */}
      {/* <CTASection /> */}
    </Flex>
  );
};
