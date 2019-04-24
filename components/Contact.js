var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            React.createElement('div', { className: 'contactItem' },
                React.createElement('img', {
                    className: 'contactImage',
                    src: 'img/id-card.svg'
                }),
                React.createElement('div', { className: 'desc-item' },
                    React.createElement('p', { className: 'contactLabel' }, this.props.item.firstName + ' ' + this.props.item.lastName),
                    React.createElement('a', { className: 'contactLabel', href: 'mailto:' + this.props.item.email }, this.props.item.email)
                ),
                React.createElement('div', { className: 'icons' },
                    React.createElement('img', { src: 'img/edit.png', className: 'edit', title: 'Edycja' }),
                    React.createElement('img', { src: 'img/trash.png', className: 'trash', title: 'Usuń' })
                )
            )
        )
    },
});