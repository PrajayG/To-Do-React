import React from 'react'
import ReactDOM from 'react-dom'


// To do - 
// Make API call using this endpoint - http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1
// Style and integrate with normal app
class QuoteGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: 'hello',
            author: ' '
        };
    }



    componentDidMount() {
        fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
        .then(response => {
            return response.json();
        })

          .then(myJson => {
            let newQuote = myJson[0]['content'];
            let newAuthor = myJson[0]['title']
            newQuote = newQuote.replace('<p>', '').replace('</p>', '')
            this.setState({
                quote: newQuote,
                author: newAuthor
            })
          });
    }

    render() {
        return(
        <div> 
            <h3> Design quote of the day </h3>   
            <h4><span>"{this.state.quote}" - </span>
            <span> {this.state.author}</span></h4>
         </div>
        )
    }

}

export default QuoteGenerator;