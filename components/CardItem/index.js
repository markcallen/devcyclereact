import { GridItem, useStyleConfig } from '@chakra-ui/react';

export const CardItem = props => {
  const { variant } = props;
  const styles = useStyleConfig('CardItem', { variant });
  return (
    <GridItem
      __css={styles}
      margin={4}
      padding={6}
      borderRadius={2}
      transition="color 0.15s ease, border-color 0.15s ease"
      maxW={1200}
      _hover={{
        color: '#0070f3',
        'border-color': '#0070f3',
      }}
      _active={{
        color: '#0070f3',
        'border-color': '#0070f3',
      }}
      _focus={{
        color: '#0070f3',
        'border-color': '#0070f3',
      }}
      {...props}>
      {props.children}
    </GridItem>
  );
};
