/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

export const isUuid = (val: any): boolean => {
  if (typeof val !== 'string') {
    return false;
  }

  const regex = '^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$';
  return new RegExp(regex).test(val);
};
