import Image from 'next/image';
import Link from 'next/link';

import notFoundBg from '@/assets/not-found.svg';
import Button from '@/components/base/Button';
import Typography from '@/components/base/Typography';

const NotFound = () => (
  <div className="absolute w-full bg-[#05314A] min-h-full flex flex-col gap-6 items-center overflow-x-hidden">
    <div className="max-h-[480px]">
      <Image
        src={notFoundBg}
        alt=""
        height={480}
        width={1200}
        style={{ objectFit: 'contain' }}
      />
    </div>
    <div className="flex flex-col gap-2 [&>*]:text-n-1 items-center">
      <Typography variant="headline">Page Not Found</Typography>
      <Typography size="large">
        It seems this page is not available
      </Typography>
    </div>
    <Link href="/" className="pb-12">
      <Button color="primary" variant="outline">
        Back to Home
      </Button>
    </Link>
  </div>
);

export default NotFound;
