export interface Config {
  colors: Color[];
  categories: Category[];
  materials: Material[];
  productTypes: ProductType[];
  shapes: Shape[];
  filtersByCategory: Filters[];
}

export interface Color {
  id: number;
value: ColorIntl[];
}

export interface ColorIntl {
  color: string;
  language: string;
}

export interface Category {
  id: number;
value: CategoryIntl[];
}

export interface CategoryIntl {
  category: string;
  language: string;
}

export interface Material {
  id: number;
value: MaterialIntl[];
}

export interface MaterialIntl {
  material: string;
  language: string;
}

export interface ProductType {
  id: number;
value: ProductTypeIntl[];
}

export interface ProductTypeIntl {
  productType: string;
  language: string;
}

export interface Shape {
  id: number;
value: ShapeIntl[];
}

export interface ShapeIntl {
  shape: string;
  language: string;
}



export interface Filters {
  categoryId: number;
 colors: number[];
  materials: number[];
  productTypes: number[];
}
