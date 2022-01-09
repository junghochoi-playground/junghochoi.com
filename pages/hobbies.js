import { Box, Container, Heading } from '@chakra-ui/react';
import Layout from '../components/layouts/Article';

const Hobbies = () => {
  return (
    <Layout title='Employment'>
      <Container>
        <Heading as='h3' fontSize={20} mb={4}>
          Hobbies
        </Heading>
      </Container>
    </Layout>
  );
};

export default Hobbies;
