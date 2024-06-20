import { Fragment } from 'react';
import { SelectProps } from './types';
import {
  Combobox,
  ComboboxProps,
  Field,
  Option,
  OptionGroup,
  mergeClasses,
} from '@fluentui/react-components';
import { useSelectBaseStyles, useSelectStyles } from './style';

export const Select = <T extends string | string[]>({
  label,
  required,
  error,
  size = 'medium',
  options,
  value,
  onChange,
  ...restProps
}: SelectProps<T>) => {
  const selectBaseClassName = useSelectBaseStyles();
  const selectClassNames = useSelectStyles();

  const handleChange: ComboboxProps['onOptionSelect'] = (_, data) => {
    if (restProps.multiselect) {
      onChange && onChange(data.selectedOptions as T);
      return;
    }
    onChange && onChange(data.optionText as T);
  };

  const renderOptions = () => {
    return options.map((option, index) => {
      if (option.group) {
        return (
          <OptionGroup
            key={option.group.label}
            label={option.group.label}
          >
            {option.group.options.map((subOption, subIndex) => {
              const alternativeKey = `${index}-${subIndex}`;

              return (
                <Fragment key={subOption.value}>
                  <Option
                    className={mergeClasses(
                      size === 'small' && selectClassNames.optionSmall,
                      size === 'medium' && selectClassNames.optionMedium,
                      size === 'large' && selectClassNames.optionLarge,
                    )}
                    text={subOption.value || alternativeKey}
                    value={subOption.value || alternativeKey}
                    disabled={subOption.disabled}
                  >
                    {subOption.label || 'Empty Label'}
                  </Option>
                </Fragment>
              );
            })}
          </OptionGroup>
        );
      }

      return (
        <Fragment key={option.value}>
          <Option
            className={mergeClasses(
              size === 'small' && selectClassNames.optionSmall,
              size === 'medium' && selectClassNames.optionMedium,
              size === 'large' && selectClassNames.optionLarge,
            )}
            text={option.value || String(index)}
            disabled={option.disabled}
          >
            {option.label || 'Empty Label'}
          </Option>
        </Fragment>
      );
    });
  };

  return (
    <Field
      label={label}
      required={required}
      size={size}
      {...(Boolean(error)
        ? {
            validationState: 'error',
            validationMessage: error,
          }
        : {})}
    >
      <Combobox
        className={mergeClasses(
          selectBaseClassName,
          size === 'small' && selectClassNames.small,
          size === 'medium' && selectClassNames.medium,
          size === 'large' && selectClassNames.large,
          Boolean(error) && selectClassNames.error,
        )}
        {...restProps}
        onOptionSelect={handleChange}
        selectedOptions={Array.isArray(value) ? value : [value || '']}
        {...(restProps.multiselect && Array.isArray(value) ? { value: value.join(', ') } : {})}
      >
        {renderOptions()}
      </Combobox>
    </Field>
  );
};
