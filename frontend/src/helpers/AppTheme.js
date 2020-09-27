import deepPurple from '@material-ui/core/colors/deepPurple';
import deepOrange from '@material-ui/core/colors/deepOrange';

export default {
    palette: {
        primary: {
            light: deepPurple[500],
            main: deepPurple[700],
            dark: deepPurple[900],
            contrastText: '#fff'
        },
        secondary: {
            light: deepOrange[300],
            main: deepOrange['A200'],
            dark: deepOrange[700],
            contrastText: '#fff'
        }
    },
    status: {
        danger: 'orange',
    },
    typography: {
        button: {
            fontWeight: 400,
            textAlign: 'capitalize'
        },
    },
};
