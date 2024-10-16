import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { fetchCss } from "../utils/fetchCss";
import { useState } from "react";
import Result from "./Result";
import ExtractNamesFromUrl from "../utils/extract-font-names-from-url";
import { track } from "@vercel/analytics";

type IForm = {
  url: string;
};

function EnterFontUrlForm() {
  const { handleSubmit, control } = useForm<IForm>({
    defaultValues: {
      url: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const [filename, setFilename] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const onSubmit = async (data: IForm) => {
    setResult(null);
    setFilename(null);
    setLoading(true);
    const cssData = await fetchCss(data.url);
    setLoading(false);
    setFilename(ExtractNamesFromUrl(data.url));
    setResult(cssData);

    
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    ym(98644370,'reachGoal','get-css-btn')
    track('Get CSS');
  };
  return (
    <>
      <Flex
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        align="end"
        gap="2"
        maxW="container.sm"
        w="full"
      >
        <Controller
          control={control}
          name="url"
          rules={{ required: "Font URL is required" }}
          render={({ field, fieldState }) => (
            <FormControl isInvalid={fieldState.invalid} flexGrow={1}>
              <FormLabel>Google Font URL</FormLabel>
              <Flex gap="2">
                <Input
                  {...field}
                  id="url"
                  type="url"
                  placeholder="Paste Google Font URL here"
                  isDisabled={loading}
                />
                <Button type="submit" isLoading={loading}>
                  Get CSS
                </Button>
              </Flex>

              <FormErrorMessage>{fieldState.error?.message}</FormErrorMessage>
            </FormControl>
          )}
        />
      </Flex>
      {result && (
        <Result filename={filename ? filename : undefined} css={result} />
      )}
    </>
  );
}
export default EnterFontUrlForm;
