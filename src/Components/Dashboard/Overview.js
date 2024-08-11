import React from 'react'
import bar from '../../assets/Images/bar.svg'
import chart from '../../assets/Images/chart.svg'
import graph from '../../assets/Images/graph.svg'
import usa from '../../assets/Images/flags/usa.svg'
import aus from '../../assets/Images/flags/aus.svg'
import china from '../../assets/Images/flags/china.svg'
import germany from '../../assets/Images/flags/germany.svg'
import romaina from '../../assets/Images/flags/romania.svg'
import japan from '../../assets/Images/flags/japan.svg'
import nether from '../../assets/Images/flags/nether.svg'
import outercircle from '../../assets/Images/Outer-circle.svg'

const Overview = () => {
  return (
    <>
        <div className="main">
                
                <div className="basic-info">
                    <div className="box">
                        <h4>Users Total</h4>
                        <div className="info">
                            <h2>11.8M</h2>
                            <span>+2.5%</span>
                        </div>
                    </div>

                    <div className="box">
                        <h4>New Users</h4>
                        <div className="info">
                            <h2>8.236K</h2>
                            <span className="temp">-1.2%</span>
                        </div>
                    </div>

                    <div className="box">
                        <h4>Active Users</h4>
                        <div className="info">
                            <h2>2.352M</h2>
                            <span>+11%</span>
                        </div>
                    </div>

                    <div className="box">
                        <h4>New Users</h4>
                        <div className="info">
                            <h2>8K</h2>
                            <span>+5.2%</span>
                        </div>
                    </div>
                </div>

                <div className="second-section">
                    <div className="left">
                        <div className="first">
                            <h2>Target</h2>
                            <div class="status-indicators">
                                <div class="status-item">
                                <span class="status-dot achieved"></span>
                                Achieved
                                </div>
                                <div class="status-item">
                                <span class="status-dot remaining"></span>
                                Remaining
                                </div>
                            </div>
                            <div className="img">
                                <img src={bar} alt="" />
                            </div>
                        </div>

                        <div className="second first">
                            <h2>Most Active Account Types</h2>
                            <div class="status-indicators">
                                <div class="status-item">
                                <span class="status-dot achieved"></span>
                                Very Active
                                </div>
                                <div class="status-item">
                                <span class="status-dot remaining"></span>
                                Inactive
                                </div>
                            </div>
                            <div className="img">
                                <img src={chart} alt="" />
                            </div>                        
                        </div>
                    </div>

                    <div className="right">
                            <h2>Active Countries</h2>
                            <div class="status-indicators">
                                <div class="status-item">
                                <span class="status-dot achieved"></span>
                                Very Active
                                </div>
                                <div class="status-item">
                                <span class="status-dot remaining"></span>
                                Inactive
                                </div>
                            </div>
                            <div className="img">
                                <img src={graph} alt="" />
                                <div className="textbox">
                                    <p> Vel odio leo lacus, maecenas elit sagittis aliquam amet. </p>
                                    <div className="buttons">
                                        <p className="btn1">Link Action</p>
                                        <button className="btn2">Button</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>

                <div className="third-section">
                    <div className="left">
                        <h2>Users By Country </h2>
                        <div className="content">
                            <div className="first">
                                <div className='one'> <img src={usa} alt="usa" /> <p>United States</p> </div>
                                <div className='one'> <img src={aus} alt="usa" /> <p>Australia</p> </div>
                                <div className='one'> <img src={china} alt="usa" /> <p>China</p> </div>
                                <div className='one'> <img src={germany} alt="usa" /> <p>Germany</p> </div>
                                <div className='one'> <img src={romaina} alt="usa" /> <p>Romania</p> </div>
                                <div className='one'> <img src={japan} alt="usa" /> <p>Japan</p> </div>
                                <div className='one'> <img src={nether} alt="usa" /> <p>Netherlands</p> </div>
                            </div>
                            <div className="second">
                                <div className="row"> <p>27.5%</p> <p className="temp">4.5M</p> </div>
                                <div className="row"> <p>11.2%</p> <p className="temp">2.3M</p> </div>
                                <div className="row"> <p>9.4%</p> <p className="temp">2M</p> </div>
                                <div className="row"> <p>8%</p> <p className="temp">1.7M</p> </div>
                                <div className="row"> <p>7.9%</p> <p className="temp">1.6M</p> </div>
                                <div className="row"> <p>6.1%</p> <p className="temp">1.2M</p> </div>
                                <div className="row"> <p>5.9%</p> <p className="temp">1M</p> </div>
                            </div>
                        </div>
                    </div>

                    <div className="right">

                        <h2>Top 5 Best Selling Users</h2>

                        <div className="content">

                            <div className="first">
                                <img src={outercircle} alt="" />
                            </div>

                            <div className="second">
                                <div className="row">
                                    <div class="status-indicators">
                                        <div class="status-item">
                                        <span class="status-dot temp1"></span>
                                            User Name
                                        </div>
                                    </div>
                                    <div className="price">
                                        <p>$1.2M</p>
                                        <span>+8.2%</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="status-indicators">
                                        <div class="status-item">
                                        <span class="status-dot temp2"></span>
                                            User Name
                                        </div>
                                    </div>
                                    <div className="price">
                                        <p>$800M</p>
                                        <span>+7%</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="status-indicators">
                                        <div class="status-item">
                                        <span class="status-dot temp3"></span>
                                            User Name
                                        </div>
                                    </div>
                                    <div className="price">
                                        <p>$645M</p>
                                        <span>+2.5%</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="status-indicators">
                                        <div class="status-item">
                                        <span class="status-dot temp4"></span>
                                            User Name
                                        </div>
                                    </div>
                                    <div className="price">
                                        <p>$590M</p>
                                        <span className="temp">-6.5%</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="status-indicators">
                                        <div class="status-item">
                                        <span class="status-dot temp5"></span>
                                            User Name
                                        </div>
                                    </div>
                                    <div className="price">
                                        <p>$342M</p>
                                        <span>+1.7%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>  
    </>
  )
}

export default Overview
