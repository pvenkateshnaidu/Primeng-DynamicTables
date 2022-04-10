export interface Category {
  id?: number;
  value?: string;
}

export interface SubCategory {
  sub_category_id?: number;
  sub_category_value?: string;
  category?: Category;
}
