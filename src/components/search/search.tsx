import { TextInput, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useSearchStyles } from '@/components/search/styles';
import { GRAY_COLORS } from '@/utils/colors';
import { useForm } from '@mantine/form';
import { useAppDispatch } from '@/utils/hooks/redux';
import { setKeyword } from '@/store/reducers/filtersReducer';
import { TestAttributes } from '@/utils/testAttributes';
import { useVacancies } from '@/utils/hooks/useVacancies';

export function Search() {
  const { classes } = useSearchStyles();

  const dispatch = useAppDispatch();

  const form = useForm({
    initialValues: {
      keyword: '',
    },
  });

  const { isGlobalLoading, submitHandler } = useVacancies();

  return (
    <form
      onSubmit={form.onSubmit(submitHandler)}
      onChange={() => dispatch(setKeyword(form.values.keyword))}
    >
      <TextInput
        data-elem={TestAttributes.searchInput}
        disabled={isGlobalLoading}
        sx={{
          input: {
            fontSize: '14px',
            borderColor: GRAY_COLORS.GREY300,
            ':placeholder': {
              color: GRAY_COLORS.GREY300,
            },
          },
        }}
        icon={<IconSearch size="1.1rem" stroke={1.5} />}
        radius="md"
        size="lg"
        rightSection={
          <Button
            data-elem={TestAttributes.searchButton}
            className={classes.searchBtn}
            disabled={isGlobalLoading}
            variant="filled"
            type={'submit'}
          >
            Поиск
          </Button>
        }
        placeholder="Введите название вакансии"
        rightSectionWidth={83}
        {...form.getInputProps('keyword')}
      />
    </form>
  );
}
