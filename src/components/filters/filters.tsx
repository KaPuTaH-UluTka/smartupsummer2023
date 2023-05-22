import { useEffect, useState } from 'react';
import { useForm } from '@mantine/form';
import { UnstyledButton, Menu, Group, Container, Title, Button, ScrollArea } from '@mantine/core';
import { IconChevronDown, IconPlus } from '@tabler/icons-react';
import { useFiltersStyles } from '@/components/filters/styles';
import { SalaryInputs } from '@/components/filters/salaryInputs/salaryInputs';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux';
import { superJobApi } from '@/store/api/api';
import { setCatalogues } from '@/store/reducers/cataloguesReducer';
import { CataloguesResponse } from '@/utils/types';
import {
  resetFilters,
  setCurrentCatalog,
  setPaymentFrom,
  setPaymentTo,
} from '@/store/reducers/filtersReducer';
import { TestAttributes } from '@/utils/testAttributes';
import { useVacancies } from '@/utils/hooks/useVacancies';

export function Filters() {
  const dispatch = useAppDispatch();
  const [opened, setOpened] = useState(false);
  const { classes } = useFiltersStyles({ opened });
  const { catalogues } = useAppSelector((state) => state.cataloguesReducer);
  const { token } = useAppSelector((state) => state.tokenReducer);
  const [cataloguesTrigger, { data: cataloguesResponse }] = superJobApi.useLazyGetCataloguesQuery();

  const { submitHandler } = useVacancies();

  useEffect(() => {
    if (!catalogues && token) {
      cataloguesTrigger();
      dispatch(setCatalogues(cataloguesResponse));
    }
  }, [catalogues, cataloguesResponse, cataloguesTrigger, dispatch, token]);

  const form = useForm({
    initialValues: {
      catalogue: '',
      paymentFrom: '',
      paymentTo: '',
    },
  });

  const currentCatalogSetter = (catalogue: CataloguesResponse) => {
    form.setFieldValue('catalogue', catalogue.title_rus);
    dispatch(setCurrentCatalog(catalogue));
  };

  const changeHandler = () => {
    dispatch(setPaymentFrom(+form.values.paymentFrom));
    dispatch(setPaymentTo(+form.values.paymentTo));
  };

  const clearFilters = () => {
    form.reset();
    dispatch(resetFilters());
  };

  return (
    <Container className={classes.filtersWrapper}>
      <form
        className={classes.filtersForm}
        onSubmit={form.onSubmit(submitHandler)}
        onChange={changeHandler}
      >
        <Container className={classes.resetFiltersWrapper}>
          <Title className={classes.filtersTitle}>Фильтры</Title>
          <Button className={classes.resetFiltersBtn} onClick={clearFilters}>
            Сбросить все
            <IconPlus size="1rem" style={{ transform: 'rotate(45deg)', marginLeft: '10px' }} />
          </Button>
        </Container>
        <Title className={classes.filtersSubTitle}>Отрасль</Title>
        <Menu
          onOpen={() => setOpened(true)}
          onClose={() => setOpened(false)}
          data-elem={TestAttributes.industrySelect}
          radius="md"
          width="target"
          withinPortal
        >
          <Menu.Target>
            <UnstyledButton className={classes.industry}>
              <Group spacing="xs">
                {form.values.catalogue ? (
                  <span className={classes.industryLabel}>{form.values.catalogue}</span>
                ) : (
                  <span className={classes.industryLabelEmpty}>Выберите отрасль</span>
                )}
              </Group>
              <IconChevronDown size="1.5rem" className={classes.industryIcon} />
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            <ScrollArea h={250}>
              {catalogues &&
                catalogues.map((item) => (
                  <Menu.Item onClick={() => currentCatalogSetter(item)} key={item.key}>
                    {item.title_rus}
                  </Menu.Item>
                ))}
            </ScrollArea>
          </Menu.Dropdown>
        </Menu>
        <Title className={classes.filtersSubTitle}>Оклад</Title>
        <SalaryInputs form={form} />
      </form>
    </Container>
  );
}
