
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';



const AppointmentBanner = ({ date, setDate }) => {
    return (
        <section style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }}>
            <div className="hero min-h-screen bg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='mr-6'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;