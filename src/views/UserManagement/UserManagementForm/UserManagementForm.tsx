import Button from '@/components/base/Button';
import Checkbox from '@/components/base/Checkbox';
import Paper from '@/components/base/Paper';
import Table from '@/components/base/Table';
import TextField from '@/components/base/Textfield';
import TextSkeleton from '@/components/base/TextSkeleton';
import PageHeader from '@/components/ui/PageHeader';

import useUserManagementForm from './UserManagementForm.hooks';

const UserManagementForm = () => {
  const {
    checkAll,
    checkedScopes,
    errors,
    handleSubmit,
    isEdit,
    isLoadingScopes,
    isSubmitting,
    pageTitle,
    register,
    scopes,
    handleBack,
    handleCheck,
    handleCheckAll,
    onSubmit,
  } = useUserManagementForm();
  return (
    <>
      <Paper className="p-4 mb-5">
        <div className="flex justify-between items-center">
          <PageHeader
            title={`${!isEdit ? 'Create' : 'Edit'} User`}
            crumbs={[
              {
                label: 'List User Access Management',
                href: '/user-access-management',
              },
              { label: `${!isEdit ? 'Create' : 'Edit'} User` }]}
            showBackBtn
            onClickBackBtn={handleBack}
          />
        </div>
      </Paper>
      <Paper className="p-4 mb-5">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <TextField
            autoFocus
            block
            error={!!errors.email}
            label="Email"
            message={errors.email && errors.email.message}
            placeholder="Enter Email"
            required
            {...register('email')}
          />
          <TextField
            autoFocus
            block
            error={!!errors.fullName}
            label="Fullname"
            message={errors.fullName && errors.fullName.message}
            placeholder="Enter Fullname"
            required
            {...register('fullName')}
          />
        </div>
      </Paper>
      {!isLoadingScopes ? (
        scopes.map((application, i) => (
          <Paper title={application.name} className="p-4 mb-5" key={application.name}>
            <Table
              stickyHeader
              className="table-fixed border-solid border border-neutral-300
              rounded-xl border-separate border-tools-table-outline mt-4 py-2"
            >
              <Table.TableHead>
                <Table.TableRow className="[&>th]:font-bold [&>th]:text-n-13 [&>th]:py-0">
                  <Table.TableCell
                    classes={{ root: 'break-words border-2 border-primary-500' }}
                    width={50}
                  >
                    <Checkbox
                      id={application.name}
                      name={application.name}
                      onChange={() => handleCheckAll(i)}
                      value={checkAll[i]}
                    />
                  </Table.TableCell>
                  <Table.TableCell
                    align="center"
                    classes={{ root: 'break-words border-2 border-primary-500' }}
                  >
                    Description
                  </Table.TableCell>
                </Table.TableRow>
              </Table.TableHead>
              <Table.TableBody>
                {application.scopes.map((scope) => (
                  <Table.TableRow key={scope.name}>
                    <Table.TableCell>
                      <Checkbox
                        id={scope.name}
                        name={scope.name}
                        onChange={handleCheck}
                        checked={checkedScopes.includes(scope.name)}
                      />
                    </Table.TableCell>
                    <Table.TableCell>
                      {scope.description}
                    </Table.TableCell>
                  </Table.TableRow>
                ))}
              </Table.TableBody>
            </Table>
          </Paper>
        ))
      ) : (
        <Paper
          className="px-8 py-5 animate-pulse"
        >
          <TextSkeleton width="lg" className="mb-4" />
          <hr />
          <div className="my-6 bg-gray-300 animate-pulse w-full h-72 rounded-lg" />
        </Paper>
      )}
      <div className="flex justify-end gap-4 [&>*]:w-36">
        <Button
          variant="outline"
          color="danger"
          onClick={handleBack}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button
          color="primary"
          onClick={handleSubmit(onSubmit)}
          loading={isSubmitting}
        >
          {`${pageTitle} User`}
        </Button>
      </div>
    </>
  );
};

export default UserManagementForm;
