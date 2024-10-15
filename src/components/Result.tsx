import { Box, Button, Flex, Icon, Textarea } from "@chakra-ui/react";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import {
  ClipboardCheckIcon,
  ClipboardCopyIcon,
  DownloadIcon,
} from "lucide-react";
import DownloadFile from "../utils/download-file";

function Result({
  css,
  filename = "font.css",
}: {
  css: string;
  filename?: string;
}) {
  const [copied, copyToClipboard] = useCopyToClipboard();
  return (
    <Box
      maxW="container.sm"
      w="full"
      style={{
        position: "relative",
      }}
    >
      <Textarea value={css} rows={10}></Textarea>
      <Flex justify="end" mt="2" gap="2">
        <Button
          colorScheme="blue"
          onClick={() => DownloadFile(filename, css)}
          rightIcon={<Icon as={DownloadIcon} h="5" w="5" />}
        >
          Download
        </Button>
        <Button
          rightIcon={
            <Icon
              as={copied ? ClipboardCheckIcon : ClipboardCopyIcon}
              h="5"
              w="5"
            />
          }
          onClick={() => copyToClipboard(css)}
        >
          {copied ? "Copied!" : "Copy to Clipboard"}
        </Button>
      </Flex>
    </Box>
  );
}
export default Result;
