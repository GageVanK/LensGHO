import {
  Avatar,
  Paper,
  RingProgress,
  Loader,
  Image,
  Center,
  MantineProvider,
  Text,
  Group,
  Space,
  Divider,
  Accordion,
  rem,
  Container,
  List,
} from "@mantine/core";

export function GHO() {
  return (
    <>
      <Container size="xl">
        <Paper>
          <Group>
            <Image
              mah={555}
              fit="contain"
              radius="md"
              src="https://pbs.twimg.com/profile_images/1626214565586341888/c47OgI-R_400x400.jpg"
            />

            <div>
              <Text fw={555} fz={66}>
                GHO Stablecoin
              </Text>
            </div>
          </Group>
        </Paper>
      </Container>

      <Space h="xl" />

      <Paper
        withBorder
        radius="md"
        p="lg"
        style={{ backgroundColor: "rgba(212, 177, 250, 0.68)" }}
      >
        <Group justify="right">
          <Text fw={700} size="lg" ta="right">
            GHO Who?
          </Text>

          <Avatar
            size="xl"
            radius="md"
            src="https://pbs.twimg.com/profile_images/1626214565586341888/c47OgI-R_400x400.jpg"
          />
        </Group>
        <Space h="md" />
        <Group justify="center">
          <List size="md">
            <List.Item>
              GHO is a decentralized, overcollateralized stablecoin native to
              the Aave Protocol.
            </List.Item>
            <Space h="xs" />
            <List.Item>
              Launched on Ethereum Mainnet, available as an ERC20-Token.
            </List.Item>
            <Space h="xs" />
            <List.Item>GHO is pegged to the value of the US Dollar.</List.Item>
            <Space h="xs" />
            <List.Item>Users can mint GHO by supplying collateral.</List.Item>
            <Space h="xs" />
            <List.Item>GHO is fully governed by the Aave DAO.</List.Item>
          </List>
        </Group>
        <Space h="xl" />
      </Paper>

      <Space h="xs" />

      <Paper radius="md" p="xs">
        <Group justify="left">
          <Avatar
            size="xl"
            radius="md"
            src="https://pbs.twimg.com/profile_images/1626214565586341888/c47OgI-R_400x400.jpg"
          />
          <div>
            <Text fw={700} size="lg" ta="right">
              GHO What?
            </Text>
          </div>
        </Group>
        <Space h="md" />
        <Container>
          <Accordion
            variant="separated"
            radius="xl"
            transitionDuration={555}
            defaultValue="1"
          >
            <Accordion.Item value="1">
              <Accordion.Control>How do you mint GHO?</Accordion.Control>
              <Accordion.Panel>
                GHO is minted by borrowers and suppliers who use assets
                they&apos;ve provided as collateral in V3 on Ethereum markets.
                They create new GHO while still earning interest on the assets
                they used as collateral.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="2">
              <Accordion.Control>
                How is the value of GHO kept stable?
              </Accordion.Control>
              <Accordion.Panel>
                The stability of GHO is maintained by market efficiencies. If
                the value of GHO goes above $1, the market would adjust it back
                to $1 through arbitrage, where people swap GHO for other
                stablecoins to make a profit. On the other hand, if the value
                drops below $1, it becomes profitable to repay debt, leading to
                a decrease in the total supply of GHO. This reduction in supply
                helps restore the peg and keeps GHO&apos;s value stable.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="3">
              <Accordion.Control>
                Which assets can be used as collateral?
              </Accordion.Control>
              <Accordion.Panel>
                Assets that are available in the Aave Protocol can be used to
                back GHO.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="4">
              <Accordion.Control>Who manages the GHO supply?</Accordion.Control>
              <Accordion.Panel>
                The Aave DAO will manage the supply of GHO, the interest and
                determine risk parameters.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="5">
              <Accordion.Control>
                What is a Facilitator and what does it mean for GHO?
              </Accordion.Control>
              <Accordion.Panel>
                GHO introduces the concept of Facilitators. A Facilitator (e.g.,
                a protocol, an entity, etc.) has the ability to trustlessly mint
                (and burn) GHO tokens. To be added as a Facilitator they would
                have to be approved by Aave Governance. Various Facilitators
                will be able to apply different strategies to their generation
                of GHO.
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Container>
        <Space h="xs" />
      </Paper>

      <Space h="xs" />

      <Paper radius="md" p="lg"  style={{ backgroundColor: "rgba(212, 177, 250, 0.68)" }}>
        <Group justify="right">
          <Text fw={700} size="lg" ta="right">
            GHO When?
          </Text>

          <Avatar
            size="xl"
            radius="md"
            src="https://pbs.twimg.com/profile_images/1626214565586341888/c47OgI-R_400x400.jpg"
          />
        </Group>
        <Space h="md" />
        
        <Image  mah={999}
        width="100%"
          fit="contain"
          radius="xl"
            src="https://docs-gho.vercel.app/assets/images/GHO_Architecture_dark-251977e57951155204cec015824d2e1b.png#gh-dark-mode-only"/>
        <Space h="xs" />
      </Paper>

      <Space h="xs" />

      <Paper radius="md" p="lg">

        <Group justify="left">
        <Avatar
            size="xl"
            radius="md"
            src="https://pbs.twimg.com/profile_images/1626214565586341888/c47OgI-R_400x400.jpg"
          />

          <Text fw={700} size="lg" ta="right">
            GHO Where?
          </Text>
          
        </Group>
        <Space h="md" />

       
          <Group justify="center">
          <Text>GHO visit <a target="_blank" rel="noopener noreferrer" href="https://gho.aave.com">Aave Protocol</a>.</Text>
          <Space h="xs" />
          </Group>
        
        <Group justify="center">
          <iframe
            src="https://gho.infura-ipfs.io/ipfs/QmVFGEyoMTaoYnMCL9oDEg2zwaxK9G2T2vqEHUN7tu8Qtk"
            width="77%"
            height="555px"
            style={{ border: "none", borderRadius: "10px" }}
          />
        </Group>
        <Space h="xs" />
        
      </Paper>

      <Space h="md" />
    </>
  );
}
