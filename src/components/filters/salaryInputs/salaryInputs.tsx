import { Container, NumberInput } from '@mantine/core';
import { GRAY_COLORS } from '@/utils/colors';

import { useInputsStyles } from '@/components/filters/salaryInputs/styles';
import { UseFormReturnType } from '@mantine/form/lib/types';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useAppDispatch } from '@/utils/hooks';
import { setPaymentFrom, setPaymentTo } from '@/store/reducers/filtersReducer';
import React, { useEffect } from 'react';
import { TestAttributes } from '@/utils/testAttributes';

type SalaryInputsPropsType = {
  form: UseFormReturnType<
    { catalogue: string; paymentFrom: string; paymentTo: string },
    (values: { catalogue: string; paymentFrom: string; paymentTo: string }) => {
      catalogue: string;
      paymentFrom: string;
      paymentTo: string;
    }
  >;
};

export const SalaryInputs = (props: SalaryInputsPropsType) => {
  const { form } = props;
  const dispatch = useAppDispatch();
  const { classes } = useInputsStyles();

  const incrementPayments = (field: string, value: string) => {
    form.setFieldValue(field, +value + 1);
    if (field === 'paymentsFrom') {
      dispatch(setPaymentFrom(+value + 1));
    }
    if (field === 'paymentsTo') {
      dispatch(setPaymentTo(+value + 1));
    }
  };

  const decrementPayments = (field: string, value: string) => {
    if (+value > 0) form.setFieldValue(field, +value - 1);
    if (field === 'paymentsFrom') {
      dispatch(setPaymentFrom(+value - 1));
    }
    if (field === 'paymentsTo') {
      dispatch(setPaymentTo(+value - 1));
    }
  };

  const rightSection = (field: string, value: string) => {
    return (
      <Container className={classes.inputToggles}>
        <IconChevronUp
          size="0.9rem"
          className={classes.inputToggleIcon}
          onClick={() => incrementPayments(field, value)}
        />
        <IconChevronDown
          size="0.9rem"
          className={classes.inputToggleIcon}
          onClick={() => decrementPayments(field, value)}
        />
      </Container>
    );
  };

  return (
    <>
      <NumberInput
        className={classes.salary}
        data-elem={TestAttributes.salaryFromInput}
        size="md"
        sx={{ input: { borderColor: GRAY_COLORS.GREY300 } }}
        placeholder="От"
        {...form.getInputProps('paymentFrom')}
        rightSection={rightSection('paymentFrom', form.values.paymentFrom)}
        min={0}
      />
      <NumberInput
        className={classes.salary}
        data-elem={TestAttributes.salaryToInput}
        size="md"
        sx={{ input: { borderColor: GRAY_COLORS.GREY300 } }}
        placeholder="До"
        {...form.getInputProps('paymentTo')}
        rightSection={rightSection('paymentTo', form.values.paymentTo)}
        min={0}
      />
    </>
  );
};
