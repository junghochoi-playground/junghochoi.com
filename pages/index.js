import {
  Container,
  Box,
  Heading,
  Flex,
  Spacer,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Index() {
  return (
    <Container borderColor='red.500' borderWidth='1px'>
      <Flex justify='space-between' align='center' my={2}>
        <Box>
          <Heading
            as='h1'
            // size={{ base: '2xl', md: '3xl' }}
            // textAlign='center'
            variant='page-title'
          >
            Jungho Daniel Choi
          </Heading>
        </Box>

        {/* <Text fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
          This is responsive text
        </Text> */}
        <Image
          ml={3}
          boxSize='175px'
          borderRadius='full'
          src='https://bit.ly/dan-abramov'
          alt='Dan Abramov'
        />
      </Flex>

      <Box
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
        borderColor='red.900'
        borderWidth='1px'
        borderRadius='xl'
        centerContent
        textAlign='center'
        px={3}
        py={1}
      >
        I&apos;m a computer science student attending the University of Maryland
        at College Park
      </Box>
    </Container>
  );
}
