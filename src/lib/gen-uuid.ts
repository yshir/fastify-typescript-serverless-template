import uuid from 'uuid';

export const genUuid = (): string => {
  return uuid.v4();
};
