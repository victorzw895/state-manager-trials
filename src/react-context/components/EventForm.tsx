import { FC, useState, useEffect } from 'react';
import { Event } from '../../types';

import EventFormComponent from '../../components/common/EventFormComponent';
import DateField from './DateField';
import MultipleSelect from './MultipleSelect';
import TextInput from './TextInput';
import { useContextDispatch } from '../useDispatch';

export interface EventProps {
  event?: Event,
  handleSubmit: (event: Event) => void,
  closeForm: () => void,
}

// 👀 ⛔️ PROP DRILLING
const Event: FC<EventProps> = ({event = {} as Event, handleSubmit, closeForm}) => {
    const { id, title, date, guests = [], description, createdBy } = event;
    const { setIsDisabled } = useContextDispatch();

    useEffect(() => {
      const userId = localStorage.getItem('userId');
      
      if (userId !== createdBy) {
        setIsDisabled(true)
      }
      else setIsDisabled(false)
    }, [createdBy])

    return (
      <EventFormComponent
        event={event}
        handleSubmit={handleSubmit}
        closeForm={closeForm}
      >
        {/* 👀 ✅ Remove PROP DRILLING here - `disabled={isDisabled}` */}
        <TextInput id={id} title={title} />
        {/* 👀 ✅ Remove PROP DRILLING here - `disabled={isDisabled}` */}
        <DateField id={id} date={date} />
        {/* 👀 ✅ Remove PROP DRILLING here - `disabled={isDisabled}` */}
        <MultipleSelect id={id} values={guests} />
        {/* 👀 ✅ Remove PROP DRILLING here - `disabled={isDisabled}` */}
        <TextInput id={id} description={description} />
      </EventFormComponent>
    )
}

export default Event;