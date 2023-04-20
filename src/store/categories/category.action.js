import { createAction } from "../../utils/reducer/reducer";
import {CATEGORY_ACTION_TYPES} from "./category.types";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase";

export const fetchCategoriesStart = () =>
    createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START)
export const fetchCategoriesSuccess = (categories) =>
    createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories)
export const fetchCategoriesFailed = (error) =>
    createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
export const fetchCategoriesAsync = (dispatch) => async (dispatch) => {
    dispatch(fetchCategoriesStart())
    try {
        const categoryMap = await getCategoriesAndDocuments('categories');
        fetchCategoriesSuccess(categoryMap)
    } catch (error) {
        fetchCategoriesFailed(error)
    }

}
