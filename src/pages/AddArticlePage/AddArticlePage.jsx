import React, { useState } from "react";
import AddArticle from "../../components/AddArticle/AddArticle";
import CustomCard from "../../components/CustomCard/CustomCard";

const AddArticlePage = props => {
  return (
    <CustomCard>
      <AddArticle add />
    </CustomCard>
  );
};

export default AddArticlePage;
