import { createSelector } from 'reselect/es';

import {SELECTOR_ID_PAGE} from "./constants";
import {LanguageProviderStateName} from "./reducer";

/**
 * Direct selector to the languageToggle state domain
 */
const selectLanguage = (state) => state.get(SELECTOR_ID_PAGE);

/**
 * Select the language locale
 */

const makeSelectLocale = () => createSelector(
  selectLanguage,
  (languageState) => languageState.get(LanguageProviderStateName.locale)
);

export {
    selectLanguage,
    makeSelectLocale,
};
