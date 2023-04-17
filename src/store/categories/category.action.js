import { createAction } from "../../utils/reducer/reducer";
import {CATEGORY_ACTION_TYPES} from "./category.types";

export const setCategories = (categories) => createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, categories)