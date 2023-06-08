import { Fragment, useContext } from 'react';

import CaetegoryPreview from '../../components/category-preview/category-preview.component';

import { CategoryContext } from '../../context/categories.context';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoryContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CaetegoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};
export default CategoriesPreview;
