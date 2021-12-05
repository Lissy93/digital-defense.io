import React from 'react';
import Link from 'next/link';
import {
  Text,
  Flex,
  Box,
} from '@chakra-ui/react';

// import Burger from '@/assets/icons/burger.svg';
import { Burger, Close } from '@/components/icons/Icons';

type NavItemProps = {
  children: React.ReactNode;
  to: string;
};

const NavItemStyles = {
  display: 'block',
  mb: { base: 8, sm: 0 },
  mr: { base: 0, sm: 8 },
};

const NavItem = function NavItem(props: NavItemProps) {
  const { children, to } = props;
  return (
    <Text __css={NavItemStyles}>
      <Link href={to}>{children}</Link>
    </Text>
  );
};

const HeaderStyles = {
  bg: ['gray.500', 'gray.500', 'transparent', 'transparent'],
  color: ['black', 'red.500', 'primary.700', 'primary.700'],
  p: 2,
  mb: 8,
  w: '100%',
  align: 'center',
  justify: 'space-between',
  wrap: 'wrap',
};

const Header = function Header() {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex as="nav" __css={HeaderStyles}>
      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <Close /> : <Burger />}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <NavItem to="/">Home</NavItem>
          <NavItem to="/one">Tab One </NavItem>
          <NavItem to="/two">Tab Two</NavItem>
          <NavItem to="/three">Tab Three</NavItem>
          <NavItem to="/four">Final Tab</NavItem>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
