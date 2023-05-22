'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

import Vacancy from '@/pages/vacancy/vacancy';

export default function VacancyWrapper() {
  const pathname = usePathname();

  const id = pathname?.split('/')[2];

  return id && <Vacancy id={id} />;
}
