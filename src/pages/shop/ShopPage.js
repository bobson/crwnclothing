import React from "react";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import SHOP_DATA from "./shop.data";

const ShopPage = () => {
  const collections = SHOP_DATA;
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otheCollectionProps }) => (
        <CollectionPreview key={id} {...otheCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
