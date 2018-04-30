// https://www.metaweather.com/api/location/search/?query=london
// https://www.metaweather.com/api/location/2487956/
// A component that gives the weather based on what a user enters.
import React from "react";

class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value : "london",
            currentWeather: ''
        }

        
    this.handleChange = this.handleChange.bind(this)
    this.getWeather = this.getWeather.bind(this)
    }

    handleChange(event) {
        this.setState ({value: event.target.value})
    }

    getWeather() {
        const apicall = "https://www.metaweather.com/api/location/search/?query="
        const weathercall = "https://www.metaweather.com/api/location/"
        const place = this.state.value
        fetch(apicall + place)
        .then(response => {
            return response.json()
        })
        .then(myId => {
            if (myId[0] == null) {
                this.setState({ currentWeather: 'Sorry could not find a location'})
                
            }
            else {
                return myId[0]['woeid']
                
            }
        })
        .then(Id => {
            fetch(weathercall + Id + '/')
                .then(response => {
                    return response.json()
                })

                .then(results => {
                    const result = results['consolidated_weather'][0]['weather_state_name']
                    this.setState({ currentWeather: result })
                    
                })
                .catch( err => {
                    this.setState({ currentWeather: 'Sorry could not find a location'})
                })
        }
        )
    }

    render() {
        return(
            <div>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button
                    onClick={() => this.getWeather()}>
                    Get weather
                </button>

                <h1> {this.state.currentWeather}</h1>
            </div>
        )
    }
}

export default Weather;