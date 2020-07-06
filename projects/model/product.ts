export interface Product {
  id: string;
  name: string;
  generalDescription: string;
  variants: Variants[];
  collection: Collection;
  price: number;
  discount: number;
  publicationDate: Date;
  artisanID: string;
}

export interface Variants {
  id: string;
  colour: VariantColor;
  dimension: Dimension;
  images: string;
}
export interface VariantColor {
id: string;
name: string;
}
export interface Collection {
  id: string;
  name: string;
}
export interface Dimension {
  width: number;
  height: number;
  depth: number;
  shaper: Shape;
}
export interface Shape {
  shape: string;
}
