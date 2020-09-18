import { overwriteLocale } from './string';
import { getVersions } from 'actions/operatorActions';

export const getRemoteVersion = async () => {
  return await getVersions()
}

export const getLocalVersions = () => {
  const versions = localStorage.getItem('versions') || '{}';
  return JSON.parse(versions);
}

export const setLocalVersions = (versions) => {
  localStorage.setItem('versions', JSON.stringify(versions));
}

export const initializeStrings = () => {
  const stringsJson = localStorage.getItem('strings') || '{}';
  const strings = JSON.parse(stringsJson);
  Object.entries(strings).forEach(([key, overwrites]) => {
    overwriteLocale(key, overwrites);
  })
}