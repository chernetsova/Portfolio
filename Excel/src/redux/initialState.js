import {defaultStyle, defaultTitle} from '@/constants';
import {clone} from '@core/utils';

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  currentText: '',
  currentStyles: defaultStyle,
  stylesState: {},
  openedDate: new Date().toJSON()
};

const normalize = state => ({
  ...state,
  currentStyles: defaultStyle,
  currentText: ''
});

export function normalizeInitialState(state) {
  return state ? normalize(state) : clone(defaultState);
}
