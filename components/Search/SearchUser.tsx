import {
  Modal,
  TextInput,
  Space,
  Text,
  Group,
  Loader,
  UnstyledButton,
  Avatar,
} from "@mantine/core";
import { useState} from "react";
import Link from "next/link";
import { useSearchProfiles, LimitType } from '@lens-protocol/react-web';
import { IconSearch, IconX } from "@tabler/icons-react";
import classes from "./Search.module.css";
import { useDisclosure } from '@mantine/hooks';

type SearchResultsProps = {
  query: string;
  closeSearch: () => void; 
};

export const SearchUsers = ({ query }: SearchResultsProps) => {

  const [opened, { open, close }] = useDisclosure(false);
  const [searchInput, setSearchInput] = useState(""); 
  const { data, loading } = useSearchProfiles({ query: searchInput,
    limit: LimitType.Ten });

    
  return (
    <>

      <TextInput
        radius="xl"
        size="sm"
        placeholder="Search"
        variant="filled"
        leftSection={<IconSearch size="1.0rem" />}
        onClick={open}
      />


      <Modal opened={opened} onClose={close} title="Search Lens Users">
      <TextInput
          radius="xl"
          size="sm"
          placeholder="Search"
          variant="filled"
          value={searchInput} 
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          error={data && data.length === 0 && searchInput.length > 0 &&  ("No Users Found")}
          leftSection={<IconSearch size="1.0rem" />}
     
             rightSection={
            searchInput.length > 0 && loading ? (
              <Loader size={19} />
            ) : (
              searchInput.length > 0 && (
                <UnstyledButton
                  mt={5}
                  onClick={() => {setSearchInput("")}}
                >
                  <IconX size="1.1rem" />
                </UnstyledButton>
              )
            )
          }
          
          rightSectionWidth={42}
        />

        <Space h="md" />
       
      {data && data.length > 0 && searchInput.length > 0 && (
        
        <>
        
        {data.map((user: any) => (
          <>
        
              <Group key={user?.id}>
              <UnstyledButton
                component={Link}
                href={`/h/${user.handle?.localName}`}
                className={classes.user}
                onClick={() => {
                  close(); 
                }}
              
              >
                <Group>
                  <Avatar
                    alt={`${user.handle?.localName}'s profile picture`}
                    // @ts-ignore
                    src={
                      user.metadata?.picture &&
                      "optimized" in user.metadata?.picture
                        ? user.metadata?.picture.optimized?.uri
                        : "https://gw.ipfs-lens.dev/ipfs/bafybeidkewnnnisaqmwk7ornt6fymjddlkhlou2tsfhaxxnird4w4yrebe"
                    }
                    radius="xl"
                  />

                  <div style={{ flex: 1 }}>
                    <Text size="sm" fw={500}>
                      {user.metadata?.displayName || user.handle?.localName}
                    </Text>

                    <Text c="dimmed" size="xs">
                      @{user.handle?.localName}
                    </Text>
                  </div>
                </Group>
              </UnstyledButton>
              </Group>
              <Space h="md" />

</>
            ))}
        
     </>
     )}
      </Modal>
      


    </>
  );
};