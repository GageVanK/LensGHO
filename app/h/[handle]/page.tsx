'use client'
import {
    useProfile,
  } from "@lens-protocol/react-web";
  import {
    Space,
    Card,
    Group,
    Avatar,
    Text,
    Image,
    Paper,
    SimpleGrid,
    Container,
  } from "@mantine/core";
  import styles from "./Profile.module.css";

 


export default function ProfilePage({
    params
} : {
    params: {
    handle: string
    }
}) {


    const profile = useProfile({
        forHandle: `lens/${params.handle}`,
      });

      console.log(profile)

       // Assuming data.createdAt is a string representing the timestamp
       // @ts-ignore
  const createdAtDate = new Date(profile?.data?.createdAt);

  // Format the date to display only Month Day, Year
  const formattedCreatedAt = createdAtDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
    
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

    return(
        <>
        
       

  
       

         
        </Card>
        </Container>

        <Space h="xl" />
        
       
      
      
    
        </>
    )
}