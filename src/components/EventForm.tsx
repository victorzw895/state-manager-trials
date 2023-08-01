import { FC, useState, useEffect } from 'react';
import { Event } from '../types';

import DateField from './DateField';
import MultipleSelect from './MultipleSelect';
import EventFormComponent from './common/EventFormComponent';
import TextField from './common/TextFieldComponent';

export interface EventProps {
  event?: Event,
  handleSubmit: (event: Event) => void,
  closeForm: () => void,
}

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
          <TextField id={id} title={title} disabled={isDisabled} />
          <DateField id={id} date={date} disabled={isDisabled} />
          <MultipleSelect id={id} values={guests} disabled={isDisabled} />
          <TextField id={id} description={description} disabled={isDisabled} />
        </EventFormComponent>
    )
}

export default Event;