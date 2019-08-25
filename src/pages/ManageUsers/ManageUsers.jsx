import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { firebaseConnect, isLoaded } from "react-redux-firebase";
import AddBox from "@material-ui/icons/AddBox";
import { Container, MaterialTableStyled } from "./styled";
import { objectToArray } from "../../utils/common";
import CircularProgress from "@material-ui/core/CircularProgress";

const ManageUsers = ({ users, roles }) => {
  return isLoaded(users) ? (
    <Container>
      {users ? console.log(objectToArray(users), roles) : null}
      <MaterialTableStyled
        columns={[
          { title: "Username", field: "displayName" },
          { title: "Email", field: "email" },
          { title: "Last Seen", field: "lastSeen", type: "numeric" },
          {
            title: "Role",
            field: "role", lookup: {admin: "admin", editor: "editor", user: "user"}
          }
        ]}
        data={objectToArray(users)}
        title="User Management"
        editable={{
          isEditable: rowData => rowData.role,
          onRowUpdate: (newData, oldData) => {
            
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
  }))
);
export default enhance(ManageUsers);
