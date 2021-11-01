import React from 'react';
import faqIMG from './images/faq.png'

const FAQ = () => {
    return (
        <div>
            <div className="container-lg">
                <div className="row">
                    <div className="col-lg-5">
                        <img src={faqIMG} alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-7">
                        <h2 className="mb-4 mt-lg-0 mt-3">Frequently Ask Questions</h2>
                        <div className="accordion w-lg-75 mx-lg-auto" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Can I get a expert tourist guide?</button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body text-start">It can be daunting to visit a doctor for symptoms of what might be an undiagnosed medical problem. Patients often struggle to adequately explain their symptoms during the brief medical interview, which is an important component of helping the physician</div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">How do explain a problem to a doctor?</button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body text-start">Home visit doctors are not some of the latest innovations. They have prevailed long before. And old fashion is coming back due to many reasons. We bring the quickest, most reliable medical service solution to every area in Dhaka. We have a major number of doctors in every part of Dhaka city ready to offer medical care at your home.</div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">How do I get doctor in trouble?</button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body text-start">It can be daunting to visit a doctor for symptoms of what might be an undiagnosed medical problem. Patients often struggle to adequately explain their symptoms during the brief medical interview, which is an important component of helping the physician</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;