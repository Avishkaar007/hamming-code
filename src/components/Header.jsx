import {
  Box,
  Link,
  HStack,
  Heading,
  Container,
  IconButton,
  Button,
  useMediaQuery,
  Icon,
  Tooltip,
} from '@chakra-ui/react';
import { APP_NAME } from '../configs/constants';
import { Link as RouterLink } from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const Header = props => {
  const [isLargerThan600] = useMediaQuery(`(min-width: 600px)`);

  const size = isLargerThan600 ? 'md' : 'xs';
  return (
    <Box>
      <Box
        p={2}
        d="flex"
        as="header"
        shadow="sm"
        height={70}
        alignItems="center"
      >
        <Container maxW="container.xl">
          <HStack justifyContent="space-between">
            <Heading
              as={Link}
              bgClip="text"
              href="/heyming"
              size={isLargerThan600 ? 'xl' : 'md'}
              bgGradient="linear(to-r, teal.500, green.500)"
            >
              {APP_NAME}
            </Heading>

            <HStack spacing={2}>
              <Button
                size={size}
                to="/heyming"
                as={RouterLink}
              >
                Encoder
              </Button>
              <Button
                size={size}
                to="/decoder"
                as={RouterLink}
              >
                Decoder
              </Button>
              <Tooltip label="Learn about hamming code">
                <IconButton
                  size={size}
                  to="/learn"
                  as={RouterLink}
                  fontSize="lg"
                  marginLeft="2"
                  color="current"
                  variant="outline"
                  aria-label="Learn more about hamming code"
                />
              </Tooltip>

              
              <ColorModeSwitcher justifySelf="flex-end" size={size} />
            </HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
