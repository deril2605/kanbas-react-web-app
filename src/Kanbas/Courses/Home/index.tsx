import ModuleList from "../Modules/List";
import { FaRegCheckCircle, FaFileImport, FaChartBar, FaBullhorn, FaRegBell, FaCalendarAlt, FaRegCalendarCheck } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { GrTarget } from "react-icons/gr";

function Home() {
    return (
        <div>
            <h2>Home</h2>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="col-lg-7 col-12 col-md-10 col-sm-12 col-xs-12 d-md-block mt-3" style={{ width: '80%' }}>
                    <ModuleList />
                </div>
                <div style={{ width: '20%' }}>
                    <h3>Course Status</h3>
                    <div className="d-flex" style={{ marginBottom: 15 }}>
                        <button type="button" className="btn btn-outline-secondary me-1">Unpublish</button>
                        <button type="button" className="btn btn-outline-secondary"><FaRegCheckCircle className="pe-1 fs-4" style={{ color: 'green' }} />
                            Published</button>
                    </div>
                    <ul className="wd-modules-buttons-canvas me-5">
                        <li className="list-group-item"><button type="button"
                            className="btn btn-outline-secondary text-start"><FaFileImport className="pe-1 fs-5" />
                            Import Existing
                            Content</button></li>
                        <li className="list-group-item"><button type="button"
                            className="btn btn-outline-secondary text-start"><FaRegArrowAltCircleRight className="pe-1 fs-5" />
                            Import from Commons</button></li>
                        <li className="list-group-item"><button type="button"
                            className="btn btn-outline-secondary text-start">
                            <GrTarget className="pe-1 fs-5" /> Choose Home Page</button></li>
                        <li className="list-group-item"><button type="button"
                            className="btn btn-outline-secondary text-start">
                            <FaChartBar className="pe-1 fs-5" /> View Course Stream</button></li>
                        <li className="list-group-item"><button type="button"
                            className="btn btn-outline-secondary text-start">
                            <FaBullhorn className="pe-1 fs-5" /> New Announcement</button></li>
                        <li className="list-group-item"><button type="button"
                            className="btn btn-outline-secondary text-start">
                            <FaChartBar className="pe-1 fs-5" /> New Analytics</button></li>
                        <li className="list-group-item"><button type="button"
                            className="btn btn-outline-secondary text-start">
                            <FaRegBell className="pe-1 fs-5" /> View Course Notifications</button></li>
                    </ul>

                    <div className="wd-modules-coming-up">
                        <h6 style={{ marginBottom: 0 }}>Coming Up</h6>
                        <a className="me-3" href="#"><FaCalendarAlt className="pe-1 fs-5" /> View Calendar</a>
                    </div>
                    <hr />

                    <ul className="wd-modules-buttons-coming-up">
                        <li className="list-group-item"><a href="#"><FaRegCalendarCheck className="pe-1 fs-6" />
                            Lecture</a><br />
                            <div style={{ fontSize: 'x-small', marginLeft: 18 }}>
                                <div>CS1234.12631.20241010</div>
                                <div>Sep 11 11:45am</div>
                            </div>
                        </li>
                        <li className="list-group-item"><a href="#"><FaRegCalendarCheck className="pe-1 fs-6" />
                            CS5610 06 SP24 Lecture</a><br />
                            <div style={{ fontSize: 'x-small', marginLeft: 18 }}>
                                <div>CS1234.12631.20241010</div>
                                <div>Sep 11 6pm</div>
                            </div>
                        </li>

                        <a href="#">12 more in the next week</a>
                    </ul>

                </div>
            </div>

        </div>
    );
}
export default Home;
