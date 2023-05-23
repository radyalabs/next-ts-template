import Button from '@/components/base/Button';
import Paper from '@/components/base/Paper';
import TextField from '@/components/base/Textfield';
import Typography from '@/components/base/Typography';
import PageHeader from '@/components/ui/PageHeader';

const CrudForm = () => (
  <>
    <div className="flex justify-between items-center mb-6">
      <PageHeader
        title="Vehicle List"
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Vehicle List', href: '/crud-example' },
          { label: 'Add Vehicle' },
        ]}
      />
    </div>
    <Paper className="p-8 mb-6">
      <Typography variant="h6" as="h3" className="mb-6 font-semibold">Dokumen Bukti Kendaraan</Typography>
      <div className="grid grid-cols-2 gap-4 [&>*]:basis-1/2">
        <TextField label="Depo" block />
        <TextField label="No. Polisi" block />
        <TextField label="Jenis Kendaraan" block />
        <TextField label="No. Rangka" block />
        <TextField className="row-span-2" label="Deskripsi" block />
        <TextField label="No. Mesin" block />
        <TextField label="Tgl Berakhir STNK" block />
      </div>
    </Paper>
    <div className="flex justify-end gap-4">
      <Button color="primary">Simpan</Button>
      <Button color="default">Batal</Button>
    </div>
  </>
);

export default CrudForm;
