'use client';

import { Button, Container, Title } from '@mantine/core';
import { usePathname, useRouter } from 'next/navigation';

import EmptyLogo from '../../assets/empty.svg';
import Image from 'next/image';
import { useEmptyPageStyles } from '@/components/emptyPage/styles';

export const EmptyPage = ({ isFromVacancies }: { isFromVacancies?: boolean }) => {
  const { classes } = useEmptyPageStyles();
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Container className={classes.emptyPageWrapper}>
      <Image src={EmptyLogo} alt={'empty'} />
      <Title className={classes.emptyPageTitle}>Упс, здесь еще ничего нет!</Title>
      {!isFromVacancies && (
        <Button
          className={classes.btn}
          variant="light"
          onClick={() => (pathname === '/vacancies' ? router.refresh() : router.push('/vacancies'))}
        >
          Поиск Вакансий
        </Button>
      )}
    </Container>
  );
};
