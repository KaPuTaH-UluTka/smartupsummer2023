import { useState } from 'react';
import { useForm } from '@mantine/form';
import { UnstyledButton, Menu, Group, Container, Title, Button } from '@mantine/core';
import { IconChevronDown, IconPlus } from '@tabler/icons-react';
import { useFiltersStyles } from '@/components/filters/styles';
import { SalaryInputs } from '@/components/filters/salaryInputs/salaryInputs';

const data = [
  { label: 'English' },
  { label: 'German' },
  { label: 'Italian' },
  { label: 'French' },
  { label: 'Polish' },
];

export function Filters() {
  const form = useForm({
    initialValues: {
      industry: '',
      minSalary: '',
      maxSalary: '',
    },
  });
  const [opened, setOpened] = useState(false);
  const { classes } = useFiltersStyles({ opened });

  const items = data.map((item) => (
    <Menu.Item onClick={() => form.setFieldValue('industry', item.label)} key={item.label}>
      {item.label}
    </Menu.Item>
  ));

  const submitHandler = (data: { industry: string; minSalary: string; maxSalary: string }) => {
    console.log(data);
  };

  return (
    <Container className={classes.filtersWrapper}>
      <form className={classes.filtersForm} onSubmit={form.onSubmit(submitHandler)}>
        <Container className={classes.resetFiltersWrapper}>
          <Title className={classes.filtersTitle}>Фильтры</Title>
          <Button className={classes.resetFiltersBtn} onClick={form.reset}>
            Сбросить все
            <IconPlus size="1rem" style={{ transform: 'rotate(45deg)', marginLeft: '10px' }} />
          </Button>
        </Container>
        <Title className={classes.filtersSubTitle}>Отрасль</Title>
        <Menu
          onOpen={() => setOpened(true)}
          onClose={() => setOpened(false)}
          radius="md"
          width="target"
          withinPortal
        >
          <Menu.Target>
            <UnstyledButton className={classes.industry}>
              <Group spacing="xs">
                {form.values.industry ? (
                  <span className={classes.industryLabel}>{form.values.industry}</span>
                ) : (
                  <span className={classes.industryLabelEmpty}>Выберите отрасль</span>
                )}
              </Group>
              <IconChevronDown size="1.5rem" className={classes.industryIcon} />
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>{items}</Menu.Dropdown>
        </Menu>
        <Title className={classes.filtersSubTitle}>Оклад</Title>
        <SalaryInputs form={form} />
        <Button type={'submit'} className={classes.submitBtn}>
          Применить
        </Button>
      </form>
    </Container>
  );
}
