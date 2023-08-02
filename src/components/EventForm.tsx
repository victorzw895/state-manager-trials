import { FC, useState, useEffect } from 'react';
import { Event } from '../types';

import EventFormComponent from './common/EventFormComponent';
import DateField from './DateField';
import MultipleSelect from './MultipleSelect';
import TextInput from './TextInput';

export interface EventProps {
  event?: Event,
  handleSubmit: (event: Event) => void,
  closeForm: () => void,
}

// 👀 ⛔️ PROP DRILLING
const Event: FC<EventProps> = ({event = {} as Event, handleSubmit, closeForm}) => {
    const { id, title, date, guests = [], description, createdBy } = event;
    const [isDisabled, setIsDisabled] = useState(false);

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
          <TextInput id={id} title={title} disabled={isDisabled} />
          <DateField id={id} date={date} disabled={isDisabled} />
          <MultipleSelect id={id} values={guests} disabled={isDisabled} />
          <TextInput id={id} description={description} disabled={isDisabled} />
        </EventFormComponent>
    )
}

export default Event;