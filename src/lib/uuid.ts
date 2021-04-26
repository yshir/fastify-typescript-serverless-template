import * as uuid from 'uuid';

export const UUID_REGEX = /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/;

export const genUuid = (): string => {
  return uuid.v4();
};

export const isUuid = (val: unknown): boolean => {
  if (typeof val !== 'string') {
    return false;
  }
  return UUID_REGEX.test(val);
};
