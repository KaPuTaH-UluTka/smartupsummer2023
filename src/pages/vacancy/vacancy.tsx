import React from 'react';
import { superJobApi } from '@/store/api/api';
import { useVacancyStyles } from '@/pages/vacancy/styles';
import { useLoading } from '@/utils/hooks/useLoading';
import { Container } from '@mantine/core';
import { EmptyPage } from '@/components/emptyPage/emptyPage';
import { VacancyCard } from '@/components/vacancyCard/vacancyCard';
import './styles.css';

const Vacancy = ({ id }: { id: string }) => {
  const { data, isLoading, isError, isSuccess, isFetching } = superJobApi.useGetOneVacancyQuery(id);

  const { classes } = useVacancyStyles();

  useLoading(isLoading, isSuccess, isError, isFetching);

  return (
    <Container className={classes.vacancyWrapper}>
      {!data && !isLoading ? (
        <EmptyPage />
      ) : (
        <>
          {data && (
            <>
              <VacancyCard vacancy={data} isVacancyPage={true} />
              <Container className={classes.vacancyInfo}>
                {data.vacancyRichText && (
                  <div dangerouslySetInnerHTML={{ __html: data.vacancyRichText }} />
                )}
              </Container>
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default Vacancy;
