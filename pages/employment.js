import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import { GridItem, EmploymentGridItem} from '../components/GridItem';
import Section from '../components/Section';
import Layout from '../components/layouts/Article';

import thumbAVT from '../public/images/employment/avt.png';
import thumbMR from '../public/images/employment/mr.png'
import thumbPrestige from '../public/images/employment/prestige.png'
import thumbSEUL from '../public/images/employment/seul.png'

const Employment = () => {
  return (
    <Layout title='Employment'>
      <Container>
        <Heading as='h3' fontSize={20} mb={4}>
          Employment
        </Heading>

        <Flex>
          <Section>
          <EmploymentGridItem
              thumbnail={thumbSEUL}
              title='SEUL - student startup | Backend Tech Lead'
            >
              Working from November 2021 to establish a backend workflow and lead backend engineers in meetings to delegate tasks and disucss development plans

            </EmploymentGridItem>
            <EmploymentGridItem
              thumbnail={thumbAVT}
              title='Advisar AI (formerly All Vision) | Frontend Software Engineer Intern'
            >
              Worked from June 2021 - August 2021 to create data visualizaion display from machine learning model results and an interface for machine learning scientists to clean and prune data

            </EmploymentGridItem>
            <EmploymentGridItem
              thumbnail={thumbMR}
              title='MyRegistry.com | Finance Intern'
            >
              Worked from September 2019 - May 2020 to track advertiser insertion orders and identify missing transactions by reconciling transactions from various platforms
            </EmploymentGridItem>
            <EmploymentGridItem
              thumbnail={thumbPrestige}
              title='Prestige Institute | Computer Science Teaching Asssitant'
            >
              Worked from January 2018 - May 2018 to teach middle school students fundamental concepts in programming such as variables, conditionals, loops and application of such concepts through arduino projects.

            </EmploymentGridItem>
          </Section>
        </Flex>
      </Container>
    </Layout>
  );
};

export default Employment;
