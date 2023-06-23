import { Alert, AlertDescription, AlertIcon } from '@chakra-ui/react';
import React from 'react';

type Status = 'error' | 'info' | 'warning' | 'success' | 'loading' | undefined;

export const MessageAlert = ({
  status,
  description,
}: {
  status?: Status;
  description: string;
}) => {
  return (
    <Alert status={status}>
      <AlertIcon />
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};
