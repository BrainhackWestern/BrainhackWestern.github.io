import { globalStyle, style } from '@vanilla-extract/css';
import { media } from '../helpers.css';
import { colors, textSize } from '../variables.css';


export const center = style([
  {
    textAlign: 'center'
  }
]);

export const window = style([
  'd-flex',
  'flex-row',
  'justify-content-start',
  'container-fluid',
  {
    height: '100vh',
    padding: '2em'
  }
]);


export const backgroundImg = style([
  {
    position: 'absolute',
    overflow: 'hidden',
    height: '95vh',
    maxWidth: 1300,
    width: '100%',
    right: 0,
    top: '5vh',
    zIndex: 0
  },
  media.xl({
    width: '65%'
  })
]);

export const eventDates = style({
  textAlign: 'center',
  background: `linear-gradient(120deg, #320066 20%, #04147b 30%, #024d1e)`,
  padding: '0.5em 2em',
  margin: '0.5em 0',
  fontSize: textSize.lg,
  fontWeight: 'bolder',
  color: colors.fontLight
});

export const titleCol = {
  container: style([
    {
      zIndex: 1
    },
    'col-12',
    'col-lg-4',
    'd-flex',
    'flex-column',
    'justify-content-end',
    'align-items-center'
  ]),

  button: style([
    {
      alignSelf: 'center',
      fontSize: textSize.heading.sm
    }
  ])
};

export const mapFrame = style([
  {
    width: '100%',
    height: '20em'
  },
  media.lg({
    height: '35em'
  })
]);

export const sponsor = style([
  {
    textAlign: 'center',
    maxWidth: '80%',
    ':hover': {
      color: 'red'
    }
  },
  'col-lg-4'
]);

export const sponsorLink = style([
  {
    display: 'block',
    maxWidth: 400,
    margin: '2em'
  },
  media.lg({
    maxWidth: 300
  })
]);
