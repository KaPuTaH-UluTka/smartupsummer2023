import { Container, Input, NumberInput } from '@mantine/core';
import { GRAY_COLORS } from '@/utils/colors';

import { useInputsStyles } from '@/components/filters/salaryInputs/styles';
import { UseFormReturnType } from '@mantine/form/lib/types';
import { useCounter } from '@mantine/hooks';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useEffect } from 'react';

type SalaryInputsPropsType = {
  form: UseFormReturnType<
    { industry: string; minSalary: string; maxSalary: string },
    (values: { industry: string; minSalary: string; maxSalary: string }) => {
      industry: string;
      minSalary: string;
      maxSalary: string;
    }
  >;
};

export const SalaryInputs = (props: SalaryInputsPropsType) => {
  const { form } = props;

  const { classes } = useInputsStyles();

  const rightSection = (field: string, value: string) => {
    return (
      <Container className={classes.inputToggles}>
        <IconChevronUp
          size="0.9rem"
          className={classes.inputToggleIcon}
          onClick={() => form.setFieldValue(field, +value + 1)}
        />
        <IconChevronDown
          size="0.9rem"
          className={classes.inputToggleIcon}
          onClick={() => {
            if (+value > 0) form.setFieldValue(field, +value - 1);
          }}
        />
      </Container>
    );
  };

  return (
    <>
      <NumberInput
        className={classes.salary}
        size="md"
        sx={{ input: { borderColor: GRAY_COLORS.GREY300 } }}
        placeholder="От"
        {...form.getInputProps('minSalary')}
        rightSection={rightSection('minSalary', form.values.minSalary)}
        min={0}
      />
      <NumberInput
        className={classes.salary}
        size="md"
        sx={{ input: { borderColor: GRAY_COLORS.GREY300 } }}
        placeholder="До"
        {...form.getInputProps('maxSalary')}
        rightSection={rightSection('maxSalary', form.values.maxSalary)}
        min={0}
      />
    </>
  );
};
