import React from 'react';
import Client from "./Client";

const ReactHighcharts = require('react-highcharts');

export class Chart extends React.Component {
    constructor(props) {
        super(props);

        Client.retweets();
        this.state = {
            chart: {
                type: 'column'
            },
            xAxis: {
                crosshair: true
            },
            yAxis: {
                min: 0,
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.1,
                    borderWidth: 0
                }
            },
        };

        this.handleRetweetsClick = this.handleRetweetsClick.bind(this);
        this.handleFavoritesClick = this.handleFavoritesClick.bind(this)
    }

    handleRetweetsClick() {
        // TODO: Get the retweets data from the API and set it here.
        this.setState({
            title: {
                text: "Monthly retweets for the past year"
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ]
            },
            yAxis: {
                title: {
                    text: 'Retweets'
                }
            },
            series: [{
                name: '',
            }]
        })
    }

    handleFavoritesClick() {
        // TODO: implement
    }

    render() {
        return <div>
            <ReactHighcharts config={this.state} ref="chart"/>
            <button className='button' onClick={this.handleRetweetsClick.bind(this)}>Retweets</button>
            <button className='button' onClick={this.handleFavoritesClick}>Favorites</button>
        </div>
    }
}