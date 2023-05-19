import { TextInput, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useSearchStyles } from '@/components/search/styles';
import { GRAY_COLORS } from '@/utils/colors';
import { useForm } from '@mantine/form';
import { superJobApi } from '@/store/api/api';
import { useEffect } from 'react';
import { setCatalogues } from '@/store/reducers/cataloguesReducer';
import { setPages, setVacancies } from '@/store/reducers/vacanciesReducer';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { setKeyword } from '@/store/reducers/filtersReducer';
import { TestAttributes } from '@/utils/testAttributes';
import { setLoadingFalse, setLoadingTrue } from '@/store/reducers/loadingReducer';

export function Search() {
  const { classes } = useSearchStyles();
  const dispatch = useAppDispatch();
  const form = useForm({
    initialValues: {
      keyword: '',
    },
  });

  const { currentCatalog, paymentTo, paymentFrom, keyword } = useAppSelector(
    (state) => state.filtersReducer
  );
  const { globalLoading } = useAppSelector((state) => state.loadingReducer);
  const [vacanciesTrigger, { data: vacanciesResponse, isLoading, isSuccess, isFetching }] =
    superJobApi.useLazyGetVacanciesQuery();

  useEffect(() => {
    if (isLoading) {
      dispatch(setLoadingTrue());
    }
    if (!isFetching && isSuccess) {
      dispatch(setVacancies(vacanciesResponse?.objects));
      dispatch(setPages(vacanciesResponse?.total));
      dispatch(setLoadingFalse());
    }
  }, [
    dispatch,
    isFetching,
    isLoading,
    isSuccess,
    vacanciesResponse?.objects,
    vacanciesResponse?.total,
  ]);

  const submitHandler = () => {
    vacanciesTrigger({
      catalogue: currentCatalog?.key,
      paymentFrom: paymentFrom,
      paymentTo: paymentTo,
      keyword: keyword,
    });
  };

  return (
    <form
      onSubmit={form.onSubmit(submitHandler)}
      onChange={() => dispatch(setKeyword(form.values.keyword))}
    >
      <TextInput
        data-elem={TestAttributes.searchInput}
        disabled={globalLoading}
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
            disabled={globalLoading}
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
