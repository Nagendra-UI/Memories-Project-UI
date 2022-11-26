import { makeStyles } from '@mui/styles';

export default makeStyles(({
    root: {
        '& .MuiTextField-root': {
            margin: '1px',
        },
    },
    paper: {
        padding: '2px',
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        marginBottom: '10px',
    },
}));