'use client';
import React from 'react';
import { Container } from '@mantine/core';
import { VacancyCard } from '@/components/vacancyCard/vacancyCard';
import { notFound, usePathname } from 'next/navigation';
import { superJobApi } from '@/store/api/api';
import { useVacancyStyles } from '@/app/[id]/styles';

import './styles.css';

export default function Vacancy() {
  const pathname = usePathname();

  const id = pathname.slice(1);

  const { data, isError } = superJobApi.useGetOneVacancyQuery(id);

  const { classes } = useVacancyStyles();

  if (!isError) {
    notFound();
  }

  return (
    <Container className={classes.vacancyWrapper}>
      {data && (
        <>
          <VacancyCard vacancy={data} />
          <Container className={classes.vacancyInfo}>
            {data.vacancyRichText && (
              <div dangerouslySetInnerHTML={{ __html: data.vacancyRichText }} />
            )}
          </Container>
        </>
      )}
    </Container>
  );
}
