import {Paper,Fade} from '@mui/material'

function QuoteBox({quote,update,color} ) {


    const styles={
        paper:{margin:"0 auto",maxWidth:"400px", padding:"20px",color:color},
        author:{float:"right"},
    }

    return (
        <Fade in={true}>
        <Paper id="quote-box" style={styles.paper} elevation={5}>
            <p id="text">{quote?.quote}</p>
            <p id="author" style={styles.author}>- {quote?.author}</p>
            <button id="new-quote" onClick={update}>new quote</button>
            <a href="twitter.com/intent/tweet" id="tweet-quote">tweet</a>
        </Paper>
        </Fade>
    )
}

export default QuoteBox
