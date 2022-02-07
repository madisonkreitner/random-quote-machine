import React from 'react';
import { CssBaseline, Grid } from '@mui/material';
import QuoteCard from './QuoteCard';

class QuoteContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            author: '',
            color: ''
        }
    }

    componentDidMount() {
        const randomColor = this.getRandomColor();
        const randomQuote = this.getRandomQuote();
        this.setState({
            quote: randomQuote.quote,
            author: randomQuote.author,
            color: randomColor
        });
    }

    quotes = [
        'You become what you believe.',
        'I have learned over the years that when one\’s mind is made up, this diminishes fear.',
        'Life is not measured by the number of breaths we take, but by the moments that take our breath away.',
        'Strive not to be a success, but rather to be of value.',
        'I would rather die of passion than of boredom.',
        'If you want to lift yourself up, lift up someone else.',
        'If you look at what you have in life, you\’ll always have more. If you look at what you don\’t have in life, you\’ll never have enough.',
        'Nothing is impossible, the word itself says, \“I\’m possible!\”',
        'You can\’t fall if you don\’t climb. But there\’s no joy in living your whole life on the ground.',
        'Happiness is not something readymade. It comes from your own actions.',
        'What\’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.',
        'Dreaming, after all, is a form of planning.'
    ];
    
    authors = [
        'Oprah Winfrey',
        'Rosa Parks',
        'Maya Angelou',
        'Albert Einstein',
        'Vincent van Gogh',
        'Booker T. Washington',
        'Oprah Winfrey',
        'Audrey Hepburn',
        'Unknown',
        'Dalai Lama',
        'Bob Dylan',
        'Gloria Steinem'
    ];
    
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    getRandomQuote() {
        const index = this.getRandomInt(this.quotes.length);
        return {
            "quote": this.quotes[index],
            "author": this.authors[index]
        };
    }
    
    hslToHex(h, s, l) {
        l /= 100;
        const a = s * Math.min(l, 1 - l) / 100;
        const f = n => {
          const k = (n + h / 30) % 12;
          const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
          return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
        };
        return `#${f(0)}${f(8)}${f(4)}`;
    }
    
    getRandomColor() {
        const hue = this.getRandomInt(360);
        const sat = 100
        const lum = this.getRandomInt(20) + 50; //luminance should be between 50 and 70 for brightness
        return this.hslToHex(hue, sat, lum);
    }

    render() {
        return (
            <>
                <CssBaseline />
                <Grid 
                    container 
                    spacing={3}
                    sx = {{
                        width: '100%',
                        height: '100vh',
                        justifyContent: 'center',
                        alignItems: 'center',
                        bgcolor: this.state.color,
                        p:0,
                        margin:0
                    }}
                >
                    <QuoteCard id="quote-box" quote={this.state.quote} author={this.state.author} color={this.state.color} />
                </Grid>
            </>
        );
    }
}

export default QuoteContainer;