import {
  Container,
  Box,
  Heading,
  Flex,
  Spacer,
  Image,
  Text,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';
import Paragraph from '../components/Paragraph';
import HR from '../components/minor/HR';
import IconDisplay from '../components/IconDisplay';
import JunghoChoi from '../components/JunghoChoi';
import Layout from '../components/layouts/article';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { MdLibraryBooks } from 'react-icons/md';
export default function Index() {
  return (
    <Layout>
      <Container maxW={'container.md'}>
        {/* <JunghoChoi /> */}
        <Box mb={3}>
          <Heading as='h1' mb={3} fontSize={{ base: 'xl', xl: '2xl' }}>
            About Me
          </Heading>
          <HR />
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Paragraph>
        </Box>

        <Box>
          <Heading as='h1' mb={3} fontSize={{ base: 'xl', xl: '2xl' }}>
            Where to Find Me
          </Heading>
          <HR />
          <Flex direction='row' wrap='wrap' justify='space-around' m={3}>
            <IconDisplay text={'resume'}>
              <MdLibraryBooks size='4em' />
            </IconDisplay>
            <IconDisplay text={'Github'}>
              <FaGithub size='4em' />
            </IconDisplay>

            <IconDisplay text={'LinkedIn'}>
              <FaLinkedin size='4em' />
            </IconDisplay>
            <IconDisplay text={'email'}>
              <AiOutlineMail size='4em' />
            </IconDisplay>

            <IconDisplay text={'phone'}>
              <AiOutlinePhone size='4em' />
            </IconDisplay>
          </Flex>
        </Box>
      </Container>
    </Layout>
  );
}
