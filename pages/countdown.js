// Used to address the issue stated in
// https://stackoverflow.com/questions/70360690/how-to-support-future-feature-flags-eg-the-site-will-shut-down-in-10-min/70794974#70794974
import { Container, Flex, VStack, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { useDVCVariable } from '@devcycle/devcycle-react-sdk';

export default function CountDown() {
  const variableKey = 'time-of-site-to-go-down';
  const defaultValue = 0;
  const featureVariable = useDVCVariable(variableKey, defaultValue);

  if (featureVariable == null) {
    return <></>;
  }

  const currentTime = new Date().getTime();
  let message = '';

  if (featureVariable.value == 0) {
    message = 'Site is up';
  } else if (currentTime > featureVariable.value) {
    message = 'Site is down';
  } else {
    message = `The site will shutdown at: ${new Date(
      featureVariable?.value,
    ).toString()}`;
  }

  return (
    <Container maxW="container.xl" p={0}>
      <Head>
        <title>Non-Boolean Feature Flag | DevCycle</title>
      </Head>
      <Flex
        h={{ base: 'auto', md: '100vh' }}
        py={[0, 10, 20]}
        direction={{ base: 'column-reverse', md: 'row' }}>
        <VStack
          w="full"
          h="full"
          p={20}
          spacing={10}
          alignItems="flex-start"
          bg="grey.50">
          <Heading>Non-Boolean Feature Flag</Heading>
          <Text fontSize="xl">{message}</Text>
        </VStack>
      </Flex>
    </Container>
  );
}
