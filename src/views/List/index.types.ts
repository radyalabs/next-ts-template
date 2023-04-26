export interface Profile {
  internalId: number;
  id: string;
  userId: string;
  name: string;
  description: string;
  companyId: string;
  companyName: string;
  branchId: string;
  branchName: string;
  primaryLanguage: string;
  seconddaryLanguage: string;
  menuId: string;
  queryTemplateId: string;
  accessBranchesId: string;
  accessBranches: string[];
  isRequiredChangePassword: boolean;
  roles: string;
  wellcomePage: string;
  email: string;
  isSuperUser: boolean;
  province: string;
  city: string;
}
