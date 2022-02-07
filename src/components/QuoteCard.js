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
                        <Button 
                            id="tweet-quote" 
                            vairant="contained" 
                            sx={{color: this.props.color}} 
                            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent('"' + this.props.quote + '" ' + this.props.author)}`}
                            target="_blank"
                        >
                            <i className="fa fa-twitter fa-2x"></i>
                        </Button>
                        <Button 
                            vairant="contained" 
                            sx={{color: this.props.color}}
                            href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(this.props.author)}&content=${encodeURIComponent(this.props.quote)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
                            target="_blank"
                        >
                            <i className="fa fa-tumblr fa-2x"></i>
                        </Button>
                    </Grid>
                    <Button id="new-quote" vairant="contained" sx={{color: this.props.color, fontSize: 19}} onClick={this.props.callback}>New Quote</Button>
                </Grid>
            </Grid>
        );
    }    
}

export default QuoteCard;