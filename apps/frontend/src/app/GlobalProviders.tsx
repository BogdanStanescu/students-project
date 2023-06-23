import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactElement } from 'react';
import theme from '../theme';
import { useQueryTrpcClient } from './useQueryClient';
import { trpc } from '../utils/trpc';

export const GlobalProviders = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  const { queryClient, trpcClient } = useQueryTrpcClient();

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
};
