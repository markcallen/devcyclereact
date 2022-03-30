import { extendTheme, theme as base } from '@chakra-ui/react';

const colors = {
  dvcGrey: {
    100: '#EFF6FF',
    200: '#6B7280',
    300: '#1F2937',
    400: '#111827',
  },
  dvcBlue: {
    100: '#0EA5E9',
    200: '#2DD4BF',
    300: '#0D9488',
    400: '#1D4ED8',
  },
  dvcOrange: {
    100: '#FBBF24',
    200: '#F59E0B',
    300: '#EA580C ',
    400: '#E11D48',
  },
  dvcWhite: {
    100: '#FFFFFF',
    200: '#F3F4F6',
    300: '#F0FDFA',
    400: '#FFFBEB',
    500: '#FFF1F2',
  },
};

const fonts = {
  heading: `Inter, ${base.fonts?.heading}`,
  body: `Inter, ${base.fonts?.body}`,
};

const components = {
  CardItem: {
    variants: {
      card: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'dvcWhite.200',
      },
    },
  },
  Heading: {
    variants: {
      h1: {
        fontFamily: 'Inter',
        fontSize: '4xl',
        color: 'dvcGrey.300',
      },
      h3: {
        fontFamily: 'Inter',
        fontWeight: 700,
        fontSize: 'lg',
        color: 'dvcBlue.400',
        textTransform: 'uppercase',
      },
    },
  },
};

export const theme = extendTheme({ colors, fonts, components });
