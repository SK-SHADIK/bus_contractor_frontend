import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Profile from '../Profile';
import ChangeInformation from '../ChangeInformation';
import TransactionHistory from '../TransactionHistory';
import CreateTran from '../CreateTran';
import Payments from '../Payments';
import UpdateTransaction from '../UpdateTransaction';




const RouteLink = () => {
    return (
        <div>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Dashboard />}></Route>
                    <Route path="/Dashboard" element={<Dashboard />}></Route>
                    <Route path="/Profile" element={<Profile />}></Route>
                    <Route path="/TransactionHistory" element={<TransactionHistory />}></Route>
                    <Route path="/CreateTran" element={<CreateTran />}></Route>
                    <Route path="/Payments" element={<Payments />}></Route>
                    <Route path="/UpdateTransaction/:id" element={<UpdateTransaction />}></Route>
                    <Route path="/ChangeInformation/:id" element={<ChangeInformation />}></Route>

                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default RouteLink;