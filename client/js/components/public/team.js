/** @jsx React.DOM */
var React   = require('react');

var Team = React.createClass({
    render: function() {
        return (
            <div id='team-container'>
                <div id='team-block1' className={'team-block'}>
                    <li id='member1block' className={'memberblock'}>
                    </li>
                    <li id='member2block' className={'memberblock'}>
                    </li>
                    <li id='member3block' className={'memberblock'}>
                    </li>
                    <li id='member4block' className={'memberblock'}>
                    </li>
                </div>
                <div id='team-block2' className={'team-block'}>
                    <li id='member5block' className={'memberblock'}>
                    </li>
                    <li id='member6block' className={'memberblock'}>
                    </li>
                    <li id='member7block' className={'memberblock'}>
                    </li>
                    <li id='member8block' className={'memberblock'}>
                    </li>
                </div>
            </div>
        );
    }
});

module.exports = Team;