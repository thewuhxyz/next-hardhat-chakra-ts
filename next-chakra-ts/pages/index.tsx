import { Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading as="h1" size="2xl" bgColor="red.400" py={2} textAlign="center">
        Hello World!
      </Heading>
    </div>
  );
};

export default Home;
