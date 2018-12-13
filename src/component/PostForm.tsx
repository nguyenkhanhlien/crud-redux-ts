import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { PostModel } from '../model/PostModel';
import ReminderComponent from './ReminderComponent'
import { getUser } from '../services/ApiServices';
import { map } from 'lodash'
import moment from 'moment'


interface PostFormState {
    title: string,
    message: string,
    isShow: boolean,
    startTime: string,
    isValidTitle: boolean,
    isValidMessage: boolean,
    listEmail: Array<any>,
    selectedEmail: string,
    startDate: Date
    isValidDate: boolean
}

interface PostFormProps {
    onAdd: (data: PostModel) => void
}

let data: PostModel = {
    id: new Date,
    title: '',
    message: '',
    email: ''
}

const PERIOD_TIME = [
    { id: 0, disp: '00:00' },
    { id: 1, disp: '00:30' },
    { id: 2, disp: '01:00' },
    { id: 3, disp: '01:30' },
    { id: 4, disp: '02:00' },
    { id: 5, disp: '02:30' },
    { id: 6, disp: '03:00' },
    { id: 7, disp: '03:30' },
    { id: 8, disp: '04:00' },
    { id: 9, disp: '04:30' },
    { id: 10, disp: '05:00' },
    { id: 11, disp: '05:30' },
    { id: 12, disp: '06:00' },
    { id: 13, disp: '06:30' },
    { id: 14, disp: '07:00' },
    { id: 15, disp: '07:30' },
    { id: 16, disp: '08:00' },
    { id: 17, disp: '08:30' },
    { id: 18, disp: '09:00' },
    { id: 29, disp: '09:30' },
    { id: 20, disp: '10:00' },
    { id: 21, disp: '10:30' },
    { id: 22, disp: '11:00' },
    { id: 23, disp: '11:30' },
    { id: 24, disp: '12:00' },
    { id: 25, disp: '12:30' },
    { id: 26, disp: '13:00' },
    { id: 27, disp: '13:30' },
    { id: 28, disp: '14:00' },
    { id: 39, disp: '14:30' },
    { id: 30, disp: '15:00' },
    { id: 31, disp: '15:30' },
    { id: 32, disp: '16:00' },
    { id: 33, disp: '16:30' },
    { id: 34, disp: '17:00' },
    { id: 35, disp: '17:30' },
    { id: 36, disp: '18:00' },
    { id: 37, disp: '18:30' },
    { id: 38, disp: '19:00' },
    { id: 49, disp: '19:30' },
    { id: 40, disp: '20:00' },
    { id: 41, disp: '20:30' },
    { id: 42, disp: '21:00' },
    { id: 43, disp: '21:30' },
    { id: 44, disp: '22:00' },
    { id: 45, disp: '22:30' },
    { id: 46, disp: '23:00' },
    { id: 47, disp: '23:30' },
    { id: 48, disp: '24:00' }
]

class PostForm extends Component<PostFormProps, PostFormState> {
    constructor(props: PostFormProps) {
        super(props);
        this.state = {
            title: '',
            message: '',
            isShow: false,
            startTime: '',
            isValidTitle: false,
            isValidMessage: false,
            listEmail: [],
            selectedEmail: '',
            startDate: new Date(),
            isValidDate: false
        }
    }

    componentDidMount() {
        getUser().then(res => {
            console.log('res', res)
            this.setState({
                listEmail: res
            })
        })
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        data.id = new Date();
        console.log('emmail: ', this.state.selectedEmail)
        data.email = this.state.selectedEmail
        this.props.onAdd(data);
        this.setState({
            title: '',
            message: ''
        })
    }
    handleOnChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
        this.validateTitle(e.target.value)
        if (!this.state.isValidTitle) {
            data.title = e.target.value;
        }
    }

    validateTitle(value: string) {
        if (value.length > 10) {
            this.setState({
                isValidTitle: true
            })
        } else {
            this.setState({
                isValidTitle: false
            })
        }
    }

    validateMessage(value: string) {
        if (value.length > 200) {
            this.setState({
                isValidMessage: true
            })
        } else {
            this.setState({
                isValidMessage: false
            })
        }
    }

    handleOnChangeMessage(e: React.ChangeEvent<HTMLTextAreaElement>) {
        this.validateMessage(e.target.value)
        if (!this.state.isValidMessage) {
            data.message = e.target.value;
        }
    }

    handleDisplayTime(event: any) {
        if (event.target.value !== '') {

        }
    }

    checkIsDisableButton() {
        if (this.state.isValidTitle || this.state.isValidMessage) {
            return true;
        }
        return false;
    }

    onSelectedEmail(email: string) {
        this.setState({
            selectedEmail: email
        })
    }
    handleDayChange(selectedDay: Date, modifiers: Object, dayPickerInput: DayPickerInput) {
        console.log(1, selectedDay)
        let day = moment("12-25-1995", "DD-MM-YYYY");
        console.log( 'second', moment().second())
        console.log( 'minut', moment().minutes())
        console.log( 'hours', moment().hours())
        const start = moment('2018-12-08 09:42');
        const remainder = 30 - (start.minute() % 30);
         
        const dateTime = moment(start).add(remainder, "minutes").format("DD.MM.YYYY, h:mm:ss a");
        
        console.log('dateTime: ', dateTime);
        console.log('typeof: ', typeof(dateTime))
        if (selectedDay !== undefined) {
            this.setState({
                startDate: selectedDay,
                isValidDate: false
            })
            return
        }
        this.setState({
            isValidDate: true
        })
    }

    render() {
        return (
            <div className="post-container">
                <h1 className="post_heading">Create Post</h1>
                <form className="form" onSubmit={this.handleSubmit} >
                    <input required type="text" onChange={(e) => this.handleOnChangeTitle(e)}
                        placeholder="Enter Post Title" />
                    {this.state.isValidTitle ? (<p>Error</p>) : null}
                    <br /><br />
                    <textarea required onChange={(e) => this.handleOnChangeMessage(e)} placeholder="Enter Post" /><br /><br />
                    <div className="start-date">
                        <label>Start:</label>
                        <DayPickerInput
                            format='DD/MM/YYYY'
                            onDayChange={(day, modifiers, dayPickerInput) => this.handleDayChange(day, modifiers, dayPickerInput)}
                        />
                        {this.state.isValidDate ? <span>Error</span> : null}
                        <div className="start-time">
                            <input type="text" onChange={(event) => this.handleDisplayTime(event)} />
                        </div>
                    </div>
                    <button className={this.checkIsDisableButton() ? 'is-hidden' : 'display'}>Post</button>
                    <a href="#">Back</a>
                </form>
                <ReminderComponent listEmail={this.state.listEmail} onChangeMail={this.onSelectedEmail.bind(this)} />
            </div>
        )
    }
}

export default PostForm;