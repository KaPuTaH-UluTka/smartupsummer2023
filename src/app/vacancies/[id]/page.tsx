'use client';
import React from 'react';
import { Container } from '@mantine/core';
import { VacancyCard } from '@/components/vacancyCard/vacancyCard';
import { notFound, usePathname } from 'next/navigation';
import { superJobApi } from '@/store/api/api';
import { useVacancyStyles } from '@/app/vacancies/[id]/styles';

import './styles.css';
import { EmptyPage } from '@/components/emptyPage/emptyPage';
import { useLoading } from '@/utils/hooks/useLoading';

export default function Vacancy() {
  const pathname = usePathname();

  const id = pathname.slice(1);

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
}
