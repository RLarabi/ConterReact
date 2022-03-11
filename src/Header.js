import React, { Component } from 'react';
import  './STYLE.css';
import Second from './Second';
import {Link} from 'react-scroll';
export default class Header extends Component {
    render() {
        return (
            <>
            <div className='Header' >
                <ul className='Liste_Header'>
                <li className="Text LARABI">
                        <Link to='' activeClass="active" smooth={true} spy={true}>
                            LARABI
                        </Link>
                    </li>
                    <li className="Text Home">
                        <Link to='' activeClass="active" smooth={true} spy={true}>
                            Home
                        </Link>
                    </li>
                    <li className="Text">
                        <Link to='sec' activeClass="active" smooth={true} spy={true}>
                            About
                        </Link>
                    </li>
                    <li className="Text">
                        <Link to='' activeClass="active" smooth={true} spy={true}>
                            Skills
                        </Link>
                    </li>
                    <li className="Text">
                        <Link to='ther' activeClass="active" smooth={true} spy={true}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div id='sec' className='sec_page'>
                <Second/>
            </div>
            {/* <div id='ther'>
            <Second id="ther"/>
            </div> */}
            </>
        )
    }
}
