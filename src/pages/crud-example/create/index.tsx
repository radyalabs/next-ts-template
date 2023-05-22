import Head from 'next/head';

import Layout from '@/components/layout/Layout';
import { APP_TITLE } from '@/constants/config';
import CrudForm from '@/views/CrudExample/CrudForm';

const CrudExample = () => (
  <>
    <Head>
      <title>{`${APP_TITLE} - Add Vehicle Form`}</title>
    </Head>
    <Layout>
      <CrudForm />
    </Layout>
  </>
);

export default CrudExample;
