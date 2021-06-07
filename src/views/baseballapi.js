import React, {Component} from 'react';
// import API from "../utils/API";
import axios from "axios";

class Baseballapi extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            items: ([]),
            isLoaded: false,
        }
    }
    

    componentDidMount() {

        // fetch('https://v1.baseball.api-sports.io/leagues')
        // .then(res => res.json())
        // .then(json => {
        //     this.setState({
        //         isLoaded:true,
        //         items: json.items,
                
        //     });
            
        // })
        

const options = {
  method: 'GET',
  url: 'https://v1.baseball.api-sports.io/leagues',
  headers: {
    'x-rapidapi-key': 'c3789bc191442838b4374ca149d9cf66',
    'x-rapidapi-host': 'v1.baseball.api-sports.io'
  }
};

axios.request(options).then(function (response) {
    response.results (function (elem) {
        var resultDiv = ("<div>")
      resultDiv.addClass("card mb-4 cardStyle")
      resultDiv.text(`{elem.name}`)
    })
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
    }

    render() {
        var { isLoaded, items} = this.state;
        console.log(items);

        if(!isLoaded) {
            return <div>Loading...</div>;
        }

        else{
            return(
                <div className="Baseballapi">
                    <ul>
                        {items && items.map(item => (
                            <li key={item.id}>
                                Name: {item.name} 
                            </li>
                            
                        ))};
                        
                    </ul>
                </div>
            );
            
        }
    }
}

export default Baseballapi;