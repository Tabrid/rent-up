import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer';

const Dashboard = () => {
    return (
        <div>
            <Header></Header>
              <div>
             <div className='flex flex-wrap'>
                <div className=' w-1/4 h-3/4'>
                <Link to="/dashboard/profile"><button className="btn w-3/4 m-5">Profile</button></Link>
                <Link to="/dashboard/assignment"><button className="btn w-3/4 m-5"> Assignment</button></Link>
                </div>
                <div className=' w-3/4 h-screen'>
                    <Outlet></Outlet>
                </div>

             </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Dashboard;