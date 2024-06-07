import React from 'react';
import Header from '../../Component/Header';
import NavBar from '../../Component/NavBar';

const DashBoard = () => {
    return (
        <>
        <Header showIcon={true} text="홈" backButton={false} />
            <div style={{ paddingTop: '60px', paddingBottom: '50px', minHeight: 'calc(100vh - 110px)', overflowY: 'auto' }}> {/* Header와 NavBar의 높이만큼 빼주기 위해 calc() 함수 사용 */}
                <p>DashBoard 페이지</p>
            </div>
        <NavBar activeState="Statistic" />
    </>
    );
};

export default DashBoard;