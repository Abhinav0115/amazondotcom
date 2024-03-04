import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  colors?: InputJsonValue;
  description?: InputJsonValue;
  discountedPrice?: number | null;
  images?: InputJsonValue;
  order?: OrderWhereUniqueInput | null;
  price?: number;
  reviews?: ReviewUpdateManyWithoutProductsInput;
  title?: string;
  variants?: InputJsonValue;
};