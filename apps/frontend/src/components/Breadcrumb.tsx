import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const BreadcrumbNavigator = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/" isCurrentPage>
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
