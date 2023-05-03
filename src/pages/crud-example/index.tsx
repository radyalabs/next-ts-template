import Head from 'next/head';

import Layout from '@/components/layout/Layout';
import { APP_TITLE } from '@/constants/config';
import CrudList from '@/views/CrudExample/CrudList';

const CrudExample = () => (
  <>
    <Head>
      <title>{`${APP_TITLE} - CRUD Example List`}</title>
    </Head>
    <Layout>
      <CrudList />
    </Layout>
  </>
);

export default CrudExample;
