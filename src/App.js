import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings} from './components';
import { Ecommerce, Orders, Calendar, Employees, Customers, Kanban, Editor, ColorPicker, Line, Area, Pie, Bar, Financial, ColorMapping, Pyramid, Stacked } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
    const {activeMenu} = useStateContext();

    return (
        <div>
            <BrowserRouter>
                <div className='relative flex dark:bg-main-dark-bg'>
                    <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
                        <TooltipComponent content='Settings' position='Top'>
                            <button type='bottom' className='p-3 text-3xl text-white hover:drop-shadow-xl hover:bg-light-gray' style={{ background: 'green', borderRadius: '50%' }}>
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>

                    {activeMenu ? (
                        <div className='fixed bg-white w-72 sidebar dark:bg-secondary-dark-bg'>
                            <Sidebar />
                        </div> ): (
                        <div className='w-0 dark:bg-secondary-dark-bg' >
                            <Sidebar />
                        </div>
                    )}
                    <div className={ 
                       activeMenu
                       ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                       : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
                        }>
                            <div className='fixed w-full md:static bg-main-bg dark:bg-main-dark-bg navbar'>
                                <Navbar />
                            </div>

                    <div>
                        <Routes>
                            {/* Dashboard */}
                            <Route path='/' element={<Ecommerce />} />
                            <Route path='/ecommerce' element={<Ecommerce />} />

                            {/* Pages */}
                            <Route path='/orders' element={<Orders />} />
                            <Route path='/employees' element={<Employees />} />
                            <Route path='/customers' element={<Customers />} />

                            {/* Apps */}
                            <Route path='/kanban' element={<Kanban />} />
                            <Route path='/editor' element={<Editor />}/>
                            <Route path='/calendar' element={<Calendar />} />
                            <Route path='/color-picker' element={<ColorPicker />} />

                            {/* Chart */}
                            <Route path='/line' element={<Line />} />
                            <Route path='/area' element={<Area />} />
                            <Route path='/pie' element={<Pie />} />
                            <Route path='/bar' element={<Bar />} />
                            <Route path='/financial' element={<Financial />} />
                            <Route path='/color-mapping' element={<ColorMapping />} />
                            <Route path='/pyramid' element={<Pyramid />} />
                            <Route path='/stacked' element={<Stacked />} />

                        </Routes>
                    </div>
                </div>
            </div>  
            </BrowserRouter>
        </div>
    )
}

export default App