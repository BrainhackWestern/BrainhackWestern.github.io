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
  media.xl({
    width: '65%',
    height: '95vh',
    left: 'auto',
    right: 0,
    transform: 'none'
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
    'col-xl-4',
    'd-flex',
    'flex-column',
    'justify-content-end',
    'align-items-center'
  ]),

  containerInner: style([
    {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%'
    },
    media.xl({
      justifyContent: 'center',
      minHeight: '80vh'
    })
  ]),

  button: style([
    {
      alignSelf: 'center',
      fontSize: textSize.heading.sm,
      marginBottom: '2rem'
    },
    media.xl({
      marginBottom: '3rem'
    })
  ]),

  logo: style([
    {
      marginBottom: '1rem'
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
