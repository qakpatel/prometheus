import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class PieChartsPage extends React.Component {
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
                dataPie: {
                    labels: labels,
                    datasets: [
                        {
                            label: "leads",
                            data: data,
                            backgroundColor: [
                                "#F7464A",
                                "#46BFBD",
                                "#FDB45C",
                                "#949FB1",
                                "#4D5360",
                                "#AC64AD"
                            ],
                            hoverBackgroundColor: [
                                "#FF5A5E",
                                "#5AD3D1",
                                "#FFC870",
                                "#A8B3C5",
                                "#616774",
                                "#DA92DB"
                            ]
                        }
                    ]
                },

            })
        }
    }
    render() {
        return (
            <MDBContainer>
                <Pie data={this.state.dataPie} options={{ responsive: true }} />
            </MDBContainer>
        );
    }
}

export default PieChartsPage;