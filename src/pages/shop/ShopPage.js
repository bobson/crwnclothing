import React from "react";
import { Route } from "react-router-dom";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

// import { selectShopCollections } from "../../redux/shop/shop.selectors";
// import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import CollectionPage from "../collection/Collection";

const ShopPage = ({ match }) => {
  console.log(match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   collections: selectShopCollections,
// });

export default ShopPage;
