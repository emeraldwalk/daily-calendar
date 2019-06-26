import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { Schedule } from '..';
import { getMonthlySchedule } from '../../model/schedule';

export interface AppProps {
}

const App: React.FC<AppProps> = () => (
  <PDFViewer className="c_app">
    <Schedule month={getMonthlySchedule(new Date())}/>
  </PDFViewer>
);

// const App: React.FC<AppProps> = () => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   useEffect(() => {
//     if(isLoaded) {
//       document.querySelector('a')!.click();
//     }
//   }, [isLoaded]);

//   function content(isLoading: boolean) {
//     if(isLoading) {
//       return 'Loading...';
//     }

//     setIsLoaded(true);
//     return 'Download';
//   }

//   return (
//     <PDFDownloadLink
//       className="c_app"
//       document={<Schedule month={getMonthlySchedule(new Date())}/>}
//       fileName="test.pdf">
//       {({ loading }) => content(loading)}
//     </PDFDownloadLink>
//   );
// };

export default App;