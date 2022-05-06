import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  Container,
  Flex,
  VStack,
  Grid,
  GridItem,
  Heading,
  Text,
  Center,
  Code,
  useBreakpointValue,
} from '@chakra-ui/react';
import { CardItem } from '../components/CardItem';
import { useDVCVariable } from '@devcycle/devcycle-react-sdk';

export default function Home() {
  const variableKey = 'react-sample';
  const defaultValue = 'false';
  const featureVariable = useDVCVariable(variableKey, defaultValue);

  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  console.log(`featureVariable: ${featureVariable?.value}`);

  return (
    <Container maxW="container.xl" p={0}>
      <Head>
        <title>Learn About Feature Flags</title>
        <meta name="description" content="Learn About Feature Flags" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        h={{ base: 'auto', md: '100vh' }}
        py={[0, 10, 20]}
        direction={{ base: 'column-reverse', md: 'row' }}>
        <VStack w="full" h="full" p={10} spacing={20}>
          <Grid gap={4}>
            <GridItem colSpan={2}>
              <VStack w="full" h="full" p={5} spacing={5}>
                <Heading variant="h1" as="h1" textAlign="center">
                  Welcome to Learning about Feature Flags
                </Heading>
                <Heading variant="h3" textAlign="center">
                  <a href="https://app.devcycle.com">using DevCycle</a>
                </Heading>
              </VStack>
            </GridItem>

            <GridItem colSpan={2}>
              <Center>
                {featureVariable?.value ? (
                  <Text>
                    Get started by editing <Code>pages/index.js</Code>
                  </Text>
                ) : (
                  <Text>Variable React-Sample off</Text>
                )}
              </Center>
            </GridItem>

            <CardItem variant="card" colSpan={colSpan}>
              <Link href="/gettingstarted" passHref>
                <div>
                  <Heading as="h2" mb={4} size="lg">
                    Getting Started
                  </Heading>
                  <Text>
                    How to get started using DecCycle in a NextJS React app.
                  </Text>
                </div>
              </Link>
            </CardItem>

            <CardItem variant="card" colSpan={colSpan}>
              <Link href="/countdown" passHref>
                <div>
                  <Heading as="h2" mb={4} size="lg">
                    Non-Boolean
                  </Heading>
                  <Text>
                    Using non-boolean feature flags to warn users that a site is
                    going down at a specific time, then turning the site off
                    that the time.
                  </Text>
                </div>
              </Link>
            </CardItem>
            <CardItem variant="card" colSpan={colSpan}>
              <Link href="/countdown" passHref>
                <div>
                  <Heading as="h2" mb={4} size="lg">
                    Non-Boolean
                  </Heading>
                  <Text>
                    Using non-boolean feature flags to warn users that a site is
                    going down at a specific time, then turning the site off
                    that the time.
                  </Text>
                </div>
              </Link>
            </CardItem>

            <CardItem variant="card" colSpan={colSpan}>
              <Link href="/appversion" passHref>
                <div>
                  <Heading as="h2" mb={4} size="lg">
                    App Version Specific
                  </Heading>
                  <Text>
                    Using the app version to turn on and off certain features.
                  </Text>
                </div>
              </Link>
            </CardItem>

            <CardItem variant="card" colSpan={colSpan}>
              <Link href="/permission" passHref>
                <div>
                  <Heading as="h2" mb={4} size="lg">
                    Using Feature Flags to Manage Access
                  </Heading>
                  <Text>
                    Use a Feature Flag to allow user access to a certian section
                    of the app.
                  </Text>
                </div>
              </Link>
            </CardItem>

            <GridItem colSpan={2}>
              <Center>
                <a
                  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer">
                  Powered by{' '}
                  <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    width={72}
                    height={16}
                  />
                </a>
              </Center>
            </GridItem>
          </Grid>
        </VStack>
      </Flex>
    </Container>
  );
}
