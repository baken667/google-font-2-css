import { Container, Flex, Icon, Link } from "@chakra-ui/react";
import { CONFIG } from "../../config";
import { ExternalLinkIcon } from "lucide-react";

function Footer() {
  return (
    <Flex
      as="footer"
      borderTop="1px"
      _light={{
        bg: "gray.100",
        borderColor: "gray.200",
      }}
      _dark={{
        bg: "gray.900",
        borderColor: "gray.700",
      }}
    >
      <Container maxW="container.xl" py="6">
        <Flex justify="space-between">
          <p>© {new Date().getFullYear()} GoogleFont2CSS</p>
          <Link href={CONFIG.GITHUB_URL} display="flex" alignItems="center" gap="2" isExternal>
            <p>Github</p>
            <Icon as={ExternalLinkIcon} h="4" w="4" />
          </Link>
        </Flex>
      </Container>
    </Flex>
  );
}
export default Footer;
