import { Select, SelectProps } from '@/components/Commons';
import { Controller, useFormContext } from 'react-hook-form';

const RHFSelect = <T extends string | string[]>(props: SelectProps<T> & { name: string }) => {
  const { control } = useFormContext();

  return (
    <Controller
      render={({ field, fieldState }) => (
        <Select
          error={fieldState.error?.message}
          {...props}
          {...field}
          onChange={(...event: Parameters<NonNullable<SelectProps<T>['onChange']>>) => {
            props.onChange && props.onChange(...event);
            field.onChange(...event);
          }}
        />
      )}
      name={props.name || ''}
      control={control}
    />
  );
};

export default RHFSelect;
