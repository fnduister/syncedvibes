import React from "react";
import { Form, Field } from "formik";
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
  handleReset,
  changeOnBlur,
  auth,
  dirty,
  profile,
  resetForm,
  handleBlur,
  showButtons,
  pristine
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
            onFocus={showButtons}
            onBlur={e => {
              console.log("inside you");
              changeOnBlur();
              handleBlur(e);
            }}
          />

          {pristine && (
            <ButtonContainer>
              {console.log({ touched, dirty, errors, pristine, isSubmitting })}
              <ButtonStyled
                variant="contained"
                color="secondary"
                disabled={isSubmitting || (errors.comment ? true: false) || !dirty}
                id="submit"
                value="Post"
                type="submit"
              >
                Submit
              </ButtonStyled>
              <ButtonStyled
                id="cancel"
                value="Post"
                type="cancel"
                onClick={e => {
                  e.preventDefault();
                  handleReset();
                  changeOnBlur();
                }}
              >
                Cancel
              </ButtonStyled>
            </ButtonContainer>
          )}
        </SubContainer>
      </MainContainer>
    </Form>
  );
}

export default AddCommentForm;
