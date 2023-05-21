import { useState } from 'react';
import { Header, Container, Group, Burger, Paper, Transition } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import Logo from '../../assets/logo.svg';
import Image from 'next/image';
import { HEADER_HEIGHT, headerStyles } from '@/components/header/styles';
import { usePathname } from 'next/navigation';

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function PageHeader({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const pathname = usePathname();
  const [active, setActive] = useState(pathname);
  const { classes, cx } = headerStyles();

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={() => {
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header} size={'lg'}>
        <Image src={Logo} alt="logo" width={141} height={36} />
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
