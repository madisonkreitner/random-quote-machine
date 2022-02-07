import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';

class QuoteCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid 
                item 
                xs = {12} 
                md = {4} 
                lg = {2} 
                sx = {{
                    bgcolor:'#fff',
                    p: 3,
                    borderRadius: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: 500
                }}
            >
                <Typography
                    sx = {{
                        textAlign: 'center',
                        color: this.props.color,
                        fontSize: 26
                    }}
                    id = "text"
                >
                    {this.props.quote}
                </Typography>
                <Typography 
                    sx = {{
                        textAlign: 'right',
                        color: this.props.color,
                        fontSize: 18,
                        p: 3
                    }}
                    id = "author"
                >
                    - {this.props.author}
                </Typography>
                <Grid sx = {{ display: 'flex', justifyContent: 'space-between' }}>
                    <Grid sx={{display:'flex'}}>
                        <Button id="tweet-quote" vairant="contained" sx={{color: this.props.color}} onClick={() => {}}>tweet</Button>
                        <Button vairant="contained" sx={{color: this.props.color}} onClick={() => {}}>tumblr</Button>
                    </Grid>
                    <Button id="new-quote" vairant="contained" sx={{color: this.props.color}} onClick={this.props.callback}>New quote</Button>
                </Grid>
            </Grid>
        );
    }    
}

export default QuoteCard;