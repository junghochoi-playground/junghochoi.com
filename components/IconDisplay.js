import { Flex, Text } from '@chakra-ui/react';

const IconDisplay = (props) => {
  return (
    <Flex direction="column" align='center'>
      {props.children}
      <Text size='1.2em' m={3} fontWeight={700}>{props.text}</Text>
    </Flex>
  );
};

export default IconDisplay;
