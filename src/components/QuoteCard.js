import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';

const QuoteCard = (props) => {
    return (
        <Grid 
            item 
            xs = {12} 
            md = {4} 
            lg = {2} 
            sx = {{
                bgcolor:'#fff',
                p: 3,
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                minWidth: 400
            }}
        >
            <Typography
                sx = {{
                    textAlign: 'center',
                    color: props.color
                }}
                id = "text"
            >
                {props.quote}
            </Typography>
            <Typography 
                sx = {{
                    textAlign: 'right',
                    color: props.color,
                    fontSize: 12,
                    p: 3
                }}
                id = "author"
            >
                - {props.author}
            </Typography>
            <Grid sx = {{ display: 'flex', justifyContent: 'space-between' }}>
                <Grid sx={{display:'flex'}}>
                    <Button id="tweet-quote" vairant="contained" sx={{color: props.color}}>tweet</Button>
                    <Button vairant="contained" sx={{color: props.color}}>tumblr</Button>
                </Grid>
                <Button id="new-quote" vairant="contained" sx={{color: props.color}}>New quote</Button>
            </Grid>
        </Grid>
    );
}

export default QuoteCard;