import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';

const QuoteCard = () => {
    return (
        <Grid 
            item 
            xs = {12} 
            md = {4} 
            lg = {2} 
            sx = {{
                bgcolor:'#333',
                p: 3,
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Typography
                sx = {{
                    textAlign: 'center',
                    color: '#fff'
                }}
                id = "text"
            >
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam ab veritatis quod quasi ex, impedit, nulla sapiente excepturi minima ipsam beatae quaerat quae consequuntur iusto voluptatum facere labore atque."
            </Typography>
            <Typography 
                sx = {{
                    textAlign: 'right',
                    color: '#fff',
                    fontSize: 12,
                    p: 3
                }}
                id = "author"
            >
                - Rosa Parks
            </Typography>
            <Grid sx = {{ display: 'flex', justifyContent: 'space-between' }}>
                <Grid>
                    <Button id="tweet-quote" vairant="contained">tweet</Button>
                    <Button vairant="contained">tumblr</Button>
                </Grid>
                <Button id="new-quote" vairant="contained">New quote</Button>
            </Grid>
        </Grid>
    );
}

export default QuoteCard;