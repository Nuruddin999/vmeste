import React, { Component } from 'react';
import { addTitleToHeader, setCalendarDate } from "../../redux/ACTIONCREATORS/HelperReducerAction";
import { connect } from "react-redux";
import NameSection from "./NameSection";
import DateSection from "./DatesSection";
import DateandTime from "./DateandTime";
import { icons } from "../Icons/Icons";
import TaskPlaces from "./TaskPlacesUI";
import TasksFlowDetailed from "./TasksFlowDetailedUI";
import { withRouter, Link } from "react-router-dom";
import { compose } from "redux";
import AttachmentsUI from '../../UIForAttachments';
import UploadFile from '../../KuratorWorkplace/ApplicationsList/SingleApplicationFromList/UploadFile';
import { titleAction } from '../../redux/reducers/HeaderReducer';
import AddVolunteerToTask from './AddVolunteerToTask';
import axios from "axios";
import firebase from '../../firebaseConfig';


class SingleTaskContainer extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.match.url.includes("newtask") ? {
            date: "",
            type: "",
            name: "",
            descrShort: "",
            category: "",
            descrDetailed: "",
            address: "",
            telephone: "",
            startDate: "",
            startTime: "",
            endDate: "",
            endTime: "",
            startAddress: "",
            startContactPerson: "",
            startContactName: "",
            startContactMidNAme: "",
            startContactLastName: "",
            startAttachments: [],
            endAddress: "",
            endContactPerson: "",
            endContactName: "",
            endContactMidNAme: "",
            endContactLastName: "",
            endAttachments: [],
            taskFlowShort: [],
            taskFlowDetailed: [],
            currentStatus: "",
            statusColor: "",
            doers: [],

        } : { ...this.props.state.tasks[parseInt(this.props.match.params.id) - 1] };
        this.handleChange = this.handleChange.bind(this);
        this.handleDataChange = this.handleDataChange.bind(this);
        this.addValueToList = this.addValueToList.bind(this);
        this.removeValueFromList = this.removeValueFromList.bind(this)
        this.removeFlow = this.removeFlow.bind(this);
        this.returnDefault = this.returnDefault.bind(this);
        this.save = this.save.bind(this);
        this.update = this.update.bind(this);
        this.addDoer = this.addDoer.bind(this);
        this.updateFiles = this.updateFiles.bind(this)
        this.deleteFile = this.deleteFile.bind(this)
    }

    handleChange = (name, { target: { value } }) => {
        this.setState({
            [name]: value
        })
    };
    handleDataChange = (data, period) => {
        let prevState = this.state;
        let per = period == "start" ? "startDate" : "endDate";
        this.setState({
            ...prevState, [per]: data
        })
    };
    addValueToList = (value, list, listname) => {
        let prevState = this.state;
        const newFlowList = [...list, value];
        this.setState({
            ...prevState, [listname]: newFlowList
        })
    };
    removeValueFromList = (value, list, listname) => {

        let prevState = this.state;
        const newFlowList = list.filter((val) => val !== value)
        this.setState({
            ...prevState, [listname]: newFlowList
        })
    }
    removeFlow = (toDeleteFlow) => {
        let prevState = this.state;
        const newFlowList = this.state.taskFlowDetailed.filter((flow) => flow !== toDeleteFlow);
        this.setState({
            ...prevState, taskFlowDetailed: newFlowList
        })
    };
    returnDefault = () => {
        this.setState({
            ...this.props.state.tasks[this.props.state.singleTaskIndex]
        })
    };
    addDoer = (doer) => {
        /*let prevState = this.state;
        const newFlowList = [...this.state.taskFlowDetailed, flow];
        this.setState({
            ...prevState, taskFlowDetailed: newFlowList
        })*/
    }
    save = async () => {
        /** здесь должно быть api **/

        let prevTasks = await axios.get("https://curier-df119.firebaseio.com/tasks.json")
        if (prevTasks.data !== null) {
            let task = { ...this.state, id: prevTasks.data.length + 1, currentStatus: "Ожидание отклика", statusColor: "blue" }
            axios.put("https://curier-df119.firebaseio.com/tasks.json", [...prevTasks.data, task])
        }
        else {
            let task = { ...this.state, id: 1, currentStatus: "Ожидание отклика", statusColor: "blue" }
            axios.put("https://curier-df119.firebaseio.com/tasks.json", [task])
        }
    };
    update = async () => {
        let index = parseInt(this.props.match.params.id) - 1
        let url = `https://curier-df119.firebaseio.com/tasks/${index}.json`
        console.log(url)
        let task = { ...this.state }
        axios.patch(url, task)
    }
    updateFiles = async (file, period) => {
        let index = parseInt(this.props.match.params.id) - 1
        let url = `https://curier-df119.firebaseio.com/tasks/${index}/${period}.json`
        let prevAttachments = await axios.get(url)
        if (prevAttachments.data !== null) {
            let newFile = { ...file, id: prevAttachments.data.length + 1 }
            axios.put(url, [...prevAttachments.data, newFile]).then(() => {
                let prevState = this.state
                let tasks = this.state[period]
                this.setState({
                    ...prevState, [period]: [...prevAttachments.data, newFile]
                })
            })
        } else {
            let newFile = { ...file, id: 1 }
            axios.put(url, [newFile]).then(() => {
                let prevState = this.state
                let tasks = this.state[period]
                this.setState({
                    ...prevState, [period]: [newFile]
                })
            })
        }

    }
    deleteFile = (docId, period, list) => {
        let index = parseInt(this.props.match.params.id) - 1
        let url = `https://curier-df119.firebaseio.com/tasks/${index}/${period}.json`
        let newList = list.filter(item => item.id !== docId)
        newList.forEach(element => {
            let preVid = element.id
            element.id = preVid > 1 ? preVid - 1 : 1
        });
        axios.put(url, newList).then(() => {
            let prevState = this.state
            let tasks = this.state[period]
            this.setState({
                ...prevState, [period]: newList
            })
        })
    }


    componentDidMount() {
        const { addTitle } = this.props;
        if (this.props.match.url.includes("newtask")) { addTitle("Новое задание") }
        if (parseInt(this.props.match.params.id)) {
            let index = parseInt(this.props.match.params.id) - 1
            let url = `https://curier-df119.firebaseio.com/tasks/${index}.json`
            axios.get(url).then(result => {
                this.setState({
                    ...result.data
                })
            })


        }
    }
    componentWillUnmount() {
        const { addTitle } = this.props;
        addTitle("")
    }

    render() {

        const { changeCalendarDate, state } = this.props;
        const singleTaskIndex = this.props.match.params;

        const startDate = <DateandTime state={this.state} period={"start"}
            setCalendarDate={changeCalendarDate} onDateChange={this.handleDataChange} />;
        const endDate = <DateandTime setCalendarDate={changeCalendarDate} period={"end"} state={this.state}
            onDateChange={this.handleDataChange} />;
        const dateSection = <DateSection
            startPeriod={startDate} endPeriod={endDate}
        />;
        const uploadComponent = <UploadFile
            icons={icons}
            explanation={"загрузить файл"}
            upload={this.uploadAttachment} />
        const attachmentSectionStart = <AttachmentsUI deleteAttachment={this.deleteFile} uploadFile={uploadComponent} attachments={this.state.startAttachments} period={"startAttachments"} />
        const attachmentSectionEnd = <AttachmentsUI deleteAttachment={this.deleteFile} uploadFile={uploadComponent} attachments={this.state.endAttachments} period={"endAttachments"} />
        const taskPlacesStart = <TaskPlaces state={this.state} onTextChange={this.handleChange} icons={icons}
            period={"start"} attachmentSection={attachmentSectionStart} />;
        const taskPlacesEnd = <TaskPlaces state={this.state} onTextChange={this.handleChange} icons={icons}
            period={"end"} attachmentSection={attachmentSectionEnd} />;
        const tasksFlowDetailed = <TasksFlowDetailed icons={icons}
            flowDetailed={this.state.taskFlowDetailed}
            removeFlow={this.removeFlow} addValueToList={this.addValueToList} />;




        return (
            <div>
                <NameSection singleTaskIndex={singleTaskIndex} state={this.state} dateSection={dateSection}
                    taskPlacesStart={taskPlacesStart} taskPlacesEnd={taskPlacesEnd}
                    tasksFlowDetailed={tasksFlowDetailed}
                    onTextChange={this.handleChange}
                    returnDefault={this.returnDefault} save={this.save}
                    isNewTask={this.props.match.url.includes("newtask")}
                    icons={icons}
                    addValueToList={this.addValueToList}
                    doers={this.state.doers}
                    update={this.update}
                    remove={this.delete}
                    tasksInStore={this.props.state.tasks}
                    removeFromList={this.removeValueFromList}
                    updateFiles={this.updateFiles}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { state: state.helperPage }
};
const mapDispatchToProps = dispatch => {
    return {
        changeCalendarDate: (date, period) => {
            dispatch(setCalendarDate(date, period))
        },
        addTitle: (title) => {
            dispatch(titleAction(title))
        }
    }
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(SingleTaskContainer)