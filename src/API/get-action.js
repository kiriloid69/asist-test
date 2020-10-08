import {urlData} from './url';

export const getData = (typeOfData) => fetch(urlData + typeOfData).then((response) => response.json());
