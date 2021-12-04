import {Paper,Fade, Button} from '@mui/material'

function QuoteBox({quote,update,color} ) {


    const styles={
        paper:{ maxWidth:"400px", padding:"20px",color:color},
        author:{float:"right", margin:"0"},
        button:{float:"left",background:color, color:"white", display:"block",'&:hover': {
       background: "grey",
    },}
    }

    return (
        <Fade in={true}>
        <Paper id="quote-box" style={styles.paper} elevation={5}>
            <p id="text">{quote?.quote}</p>
            <p id="author" style={styles.author}>- {quote?.author}</p>
            <br/>
                <Button sx={styles.button} id="new-quote" variant="contained" onClick={update}>new quote</Button>
            </Paper>
        </Fade>
    )
}

export default QuoteBox
