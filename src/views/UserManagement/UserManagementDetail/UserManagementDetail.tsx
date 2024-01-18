import Paper from '@/components/base/Paper';
import Table from '@/components/base/Table';
import TextSkeleton from '@/components/base/TextSkeleton';
import Typography from '@/components/base/Typography';
import Description from '@/components/ui/Description';
import PageHeader from '@/components/ui/PageHeader';

import UserDetailSkeleton from './components/UserDetailSkeleton';
import useUserManagementDetail from './UserManagementDetail.hooks';

const UserManagementDetail = () => {
  const {
    filteredUserScopes,
    isLoadingScopes,
    isLoadingUserData,
    userData,
    handleBack,
  } = useUserManagementDetail();
  const { email = '', fullName = '' } = userData || {};
  return (
    <>
      <Paper className="p-4 mb-5">
        <PageHeader
          title="Detail User"
          crumbs={[
            {
              label: 'List User Access Management',
              href: '/user-access-management',
            },
            { label: 'Detail User' }]}
          showBackBtn
          onClickBackBtn={handleBack}
        />
      </Paper>
      <Paper className="p-5 pb-8 mb-5">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          {!isLoadingUserData ? (
            <>
              <Description label="Email" value={email} layout="vertical" />
              <Description label="Fullname" value={fullName} layout="vertical" />
            </>
          ) : (
            <UserDetailSkeleton />
          )}
        </div>
      </Paper>
      {!isLoadingScopes && !isLoadingUserData ? (
        filteredUserScopes.map((appScope) => (
          <Paper title={appScope.name} className="p-4 mb-5" key={appScope.name}>
            <Table
              stickyHeader
              className="table-fixed border-solid border border-neutral-300
              rounded-xl border-separate border-tools-table-outline mt-4 py-2"
            >
              <Table.TableHead>
                <Table.TableRow className="[&>th]:font-bold [&>th]:text-n-13">
                  <Table.TableCell
                    align="center"
                    classes={{ root: 'break-words border-2 border-primary-500' }}
                  >
                    Description
                  </Table.TableCell>
                </Table.TableRow>
              </Table.TableHead>
              <Table.TableBody>
                {appScope.scopes.length ? appScope.scopes.map((scope) => (
                  <Table.TableRow key={scope.name}>
                    <Table.TableCell>
                      <ul>
                        <li>{scope.description}</li>
                      </ul>
                    </Table.TableCell>
                  </Table.TableRow>
                )) : (
                  <Table.TableRow>
                    <Table.TableCell>
                      <Typography variant="body" align="center" className="py-4">
                        {`This user don't have any permission for  ${appScope.name}`}
                      </Typography>
                    </Table.TableCell>
                  </Table.TableRow>
                )}
              </Table.TableBody>
            </Table>
          </Paper>
        ))
      ) : (
        <Paper
          className="p-4 animate-pulse"
        >
          <TextSkeleton width="lg" className="mb-5" />
          <hr />
          <div className="my-5 bg-gray-300 animate-pulse w-full h-72 rounded-lg" />
        </Paper>
      )}
    </>
  );
};

export default UserManagementDetail;
