// @flow
import { useState } from 'react';

const useFormInput = (initialValue: any) => {
  const [value, setValue] = useState<any>(initialValue);

  return {
    value,
    setValue,
    bind: {
      value,
      onChange: (event: SyntheticInputEvent<>) => {
        setValue(event.target.value);
      },
    },
  };
};

export default useFormInput;
