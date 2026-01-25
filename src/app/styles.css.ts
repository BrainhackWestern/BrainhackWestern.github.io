import { style } from '@vanilla-extract/css';
import { media } from '../styles/helpers.css';
import { colors, textSize, textWeight } from '../styles/variables.css';

export const center = style([
  {
    textAlign: 'center'
  }
]);


export const backgroundImg = style([
  {
    position: 'absolute',
    overflow: 'hidden',
    height: '50vh',
    maxWidth: 1300,
    width: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    top: '0',
    zIndex: 0
  },
  media.md({
    height: '70vh',
    width: '80%',
    top: '5vh'
  }),
  media.lg({
    width: '55%',
    height: '85vh',
    left: 'auto',
    right: 0,
    transform: 'none'
  }),
  media.xl({
    width: '65%',
    height: '95vh'
  })
]);

export const eventDates = style({
  textAlign: 'center',
  background: 'linear-gradient(90deg, #e20b81 19%, #b72d86 30%, #87569c 40%, #3a84b9 43%, #00aed4 57%, #07b5aa 65%, #69b971 73%, #92c44c 81%, #a4cb39 96%)',
  padding: '0.5em 2em',
  margin: '0.5em 0',
  fontSize: textSize.lg,
  fontWeight: textWeight.bold,
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

  button: style({
    alignSelf: 'center',
    fontSize: textSize.heading.sm
  })
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
