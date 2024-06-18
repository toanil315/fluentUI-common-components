import { Field, Checkbox as FuiCheckbox, mergeClasses } from '@fluentui/react-components';
import { useCheckboxBaseStyles, useCheckboxGroupStyles, useCheckboxStyles } from './style';
import { CheckboxGroupProps, CheckboxProps } from './types';
import { Fragment, useEffect, useState } from 'react';

export const Checkbox = ({ size = 'medium', ...restProps }: CheckboxProps) => {
  const checkboxBaseClassName = useCheckboxBaseStyles();
  const checkboxClassNames = useCheckboxStyles();

  return (
    <FuiCheckbox
      className={mergeClasses(
        checkboxBaseClassName,
        size === 'small' && checkboxClassNames.checkboxSmall,
        size === 'medium' && checkboxClassNames.checkboxMedium,
        size === 'large' && checkboxClassNames.checkboxLarge,
      )}
      {...restProps}
    />
  );
};

Checkbox.Group = ({
  items,
  size = 'medium',
  value,
  onChange,
  direction = 'row',
  label,
  required,
}: CheckboxGroupProps) => {
  const checkboxGroupClassNames = useCheckboxGroupStyles();
  const [internalValues, setInternalValues] = useState<Set<string>>(new Set(value || []));

  useEffect(() => {
    setInternalValues(new Set(value || []));
  }, [value]);

  const handleChange = (itemValue: string) => {
    if (internalValues.has(itemValue)) {
      internalValues.delete(itemValue);
    } else {
      internalValues.add(itemValue);
    }
    setInternalValues(new Set(internalValues));
    onChange && onChange(Array.from(internalValues));
  };

  const renderItems = () => {
    return items.map((item) => {
      return (
        <Fragment key={item.value}>
          <Field>
            <Checkbox
              label={item.label}
              size={size}
              checked={internalValues.has(item.value)}
              onChange={() => handleChange(item.value)}
            />
          </Field>
        </Fragment>
      );
    });
  };

  return (
    <Field
      size={size}
      label={label}
      required={required}
    >
      <div
        className={mergeClasses(
          checkboxGroupClassNames.group,
          direction === 'row' && checkboxGroupClassNames.groupHorizontal,
          direction === 'column' && checkboxGroupClassNames.groupVertical,
        )}
      >
        {renderItems()}
      </div>
    </Field>
  );
};
