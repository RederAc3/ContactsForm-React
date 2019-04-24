var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function () {
        return (
            React.createElement('form', { className: 'contactForm' },
                React.createElement('table', {},
                    React.createElement('tr', {},
                        React.createElement('td', {},
                            React.createElement('label', { className: 'title-input' }, 'Imię'),
                        ),
                        React.createElement('td', {},
                            React.createElement('input', {
                                type: 'text',
                                value: this.props.contact.firstName,
                            }),
                        ),
                    ),

                    React.createElement('tr', {},
                        React.createElement('td', {},
                            React.createElement('label', { className: 'title-input' }, 'Nazwisko'),
                        ),
                        React.createElement('td', {},
                            React.createElement('input', {
                                type: 'text',
                                value: this.props.contact.lastName,
                            }),
                        ),
                    ),

                    React.createElement('tr', {},
                        React.createElement('td', {},
                            React.createElement('label', { className: 'title-input' }, 'Email'),
                        ),
                        React.createElement('td', {},
                            React.createElement('input', {
                                type: 'email',
                                value: this.props.contact.email,
                            }),
                        ),
                    ),
                ),

                React.createElement('button', { type: 'submit' }, "Dodaj kontakt")
            )
        )
    },
})