import React from 'react';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Button from '@/components/base/Button';
import Modal from '@/components/ui/Modal';

import useOrganizationSwitcher from './index.hooks';
import type { OrganizationSwitcherProps } from './index.types';

const OrganizationSwitcher = (props: OrganizationSwitcherProps) => {
  const {
    open = false,
  } = props;
  const {
    isMutatingSwitch,
    organizations = [],
    selectedOrg,
    selectedOrganization,
    handleClickCancel,
    handleClickSwitcher,
    handleSelectOrg,
  } = useOrganizationSwitcher(props);
  return (
    <Modal closable={false} open={open} title="Select Default Organization" width={480}>
      <Modal.Content>
        {organizations.map((org) => (
          <ListItemButton
            key={org.organizationId}
            classes={{
              root: 'rounded-2xl mb-2 justify-center hover:bg-primary-50 hover:text-primary-500 hover:shadow-inner group text-n-8',
              selected: 'bg-primary-100 text-primary-500 hover:bg-primary-100 shadow-inner',
            }}
            onClick={() => handleSelectOrg(org.organizationId)}
            selected={org.organizationId === selectedOrg}
          >
            <ListItemText>{org.name}</ListItemText>
          </ListItemButton>
        ))}
      </Modal.Content>
      <Modal.Footer>
        <div className="flex justify-between gap-2 w-full [&>*]:w-full">
          {!!selectedOrganization && (
            <Button
              variant="outline"
              color="danger"
              onClick={handleClickCancel}
            >
              Cancel
            </Button>
          )}
          <Button
            variant="default"
            color="primary"
            loading={isMutatingSwitch}
            onClick={handleClickSwitcher}
          >
            Switch
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default OrganizationSwitcher;
