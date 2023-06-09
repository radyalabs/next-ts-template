import { useState } from 'react';
import dynamic from 'next/dynamic';

import Button from '@/components/base/Button';
import Paper from '@/components/base/Paper';
import Textarea from '@/components/base/Textarea';
import TextField from '@/components/base/Textfield';
import Typography from '@/components/base/Typography';
import PageHeader from '@/components/ui/PageHeader';

const Modal = dynamic(() => import('@/components/base/Modal'), {
  ssr: false,
});

const CrudForm = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleConfirm = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setOpenModal(false);
    }, 2000);
  };

  return (
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
        <Typography variant="h6" as="h3" className="mb-6 font-semibold">
          Dokumen Bukti Kendaraan
        </Typography>
        <div className="grid grid-cols-2 gap-4 [&>*]:basis-1/2">
          <TextField label="Depo" block />
          <TextField label="No. Polisi" block />
          <TextField label="Jenis Kendaraan" block />
          <TextField label="No. Rangka" block />
          <Textarea className="row-span-2" label="Deskripsi" block />
          <TextField label="No. Mesin" block />
          <TextField label="Tgl Berakhir STNK" block />
        </div>
      </Paper>
      <div className="flex justify-end gap-4">
        <Button color="primary" onClick={() => setOpenModal(true)}>
          Simpan
        </Button>
        <Button color="default">Batal</Button>
      </div>
      <Modal
        title="Are you sure?"
        open={openModal}
        buttonConfirm="primary"
        captionButtonConfirm="Confirm"
        withButtonClose
        onClose={() => setOpenModal(false)}
        onConfirm={handleConfirm}
        buttonCenter
        withIconClose
        size="large"
        isLoading={isLoading}
      >
        <Typography variant="subtitle1" className="text-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          vero tenetur, natus placeat voluptatem nesciunt adipisci explicabo
          deserunt porro! Incidunt!
        </Typography>
      </Modal>
    </>
  );
};

export default CrudForm;
