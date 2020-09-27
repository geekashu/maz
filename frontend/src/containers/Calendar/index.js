import React, {useEffect, useState, useMemo} from "react";
import moment from "moment";
import ReactPlaceholder from "react-placeholder";
import {Calendar, momentLocalizer} from 'react-big-calendar'
import {useDispatch, useSelector} from "react-redux";
import {CalendarAction} from "actions";
import {CalendarSelector, CommonSelector} from "selectors";
import {CalendarConstant} from "constants/index";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogContentText from "@material-ui/core/DialogContentText";
import FormControl from '@material-ui/core/FormControl';

import {Controller, useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers';
import * as yup from "yup";
import ButtonWithLoader from "components/Buttons";
import {DateTimePicker} from '@material-ui/pickers';


const localizer = momentLocalizer(moment)

const MAZCalendar = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedEndDate, setSelectedEndDate] = useState(new Date());
    const events = useSelector(CalendarSelector.getEvents());
    const eventsLoader = useSelector(CommonSelector.isLoading(CalendarConstant.GET_EVENTS))
    const loaderCreateEvent = useSelector(CommonSelector.isLoading(CalendarConstant.CREATE_EVENT))

    useEffect(() => {
        dispatch(CalendarAction.getEvents());
        // eslint-disable-next-line
    }, [])

    const handleEventSelect = (event) => {
        console.log("Handle Select")
        alert(event.title)
    }

    const handleSelectSlot = (slotInfo) => {
        setOpen(true);
        setSelectedDate(slotInfo.start);
        setSelectedEndDate(slotInfo.end)
    }

    const onRequestClose = () => {
        setOpen(false);
    }

    const eventSchema = useMemo(
        () =>
            yup.object().shape({
                event_name: yup.string().required(),
                schedule_name: yup.string().required(),
            }),
        []
    );
    const {register, handleSubmit, errors, control, formState} = useForm({
        mode: 'all',
        resolver: yupResolver(eventSchema),
    });
    const { isValid, isSubmitting, isDirty } = formState;

    const onSubmit = (params) => {
        console.log(params);
        console.log(selectedDate, selectedEndDate);
        let payload = {
            "title": params.event_name,
            "description": params.event_description,
            "appointments": [
                {
                    "start": selectedDate,
                    "interval": moment.duration(moment(selectedEndDate).diff(moment(selectedDate))),
                    "description": params.schedule_description,
                    "title": params.schedule_name,
                    "alert": false,
                }
            ]
        }
        dispatch(CalendarAction.createEvent(payload));
    }

    const handleEventDelete = (params) => {
        // dispatch(CalendarAction.deleteEvent(params));
        // TODO
    }

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    const handleEndDateChange = (date) => {
        setSelectedEndDate(date);
    }

    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <div className="app-calendar app-cul-calendar animated slideInUpTiny animation-duration-3 card p-2">
                <h3 className="callout">
                    Click an event to see more info, or
                    drag the mouse over the calendar to select a date/time range.
                </h3>
                <ReactPlaceholder showLoadingAnimation type='text' rows={14} ready={!eventsLoader}>
                    <Calendar
                        localizer={localizer}
                        selectable
                        events={events}
                        defaultView='week'
                        scrollToTime={new Date(1970, 1, 1, 6)}
                        defaultDate={new Date()}
                        onSelectEvent={handleEventSelect}
                        onSelectSlot={handleSelectSlot}
                    />
                    <Dialog open={open} onClose={onRequestClose} disableEnforceFocus>
                        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                            <DialogTitle>Add Event</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Use this form to add your event details.
                                </DialogContentText>
                                <div className="col-xs-12 col-sm-12">
                                    <div className="row">
                                        <div className="col-md-12 mt-2 mb-2">
                                            <FormControl className="col-md-12">
                                                <TextField name="event_name" type="text" inputRef={register} label="Event Name" margin="normal" fullWidth
                                                           error={!!errors.event_name} helperText={errors.event_name ? errors.event_name.message : ''}
                                                           // defaultValue={item.event_name} disabled={isRead}
                                                           required InputLabelProps={{ shrink: true }} />
                                            </FormControl>
                                        </div>
                                        <div className="col-md-12 mt-2 mb-2">
                                            <FormControl className="col-md-12">
                                                <TextField name="event_description" type="text" inputRef={register} label="Event Description" margin="normal" fullWidth
                                                           error={!!errors.event_description} helperText={errors.event_description ? errors.event_description.message : ''}
                                                           // defaultValue={item.event_description} disabled={isRead}
                                                           InputLabelProps={{ shrink: true }} />
                                            </FormControl>
                                        </div>
                                        <div className="col-md-12 mt-2 mb-2">
                                            <FormControl className="col-md-12">
                                                <TextField name="schedule_name" type="text" inputRef={register} label="Schedule Name" margin="normal" fullWidth
                                                           error={!!errors.schedule_name} helperText={errors.schedule_name ? errors.schedule_name.message : ''}
                                                           // defaultValue={item.schedule_name} disabled={isRead}
                                                           required InputLabelProps={{ shrink: true }} />
                                            </FormControl>
                                        </div>
                                        <div className="col-md-12 mt-2 mb-2">
                                            <FormControl className="col-md-12">
                                                <TextField name="schedule_description" type="text" inputRef={register} label="Schedule Description" margin="normal" fullWidth
                                                           error={!!errors.schedule_description} helperText={errors.schedule_description ? errors.schedule_description.message : ''}
                                                           // defaultValue={item.schedule_name} disabled={isRead}
                                                           InputLabelProps={{ shrink: true }} />
                                            </FormControl>
                                        </div>
                                        <div className="col-md-12 mt-2 mb-2">
                                            <FormControl className="col-md-12">
                                                <Controller
                                                    as={
                                                        <DateTimePicker
                                                            renderInput={
                                                                (props) => <TextField {...props} />
                                                            }
                                                            label="Schedule Start"
                                                            value={selectedDate}
                                                            onChange={handleDateChange}
                                                        />
                                                    }
                                                    control={control}
                                                    name="schedule_start"
                                                />
                                            </FormControl>
                                        </div>
                                        <div className="col-md-12 mt-2 mb-2">
                                            <FormControl className="col-md-12">
                                                <Controller
                                                    as={
                                                        <DateTimePicker
                                                            renderInput={
                                                                (props) => <TextField {...props} />
                                                            }
                                                            label="Schedule End"
                                                            value={selectedEndDate}
                                                            onChange={handleEndDateChange}
                                                        />
                                                    }
                                                    control={control}
                                                    name="schedule_end"
                                                />
                                            </FormControl>
                                        </div>
                                    </div>
                                </div>
                            </DialogContent>
                            <DialogActions>
                                <div className="d-flex w-100 justify-content-between pl-2 pr-2">
                                    <div>
                                        <ButtonWithLoader type="submit" variant="contained" color="primary"
                                                          className="mt-2 mb-2 jr-btn-sm"
                                                          disabled={!isValid || isSubmitting || !isDirty}
                                                          loader={loaderCreateEvent}>
                                            Save
                                        </ButtonWithLoader>
                                        <Button variant="contained" color="primary" className="ml-2 mt-2 mb-2 jr-btn-sm"
                                                disabled={isSubmitting} onClick={onRequestClose}>
                                            Cancel
                                        </Button>
                                    </div>
                                    <div>
                                        <Button variant="contained" className="ml-2 mt-2 mb-2 jr-btn-sm bg-danger text-white"
                                                disabled={isSubmitting} onClick={handleEventDelete}>
                                            Delete
                                        </Button>
                                    </div>
                                </div>
                            </DialogActions>
                        </form>
                    </Dialog>
                </ReactPlaceholder>
            </div>
        </div>
    )
}

export default MAZCalendar;