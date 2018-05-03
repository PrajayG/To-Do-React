import React from "react";

const DEFAULT_HPP = '10'
const PATH_BASE = 'https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage='



class HackerNews extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            results: [],
            content: '',
            pagehits: DEFAULT_HPP
        }
    }

    componentDidMount() {
        let newresults = [];
        console.log('https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=10')
        fetch('${PATH_BASE}${DEFAULT_HPP}')
        .then(response => {
            return response.json()
        })
        .then(myJson => {
            for (let i = 0; i < DEFAULT_HPP; i++) {
                let item = {
                    id: myJson['hits'][i]['objectID'],
                    title: myJson['hits'][i]['title'],
                    url: myJson['hits'][i]['url'],
                    comments: myJson['hits'][i]['num_comments']
                }
                newresults.push(item)

            }
            this.setState({
                results: newresults
            })
        })

    }


    render() {
        return (

        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th> Link </th>
                    <th> Number of Comments</th>
                </tr>
            </thead>
            <tbody>
            {this.state.results.map(item =>
            <tr>    
                <td>{item.title}</td>
                <td><a href={item.url}> Visit Page</a></td>
                <td> {item.comments}</td>
            </tr>    
        )} 
            </tbody>
        </table>
        )
    }
        
}


export default HackerNews;