import React, { Fragment } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import {
  MainContainer,
  AvatarStyled,
  TextAreaStyled,
  ButtonContainer,
  ButtonStyled,
  SubContainer
} from "./styled";

function AddCommentForm({
  errors,
  status,
  touched,
  isSubmitting,
  auth,
  profile,
  resetForm
}) {
  return (
    <Form>
      <MainContainer>
        {profile.avatarUrl ? (
          <AvatarStyled alt="User Avatar" src={profile.avatarUrl} />
        ) : (
          <AvatarStyled>{profile.avatar}</AvatarStyled>
        )}
      <SubContainer>
        <Field
          name="comment"
          label="Comment"
          multiline
          rowsMax="5"
          component={TextAreaStyled}
          rows="1"
          margin="normal"
          fullWidth
        />

        <ButtonContainer>
          <ButtonStyled
            variant="contained"
            color="secondary"
            id="submit"
            value="Post"
            type="submit"
          >
            Submit
          </ButtonStyled>
          <ButtonStyled id="cancel" value="Post" type="cancel">
            Cancel
          </ButtonStyled>
        </ButtonContainer>
        </SubContainer>
      </MainContainer>
    </Form>
  );
}

export default AddCommentForm;
