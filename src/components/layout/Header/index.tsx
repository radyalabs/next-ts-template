'use client';

import Image from 'next/image';

import Button from '@/components/base/Button';
import Typography from '@/components/base/Typography';
import { IcLogout } from '@/components/icons';
import DropdownButton from '@/components/ui/DropdownButton';
import { APP_TITLE } from '@/constants/config';
import { stringToAcronym } from '@/utils';

import useHeader from './index.hooks';

const ProfilePic = (props: { url: string; name: string }) => {
  const { url, name } = props;
  return (
    <Image
      className="rounded-full"
      src={url}
      alt={`${name}'s profile picture`}
      fill
      sizes="100px"
      style={{ objectFit: 'cover' }}
    />
  );
};

const Header = () => {
  const {
    isCollapsed,
    profile,
    handleLogout,
  } = useHeader();
  const {
    fullName = '',
    profilePictureUri = '',
  } = profile || {};

  return (
    <nav className="w-full bg-n-1 py-6 px-4 shadow fixed z-30">
      <div
        className={`flex items-center transition-width transition-slowest ease [&>*]:text-n-13 ${!isCollapsed ? 'ml-72' : 'ml-24'}`}
      >
        <Typography
          variant="title"
          as="span"
          align="left"
          className="font-bold grow"
          size="large"
        >
          {APP_TITLE}
        </Typography>
        <DropdownButton
          className="border-0 mr-12 h-11 p-2"
          variant="text"
          dropdownIcon={false}
          menuItems={[
            {
              label: (
                <div className="flex justify-between items-center gap-3">
                  <div
                    className="w-10 h-10 relative flex justify-center items-center rounded-full
                bg-primary-200 text-xl text-primary-500 uppercase p-2 font-secondary font-bold"
                  >
                    {!profilePictureUri ? stringToAcronym(fullName) : (
                      <ProfilePic url={profilePictureUri} name={fullName} />
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <Typography as="span" className="text-base" variant="title" type="secondary">
                      {fullName}
                    </Typography>
                  </div>
                </div>
              ),
            },
            {
              label: (
                <Button
                  variant="text"
                  color="danger"
                  startIcon={<IcLogout className="fill-danger-500" />}
                >
                  Logout
                </Button>),
              onClick: handleLogout,
            },
          ]}
        >
          <div className="flex justify-between items-center gap-3">
            <div className="flex flex-col gap-1 text-right">
              <Typography as="span" className="text-base" variant="title" type="secondary">
                {fullName}
              </Typography>
            </div>
            <div
              className="w-10 h-10 relative flex justify-center items-center rounded-full
                bg-primary-200 text-xl text-primary-500 uppercase p-2 font-secondary font-bold"
            >
              {!profilePictureUri ? stringToAcronym(fullName) : (
                <ProfilePic url={profilePictureUri} name={fullName} />
              )}
            </div>
          </div>
        </DropdownButton>
      </div>
    </nav>
  );
};
export default Header;
