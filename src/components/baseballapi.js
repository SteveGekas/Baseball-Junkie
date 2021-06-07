import React, { Component } from 'react';
import axios from "axios";
import { Fragment } from 'react';

class Baseballapi extends Component {
    state = {

        isLoaded: false,
        standings: null,
    }

    componentDidMount() {
        var self = this
        const options = {
            method: 'GET',
            url: 'https://v1.baseball.api-sports.io/standings',
            params: { league: '1', season: '2020' },
            headers: {
                'x-rapidapi-key': 'c3789bc191442838b4374ca149d9cf66',
                'x-rapidapi-host': 'v1.baseball.api-sports.io',
            }
        };

        axios.request(options).then((response) => {
            console.log("this is axios call", response.data.response[0]);
            this.setState({
                standings: response.data.response[0],
                isLoaded: true
            });
        }).catch((error) => {
            console.error(error);
        });
    }

    render() {
        var { isLoaded, standings } = this.state;


        if (!isLoaded) {
            return <div>Loading...</div>;

        }

        else {
            return (
                <div className="Baseballapi">
                    <ul>
                        {standings && standings.map((team, index) => (
                            <Fragment key={index}>
                                <li key={index}>
                                    Name: {team.team.name}
                                </li>

                                <li>
                                    Standings: {team.position}
                                </li>
                                <img src={team.team.logo} />
                            </Fragment>

                        ))}

                    </ul>
                </div>
            );

        }
    }
}

export default Baseballapi