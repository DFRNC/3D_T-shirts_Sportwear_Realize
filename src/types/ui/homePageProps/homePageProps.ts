type homePageProductType = {
  id: string;
  title: string;
  handle: string;
  status: string;
  previewSrc: string | null;
  activePreviewSrc: string | null;
};

type homePageCollectionType = {
  id: string;
  title: string;
  handle: string;
  products: homePageProductType[];
};

type homePagePropsType = {
  collections: homePageCollectionType[];
};

export type { homePageCollectionType, homePageProductType, homePagePropsType };
