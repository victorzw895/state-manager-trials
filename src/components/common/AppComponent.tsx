import { FC, ReactNode } from 'react';
import '../../App.css'
// import Calendar from './components/Calendar';
import RenderCounter from '../../util/renderCounter';

interface AppComponentProps {
    children: ReactNode;
}

const AppComponent: FC<AppComponentProps> = ({children}) => {

  return (
    <>
        <RenderCounter componentName='App' />
        {children}
    </>
  )
}

export default AppComponent
