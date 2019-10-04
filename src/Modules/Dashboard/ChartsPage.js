import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        xAxes: [
            {
                barPercentage: 0.7,
                gridLines: {
                    display: true,
                    color: "rgba(0, 0, 0, 0.1)"
                }
            }
        ],
        yAxes: [
            {
                gridLines: {
                    display: true,
                    color: "rgba(0, 0, 0, 0.1)"
                },
                ticks: {
                    beginAtZero: true
                }
            }
        ]
    }
}

class ChartsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.leadsData && nextProps.leadsData.sourcesWithCount !== this.props.leadsData.sourcesWithCount) {
            const { leadsData } = nextProps;
            const labels = leadsData.sourcesWithCount ? leadsData.sourcesWithCount.map(item => item.title) : []
            const data = leadsData.sourcesWithCount ? leadsData.sourcesWithCount.map(item => item.total) : []
            this.setState({
                dataBar: {
                    labels: labels,
                    datasets: [
                        {
                            label: "Leads",
                            data: data,
                            backgroundColor: [
                                "rgba(255, 134,159,0.4)",
                                "rgba(98,  182, 239,0.4)",
                                "rgba(255, 218, 128,0.4)",
                                "rgba(113, 205, 205,0.4)",
                                "rgba(170, 128, 252,0.4)",
                                "rgba(255, 177, 101,0.4)",
                                "rgba(115, 177, 101,0.4)",
                            ],
                            borderWidth: 2,
                            borderColor: [
                                "rgba(255, 134, 159, 1)",
                                "rgba(98,  182, 239, 1)",
                                "rgba(255, 218, 128, 1)",
                                "rgba(113, 205, 205, 1)",
                                "rgba(170, 128, 252, 1)",
                                "rgba(255, 177, 101, 1)",
                                "rgba(115, 177, 101, 1)",
                            ]
                        }
                    ]
                }

            })
        }
    }

    render() {
        const { dataBar } = this.state;

        return (
            dataBar ? <MDBContainer>
                <Bar data={this.state.dataBar} options={barChartOptions} />
            </MDBContainer> : ""
        );
    }
}

export default ChartsPage;