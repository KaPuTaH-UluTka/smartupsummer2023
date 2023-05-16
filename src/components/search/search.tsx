import { TextInput, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useSearchStyles } from '@/components/search/styles';
import { GRAY_COLORS } from '@/utils/colors';
import { useForm } from '@mantine/form';

export function Search() {
  const { classes } = useSearchStyles();
  const form = useForm({
    initialValues: {
      vacancyKeywords: '',
    },
  });
  const submitHandler = (data: { vacancyKeywords: string }) => {
    console.log(data);
  };

  return (
    <form onSubmit={form.onSubmit(submitHandler)}>
      <TextInput
        sx={{
          input: {
            fontSize: '14px',
            ':placeholder': {
              color: GRAY_COLORS.GREY300,
            },
          },
        }}
        icon={<IconSearch size="1.1rem" stroke={1.5} />}
        radius="md"
        size="lg"
        rightSection={
          <Button className={classes.searchBtn} variant="filled" type={'submit'}>
            Поиск
          </Button>
        }
        placeholder="Введите название вакансии"
        rightSectionWidth={83}
        {...form.getInputProps('vacancyKeywords')}
      />
    </form>
  );
}
