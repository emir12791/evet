import React from "react";
import Spacer from "../../components/common/spacer";
import AdminList from "../../components/dashboard/admin-management/admin-list";
import NewAdminForm from "../../components/dashboard/admin-management/new-admin-form";
import { useSelector } from "react-redux";

const AdminManagementPage = () => {
  const { currentOperation } = useSelector((state) => state.misc);

  return (
    <>
      <Spacer />
      {currentOperation === "new" && (
        <>
          <NewAdminForm />
          <Spacer />
        </>
      )}

      <AdminList />
      <Spacer />
    </>
  );
};

export default AdminManagementPage;
