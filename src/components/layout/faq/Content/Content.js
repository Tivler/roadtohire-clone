import React from 'react';
import './_styles.scss';

const Content = () => {
    return (
        <>
            <section className="faqcontent">
                <div className="faqcontent--wrapper">
                    <h3 className="faqcontent__title">Student Eligibility</h3>
                        <ol>
                            <li><strong>Who's Eligible To Apply?</strong></li>
                            <p className="p">In order to be an eligible applicant, you must have graduated high school or obtained a GED before starting the program and live in the Charlotte metropolitan area.</p>
                            <li><strong>Do I have to live in the Charlotte metropolitan area?</strong></li>
                            <p className="p">Yes. Participants will train onsite at the Road to Hire North or South Charlotte campus for 30-40 hours each week. </p>
                            <li><strong>Is there a minimum GPA requirement for Road to Hire?</strong></li>
                            <p className="p">There is no specific GPA requirement.  We look for candidates who demonstrate a strong work ethic.</p>
                            <li><strong>Is there an age requirement for the Road to Hire program?</strong></li>
                            <p className="p">We're looking for motivated young adults in the greater Charlotte area between the ages of 18 and 25.</p>
                            <li><strong>Is work authorization required to be eligible for Road to Hire?</strong></li>
                            <p className="p">As our mission is to create employment opportunities for motivated young adults, work authorization is a program requirement.</p>
                        </ol>
                    <h3 className="faqcontent__title">Experience & Benefits</h3>
                        <ol>
                            <li><strong>What is the program timeline or schedule?</strong></li>
                            <p className="p">Training is 30 to 40 hours per week and consists primarily of Charlotte area onsite sessions. </p>
                            <li><strong>Does Road to Hire provide compensation or housing?</strong></li>
                            <p className="p">Road to Hire participants will receive a weekly stipend during training and full-time pay and generous benefits upon graduation. Applicants should live in the Charlotte metro area and are responsible for their own housing.</p>
                            <li><strong>What supports are available to Road to Hire students?</strong>
                                <ol className="ol">
                                    <li className="tl"><strong>Clothing Closet:</strong> Don’t have business casual attire? No problem! We offer our participants access to our Clothing Closet, which has a large number of free business casual options.</li>
                                    <li><strong>Food Captains:</strong> You can’t learn on an empty stomach. Students will be given a budget of $50/week per cohort. As a cohort, they will assign a Food Captain and this person will be responsible for weekly grocery shopping. **this is on an as needed basis</li>
                                    <li><strong>Transportation Captain:</strong> Our Transportation Captain program ensures that we work as a team and never leave anyone behind. Road to Hire will pay transportation captains an extra $30/week in addition to their stipend to transit students without reliable transportation to and from our program. If there are students who don’t live near a captain, we will connect them with our Uber account.</li>
                                    <li><strong>On-Site Health Clinic:</strong> Feeling under the weather? The Red Ventures team has agreed to allow our students to take advantage of the on-site health clinic. Confidential checkups are available at a reduced cost of only $5. Only available to program participants.</li>
                                    <li><strong>Employee Assistance Program:</strong> Confidential service available 24/7 that provides assessment, counseling, and resources to help participants resolve personal issues. This program also provides referrals for a variety of issues, including child/elder care.</li>
                                    <li className="li"><strong>On-site Gym:</strong> A healthy body is a healthy mind. While enrolled in our program, our students have access to the Red Ventures gym and fitness facilities as well as fitness classes, which include meditation, yoga, cardio and circuit training, spin, and more.</li>
                                </ol>
                            </li>
                            <li><strong>Does every Road to Hire participant get a job?</strong></li>
                            <p className="p">Each Road to Hire participant who successfully completes program training, assessments and other requirements will be eligible for a full-time employment opportunity near Charlotte in North Carolina or South Carolina. Successful completion of the program requires time management and dedication.</p>
                            <li><strong>Is the Road to Hire program a competition?</strong></li>
                            <p className="p">No, although we believe competition is healthy, our goal is to place all Road to Hire graduates in a full-time job in the greater Charlotte area once they complete the program.</p>
                            <li><strong>Are there any costs associated with Road to Hire?</strong></li>
                            <p className="p">Road to Hire covers all training costs.</p>
                        </ol>
                    <h3 className="faqcontent__title">Application Process</h3>
                        <ol>
                            <li><strong>What happens after I submit my application?</strong></li>
                            <p className="p">All applications will be carefully reviewed. Candidates will be notified via email if they are selected to move forward in the interview process.</p>
                            <li><strong>What should I do if I haven't heard back about my application, but the date for feedback has passed?</strong></li>
                            <p className="p">Please check your spam/junk mail folders to see if you have received an email from Road to Hire.  Email info@roadtohire.org if you are unable to find it.</p>
                            <li><strong>Are recommendation letters required?</strong></li>
                            <p className="p">Recommendation letters are not required.</p>
                        </ol>
                    <h3 className="faqcontent__title">Tech Faqs</h3>
                        <ol>
                            <li><strong>Is this a paid program? </strong></li>
                            <p className="p">Yes. The Road to Hire Tech Program is a six-month, full-time, paid position.</p>
                            <li><strong>Do I need to know how to code before I apply?</strong></li>
                            <p className="p">No. We’re looking for young adults who are passionate about technology and love solving problems. We’ll teach you the rest!</p>
                            <li><strong>What do successful candidates look like?</strong></li>
                            <p className="p">The most successful candidates are self-starters who can operate independently but aren’t afraid to ask questions.</p>
                        </ol>
                    <a className="faqcontent__button" href="https://boards.greenhouse.io/road2hire/jobs/1830097?gh_src=ee07e9541"  rel="noopener noreferrer" target="_blank">Apply Now</a>
                </div>

            </section>
        </>
    )
}

export default Content;