import {
  Box,
  Container,
  Flex,
  Icon,
  IconButton,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "lucide-react";
import Github from "../icons/Github";
import { CONFIG } from "../../config";

function Header() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Box
      as="header"
      borderBottom="1px"
      _light={{
        borderColor: "gray.200",
      }}
      _dark={{
        borderColor: "gray.700",
      }}
    >
      <Container maxW="container.xl" py="3">
        <Flex direction="row" justify="space-between" align="center">
          <Box>
            <Text fontWeight="bold" fontSize="xl">
              GoogleFont2CSS
            </Text>
          </Box>
          <Flex gap="2">
            <IconButton
              as="a"
              target="_blank"
              href={CONFIG.GITHUB_URL}
              aria-label="Github link"
              icon={<Icon as={Github} />}
            />
            <IconButton
              aria-label="Toggle color mode"
              icon={
                <Icon
                  h="5"
                  w="5"
                  as={colorMode === "dark" ? SunIcon : MoonIcon}
                />
              }
              onClick={toggleColorMode}
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
export default Header;
