import {Box, Flex, Heading, Image, Text, useColorModeValue} from '@chakra-ui/react';

const JunghoChoi = () => {
  return (
    <Box>
      <Flex justify='space-between' align='center' mb={5}>
        <Box>
          <Heading
            as='h1'
            variant='page-title'
            fontSize={{ base: '3xl', sm: '5xl' }}
          >
            Jungho Daniel Choi
          </Heading>
        </Box>

        <Image
          ml={3}
          boxSize={{ base: '150px', sm: '200px' }}
          borderRadius='full'
          src='https://bit.ly/dan-abramov'
          alt='Dan Abramov'
        />
      </Flex>

      <Box
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
        borderRadius='xl'
        textAlign='center'
        px={{ base: 2, sm: 3 }}
        py={3}
        // width='fit-content'
        mx='auto'
        mb={3}
        // center
        // width='fit-content'
      >
        <Flex
          fontSize={{ base: 'md', sm: 'xl' }}
          wrap='wrap'
          justifyContent='space-around'
        >
          <Text>🏫 Student</Text>
          <Text>💻 Developer</Text>
          <Text>Photoshop Artist</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default JunghoChoi