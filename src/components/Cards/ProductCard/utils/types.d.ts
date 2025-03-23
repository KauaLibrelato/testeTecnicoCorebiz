import { IPhoto } from "../../../../utils/types";

export interface IProductCard {
    data: IPhoto;
    onPress: VoidFunction;
}
