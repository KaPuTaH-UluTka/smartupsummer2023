'use client';
import { Container, Title } from '@mantine/core';
import { IconStar, IconStarFilled, IconMapPin, IconPointFilled } from '@tabler/icons-react';
import { useVacancyCardStyles } from '@/components/vacancyCard/styles';
import { useState } from 'react';
import { salaryStringBuilder } from '@/utils/salaryStringBuilder';
import { useRouter } from 'next/navigation';
import { TestAttributes } from '@/utils/testAttributes';
import { favoritesChecher, favoritesUpdater } from '@/utils/helpers/favorites';
type VacancyCardProps = {
  vacancy: {
    id: number;
    profession: string;
    firm_name: string;
    town: { title: string };
    type_of_work: { title: string };
    payment_from: number;
    payment_to: number;
    currency: string;
  };
  isVacancyPage?: boolean;
};

export const VacancyCard = ({ vacancy, isVacancyPage }: VacancyCardProps) => {
  const { classes } = useVacancyCardStyles();

  const router = useRouter();

  const { id, profession, town, type_of_work, payment_from, payment_to, currency } = vacancy;

  const [isFavorite, setIsFavorite] = useState(favoritesChecher(id));

  const favoriteToggleHandler = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    favoritesUpdater(id);
  };

  const openVacancy = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    router.push(`/vacancies/${id}`);
  };

  return (
    <Container
      className={classes.cardWrapper}
      onClick={(e) => !isVacancyPage && openVacancy(e)}
      data-elem={TestAttributes.vacancy + id}
    >
      <Container className={classes.cardTitleWrapper}>
        <Title className={classes.cardTitle}>{profession}</Title>
        {isFavorite ? (
          <IconStarFilled
            data-elem={TestAttributes.vacancy + id + TestAttributes.shortlistButton}
            className={classes.favoriteToggleActive}
            onClick={(e) => favoriteToggleHandler(e)}
          />
        ) : (
          <IconStar
            data-elem={TestAttributes.vacancy + id + TestAttributes.shortlistButton}
            className={classes.favoriteToggle}
            onClick={(e) => favoriteToggleHandler(e)}
          />
        )}
      </Container>
      <Container className={classes.cardSalaryWrapper}>
        <Title className={classes.cardSalary}>
          {salaryStringBuilder(payment_from, payment_to, currency)}
        </Title>
        <IconPointFilled className={classes.separatorIcon} />
        <Title className={classes.typeOfWork}>{type_of_work.title}</Title>
      </Container>
      <Container className={classes.locationWrapper}>
        <IconMapPin className={classes.locationIcon} />
        <Title className={classes.location}>{town.title}</Title>
      </Container>
    </Container>
  );
};
