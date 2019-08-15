import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import AddBox from "@material-ui/icons/AddBox";
import { Container, MaterialTableStyled } from "./styled";

const ManageUsers = ({ users }) => {
  console.log({ users });
  return (
    <Container>
      <MaterialTableStyled
        columns={[
          { title: "Adı", field: "name" },
          { title: "Soyadı", field: "surname" },
          { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
          {
            title: "Doğum Yeri",
            field: "birthCity",
            lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
          }
        ]}
        data={[
          { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 }
        ]}
        title="Demo Title"
      />
    </Container>
  );
};

const enhance = compose(
  firebaseConnect(["users"]),
  connect((state, props) => ({ users: state.firebase.data.users }))
);
export default enhance(ManageUsers);
