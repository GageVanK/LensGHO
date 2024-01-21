'use client'

import { useAccount } from 'wagmi'
import { useLogin, useProfiles, profileId, useSession } from "@lens-protocol/react-web";
import { Avatar, Image, Container, Group, Paper, SimpleGrid, Space, Text, Card } from '@mantine/core';
import React from 'react';
import styles from "./Profile.module.css";
import { ConnectKitButton } from 'connectkit';

export default function ProfileWrapper() {

  const { address } = useAccount();
  if (!address) {
    return (
      <>
      <Space h={111} />
      
      <Group justify="center">
      <Paper shadow="xl" withBorder p="xl" radius="xl">
        <Text 
          fw={666}
          ta="center"
          variant="gradient"
          gradient={{ from: 'rgba(201, 123, 237, 1)', to: 'rgba(239, 186, 255, 1)', deg: 90 }}>
            Connect Wallet to view your Stats.
        </Text>

      <Space h="sm" />

      <Group justify="center">
        <ConnectKitButton />
        </Group>
      </Paper>
      </Group>
      </>
    );
  }
  

  return (
    
    <Profile
      address={address}
    />
  )
}

function Profile({ address }) {
  const { execute: login } = useLogin();
  const { data } = useProfiles({
    where: {
      ownedBy: [address],
    },
  })

  
   
  const formatDate = (createdAt) => {
    // @ts-ignore
    const createdAtDate = new Date(createdAt);
  
    // Format the date to display only Month Day, Year
    const formattedDate = createdAtDate.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  
    return formattedDate;
  };
         
           const replaceURLs = (text: string) => {
             const urlRegex = /(https?:\/\/[^\s]+)/g;
             const atSymbolRegex = /(\S*@+\S*)/g;
         
             return text
               .replace(
                 urlRegex,
                 (url: any) => `<a href="${url}" target="_blank">${url}</a>`,
               )
               .replace(atSymbolRegex, (match: any) => ` ${match} `);
           };

  return (
    <>
    
   


   <Group justify="center">
   
      {address && data && data.length > 0 ? (
         data.map((profile) => (
          <>

          <Container>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              
              <Image
                // @ts-ignore
                alt={`${profile?.handle?.localName}'s cover photo`}
                // @ts-ignore, image is there
                src={profile?.metadata?.coverPicture?.optimized?.uri}
                height={333}
                fallbackSrc="https://pbs.twimg.com/profile_banners/1623341641149939713/1704475311/1500x500"
              />
            </Card.Section>
  
        <Group>
            <>
            <Avatar
              alt={`${profile?.handle?.localName}'s profile picture`}
              // @ts-ignore
              src={
                profile?.metadata?.picture &&
                "optimized" in profile?.metadata?.picture
                  ? profile?.metadata?.picture.optimized?.uri
                  : "https://gw.ipfs-lens.dev/ipfs/bafybeidkewnnnisaqmwk7ornt6fymjddlkhlou2tsfhaxxnird4w4yrebe"
              }
              className={styles.avatar}
              size={123}
              radius="md"
             
              mt={-55}
            />
            </>
  
         
       
  
            <div>
           
              <Text fw={500}>{profile?.metadata?.displayName}</Text>
            
  @{profile?.handle?.localName}
            </div>
            </Group>
            <Space h="xl" />
  
       
  
  
  
              {profile?.metadata?.bio && (
                <>
  
            <Paper p="lg" radius="md">
              <Text
                fz="lg"
                style={{
                  maxWidth: "100%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  textAlign: "center",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    
                    profile?.metadata?.bio
                      ? replaceURLs(
                          profile.metadata.bio.replace(/\n/g, "<br> "),
                        )
                      : "",
                }}
              />
  
  <Space h="xl" />
  
  <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: 'xl' }}
        verticalSpacing={{ base: 'md', sm: 'xl' }} >
  
        <Paper shadow="sm" p="lg" radius="md" >
            <Text fw={500} size="lg" ta="center">
                 Created On
                </Text>
                <Text fw={500} c="dimmed" ta="center">
                {formatDate(profile?.createdAt)}
                </Text>
                </Paper>
       
        <Paper shadow="sm" p="lg" radius="md" >
            <Text fw={500} size="lg" ta="center">
                 Followers
                </Text>
                <Text fw={500} c="dimmed" ta="center">
                  {profile?.stats.followers}
                </Text>
                </Paper>
     
        <Paper shadow="sm" p="lg" radius="md" >
                <Text fw={500} size="lg" ta="center">
                 Following
                </Text>
                <Text fw={500} c="dimmed" ta="center">
                  {profile?.stats.following}
                </Text>
                </Paper>
  
  
        <Paper shadow="sm" p="lg" radius="md" >
                <Text fw={500} size="lg" ta="center">
                 Publications
                </Text>
                <Text fw={500} c="dimmed" ta="center">
                  {profile?.stats.publications}
                </Text>
                </Paper>
        
        <Paper shadow="sm" p="lg" radius="md" >
                <Text fw={500} size="lg" ta="center">
                 Upvotes
                </Text>
                <Text fw={500} c="dimmed" ta="center">
                  {profile?.stats.upvotes}
                </Text>
                </Paper>
       
        <Paper shadow="sm" p="lg" radius="md" >
                <Text fw={500} size="lg" ta="center">
                 Comments
                </Text>
                <Text fw={500} c="dimmed" ta="center">
                  {profile?.stats.comments}
                </Text>
                </Paper>
       
        <Paper shadow="sm" p="lg" radius="md" >
                <Text fw={500} size="lg" ta="center">
                 Mirror
                </Text>
                <Text fw={500} c="dimmed" ta="center">
                  {profile?.stats.mirrors}
                </Text>
                </Paper>
     
        <Paper shadow="sm" p="lg" radius="md" >
                <Text fw={500} size="lg" ta="center">
                 Collects
                </Text>
                <Text fw={500} c="dimmed" ta="center">
                  {profile?.stats.collects}
                </Text>
                </Paper>
      
        <Paper shadow="sm" p="lg" radius="md" >
                <Text fw={500} size="lg" ta="center">
                 Quotes
                </Text>
                <Text fw={500} c="dimmed" ta="center">
                  {profile?.stats.quotes}
                </Text>
                </Paper>
       
      </SimpleGrid>
  
  
            </Paper>
  
            <Space h="xl" />
            </>
  )}
  
    
         
  
           
          </Card>
          </Container>

          </>
         ))
      ) : (
        <>
        No Lens Profile for Address
        </>
      )}
   
    </Group>
    </>
  )
}