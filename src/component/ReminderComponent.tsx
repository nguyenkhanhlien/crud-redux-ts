import React from 'react'

interface ReminderProps {
    listEmail: Array<any>,
    onChangeMail:(mail: string) => void
}

class ReminderComponent extends React.Component<ReminderProps,{}> {
    constructor(props: ReminderProps) {
        super(props);

    }
    handleChangeSelectMail(e: React.ChangeEvent<HTMLSelectElement>) {
        this.props.onChangeMail(e.target.value)
    }

    render() {
        return (
            <div className="reminder">
            <label>Email: </label>
            <select onChange={(e)=>this.handleChangeSelectMail(e)}>
                {this.props.listEmail.map((mail, index) => (
                    <option key={index} value={mail}>{mail}</option>
                ))}
            </select>
            </div>
        )
    }
}

export default ReminderComponent;