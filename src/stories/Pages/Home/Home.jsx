import React from 'react';
import { DatePicker } from 'ios-style-picker';
import '../../Component/ios-style-picker.css';

const Home = () => {
    return (
        <div>
            <DatePicker
                infinite
                onChange={(y, m, d) => {
                    console.log(y, m, d);
                  }}
            />
        </div>
    );
};

export default Home;