import PageHeader from '@/components/ui/PageHeader';

const CrudForm = () => (
  <div className="flex justify-between items-center mb-6">
    <PageHeader title="Vehicle List" crumbs={[{ label: 'Home', href: '/' }, { label: 'Vehicle List' }, { label: 'Add Vehicle' }]} />
  </div>
);

export default CrudForm;
