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

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import {MdLibraryBooks} from 'react-icons/md'
export default function Index() {
  return (
    <Container maxW={'container.md'}>
      <Flex justify="space-between" align="center" mb={5}>
        <Box>
          <Heading
            as="h1"
            variant="page-title"
            fontSize={{ base: '3xl', sm: '5xl' }}
          >
            Jungho Daniel Choi
          </Heading>
        </Box>

        <Image
          ml={3}
          boxSize={{ base: '150px', sm: '200px' }}
          borderRadius="full"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
      </Flex>

      <Box
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
        borderRadius="xl"
        textAlign="center"
        px={{ base: 2, sm: 3 }}
        py={3}
        // width='fit-content'
        mx="auto"
        mb={3}
        // center
        // width='fit-content'
      >
        <Flex fontSize={{ base: 'md', sm: 'xl' }} wrap='wrap' justifyContent="space-around">
          <Text>🏫 Student</Text>
          <Text>💻 Developer</Text>
          <Text>Photoshop Artist</Text>
        </Flex>
      </Box>

      <Box mb={3}>
        <Heading as="h1" mb ={1} fontSize={{ base: 'xl' }}>
          About Me
        </Heading>
        <HR />
        <Paragraph >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>
      </Box>

      <Box>
        <Heading as="h1" fontSize={{ base: 'xl' }}>
          Where to Find Me
        </Heading>
        <HR />
        <Flex direction='row' wrap='wrap' justify='space-around' m={3}>
          <IconDisplay text ={'resume'}>
            <MdLibraryBooks size='4em'/>
          </IconDisplay>
          <IconDisplay text={'Github'}>
            <FaGithub size='4em'/>
          </IconDisplay>

          <IconDisplay text={'LinkedIn'}>
            <FaLinkedin size='4em' />
          </IconDisplay>
          <IconDisplay text={'email'}>
            <AiOutlineMail size='4em'/>
          </IconDisplay>

          <IconDisplay text={'phone'}>
            <AiOutlinePhone size='4em'/>
          </ IconDisplay >
        </Flex>
      </Box>
    </Container>
  );
}
