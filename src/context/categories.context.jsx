import { createContext, useEffect, useState } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoryContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setcategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
