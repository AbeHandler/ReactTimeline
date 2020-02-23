var React = require('react');
var d3 = require('d3');


export default class Tooltip extends React.Component{

    render(){

        return(
            <g>
              <rect x={5} rx="5" ry="5" y={5} opacity={1} stroke="grey" strokeWidth="2" height={40} width={110} fill="white"/>
              <text style={{backgroundColor: "white"}} x={5 + 9} y={5 + 20} opacity={1} height="10" width="23" fill="black">
              blah
              </text>
              </g>
            )
        
    }
}
