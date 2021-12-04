import React from 'react';
import { Heading as ChakraHeading } from '@chakra-ui/react';

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined;

type Props = {
  children: React.ReactNode;
  as?: HeadingType;
  isTruncated?: boolean;
};

const Heading = function Heading(props: Props) {
  const { children, as, isTruncated } = props;
  return (
    <ChakraHeading as={as} isTruncated={isTruncated} size="sm">
      {children}
    </ChakraHeading>
  );
};

Heading.defaultProps = {
  as: 'h2',
  isTruncated: true,
};

export default Heading;
