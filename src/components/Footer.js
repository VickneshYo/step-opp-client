import '../pages/css/homeStyle.css';
import '../pages/js/home';
import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <div>
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 h-100 text-dark text-center text-lg-start my-auto">
                        <ul class="list-inline mb-3">
                            <li class="list-inline-item"><Link to="/aboutus" style={{textDecoration:"none"},{color:"black"}}>About Us</Link></li>
                            <li class="list-inline-item " style={{color:"black"}}>⋅</li>
                            <li class="list-inline-item " ><a href="/contactus"  style={{textDecoration:"none"},{color:"black"}}>Contact Us</a></li>
                            <li class="list-inline-item " style={{color:"black"}}>⋅</li>
                            <li class="list-inline-item " ><a href="/subscribe" style={{textDecoration:"none"},{color:"black"}}>Subscribe Us</a></li>
                            <li class="list-inline-item " style={{color:"black"}}>⋅</li>
                            <li class="list-inline-item " ><a href="#!" style={{textDecoration:"none"},{color:"black"}}>Terms of Use</a></li>
                        </ul>
                        <p class="text-dark medium mb-4 mb-lg-0">&copy; Opportunities.lk</p>
                        <p class="text-dark medium mb-4 mb-lg-0">All Rights Reserved.</p>
                    </div>
                    <div class="col-lg-6 h-100 text-center text-lg-end my-auto">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item me-4">
                                <a href="#!"><i class="bi-facebook fs-3 text-dark"></i></a>
                            </li>
                            <li class="list-inline-item me-4">
                                <a href="#!"><i class="bi-twitter fs-3 text-dark"></i></a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#!"><i class="bi-instagram fs-3 text-dark"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    );
}