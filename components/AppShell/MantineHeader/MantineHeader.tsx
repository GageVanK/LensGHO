import {
    Group,
    Text,
    Box,
    Container,
  } from '@mantine/core';
import classes from './MantineHeader.module.css';
import { ConnectKitButton } from 'connectkit';
import Link from 'next/link';
import { SearchUsers } from '@/components/Search/SearchUser';


const links = [
  { link: '/', label: 'Home' },
  { link: '/profile', label: 'Profile' },
  { link: '/gho', label: 'GHO' },
];


  export function MantineHeader() {
   

    const items = links.map((link) => (
      <Link
        key={link.label}
        href={link.link}
        className={classes.link} >
        {link.label}
      </Link>
    ));
  
    return (
      <Box>
        <Container size="lg">
        <header>
          <Group justify="space-between" h="100%">
            <Group>
              <Text size="xl">
              LensGHO

              </Text>
            

            <Group visibleFrom="sm" >
            {items}
            </Group>
            </Group>
                
            <Group h="100%" visibleFrom="sm">
              {/* @ts-ignore */}
            <SearchUsers />

            
            <ConnectKitButton />
            </Group>
  
            
      
             
            
            <Group hiddenFrom="sm">
            <ConnectKitButton />
            </Group>
          </Group>
        </header>
  
     
        </Container>
      </Box>
    );
  }