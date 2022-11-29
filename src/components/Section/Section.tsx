import { Box } from 'components/Box/Box';
import { containerWidth } from 'constants/mediaConstants';
import { theme } from 'constants/theme';
import { Title } from './Section.styled';

interface IProps {
  title?: string;
  children?: React.ReactNode;
}

export const Section: React.FC<IProps> = ({ title, children }) => (
  <Box as="section" py={[3, 3, 4, 4]} px={[2, 2, 4, 6]}>
    <Box
      pt={[3, 3, 3, 4]}
      pb={[4, 4, 4, 4]}
      px={[3, 3, 4, 4]}
      bg="white"
      maxWidth={containerWidth}
      mx="auto"
      boxShadow={theme.boxShadow.second}
      borderRadius={theme.radii.normal}
      textAlign="center"
    >
      {title && <Title>{title}</Title>}
      {children}
    </Box>
  </Box>
);
