import React from "react";
import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";
import { firebaseConnect, isLoaded } from "react-redux-firebase";
import AddBox from "@material-ui/icons/AddBox";
import { Container, MaterialTableStyled } from "./styled";
import { objectToArray } from "../../utils/common";
import CircularProgress from "@material-ui/core/CircularProgress";

const ManageUsers = ({ users, roles, updateRole, history }) => {
  return isLoaded(users) ? (
    <Container>
      {users ? console.log(objectToArray(users), roles) : null}
      <MaterialTableStyled
        columns={[
          { title: "Username", field: "displayName", editable: "never"},
          { title: "Email", field: "email", editable: "never"},
          { title: "Last Seen", field: "lastSeen", type: "numeric", editable: "never" },
          {
            title: "Role",
            field: "role", lookup: {admin: "admin", editor: "editor", user: "user"}
          }
        ]}
        data={objectToArray(users)}
        title="User Management"
        editable={{
          isEditable: rowData => rowData.role,
          onRowUpdate: async (newData, oldData) => {
            console.log({oldData, newData});
            await updateRole(newData.key, newData.role )
            // history.push("/");
          }

        }}
      />
    </Container>
  ) : (
    <CircularProgress />
  );
};

const enhance = compose(
  firebaseConnect(["users", "settings"]),
  connect((state, props) => ({
    users: state.firebase.data.users,
    roles: state.firebase.data.settings
  })),
  withHandlers({
    updateRole: props => (userId, newRole) =>
      props.firebase.update(
        `users/${userId}`,
        {role: newRole}
      )
  })
);
export default enhance(ManageUsers);
