var Arrow = React.createClass({
    componentDidMount: function () {
        var markerNode = React.findDOMNode(this.refs.marker)
        var markerEndNode = React.findDOMNode(this.refs.markerEndNode)

        markerNode.setAttribute('markerWidth', 13)
        markerNode.setAttribute('markerHeight', 13)
        markerNode.setAttribute('refx', 2)
        markerNode.setAttribute('refy', 6)
    },
    render: function () {
        var style = {
            position: "absolute",
            zIndex: 200,
        };

        path_d = "M" + this.props.start.x + "," + this.props.start.y + " "
        path_d += "L" + this.props.stop.x + "," + this.props.stop.y

        return (
            <svg width="300" height="100" style={style} >
                <defs>
                    <marker ref="marker" id="arrow">
                        <path d="M2,1 L2,10 L10,6 L2,2" style={{ fill: "red" }} />
                    </marker>
                </defs>

                <path ref="markerEndNode" d="M30,150 L100,50"
                    style={{ stroke: "red", strokeWidth: "1.25px", fill: "none" }}
                />
            </svg>);
    },
});