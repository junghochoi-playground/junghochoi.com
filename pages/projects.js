import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/Section';
import { WorkGridItem } from '../components/GridItem';

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png';
import thumbWalknote from '../public/images/works/walknote_eyecatch.png';
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg';
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png';

import thumbSEUL from '../public/images/projects/seul.png'
import thumbWalli from '../public/images/projects/walli.png'

const Projects = () => {
  return (
    <Layout title='Works'>
      <Container>
        <Heading as='h3' fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id='seul' title='SEUL' thumbnail={thumbSEUL}>
              Socially Enhancing University Life is an application that will ...
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id='walli'
              title='Wall-i'
              thumbnail={thumbWalli}
            >
              Music recommendation app for iOS
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id='fourpainters'
              title='The four painters'
              thumbnail={thumbFourPainters}
            >
              A video work generated with deep learning, imitating famous four
              painters like Van Gogh
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem id='menkiki' thumbnail={thumbMenkiki} title='Menkiki'>
              An app that suggests ramen(noodle) shops based on a given photo of
              the ramen you want to eat
            </WorkGridItem>
          </Section>
        </SimpleGrid>

 
      </Container>
    </Layout>
  );
};

export default Projects;
