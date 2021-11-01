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
                                    <div className="accordion-body text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum eligendi totam quos unde, iste quis non deleniti accusantium saepe consectetur id dolore odio libero autem officiis aut itaque nemo ratione!</div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">If i get in sick i get a doctor here?</button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio consequuntur alias explicabo. Voluptatum laborum eaque assumenda molestias, accusantium tenetur maiores totam, vero quam vitae alias, reiciendis eos omnis et?</div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">How is the method payment method?</button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum expedita cumque, totam vel quam unde molestias repellat assumenda autem! Quos ullam impedit ducimus doloribus nulla animi ea quisquam, sunt qui!</div>
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