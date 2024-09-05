import TextSkeleton from '@/components/base/TextSkeleton';

const UserDetailSkeleton = () => (
  <>
    <div>
      <TextSkeleton width="md" className="mb-2" />
      <TextSkeleton width="lg" />
    </div>
    <div>
      <TextSkeleton width="md" className="mb-2" />
      <TextSkeleton width="lg" />
    </div>
  </>
);

export default UserDetailSkeleton;
