import { StaticImage } from 'gatsby-plugin-image';
import {
    AcademyFill,
    ChevronRight,
    HammerFill,
    Laurels,
    Megaphone,
    Sparkles,
} from 'gthibaud-icons-react';
import { Toaster } from 'react-hot-toast';
import { ButtonUnstyled } from '../components/Button/unstyled';
import { Columns } from '../components/Container/Columns';
import { MainContainer } from '../components/Container/Main';
import { TiltingContainer } from '../components/Container/Titling';
import { EmailForm } from '../components/EmailForm';
import { FAQ } from '../components/FAQ';
import { Feature } from '../components/Feature';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Plan } from '../components/Plan';
import { Problem } from '../components/Problem';
import { CardSection } from '../components/Section/CardSection';
import { PlanSection } from '../components/Section/PlanSection';
import { BigTitle } from '../components/Typography/BigTitle';
import { Body } from '../components/Typography/Body';
import { SectionTitle } from '../components/Typography/SectionTitle';
import { SubTitle } from '../components/Typography/SubTitle';

const BACKGROUND_DEFAULT = '#FFFFFF';

const Main = () => {
    return (
        <div className="flex flex-col align-center">
            <Header />
            <MainContainer>
                <BigTitle>Become the architect of tomorrow's apps</BigTitle>
                <SubTitle>
                    <span>
                        We teach developers to build applications
                        <br />
                        that will shape the future
                        <HammerFill className="fill-palettePurple" />
                    </span>
                </SubTitle>
                <div className="flex justify-center px-4 mt-8">
                    <TiltingContainer>
                        <StaticImage
                            className="max-w-screen-lg"
                            src="../../static/images/desktop.jpg"
                            alt="Desktop Klipse interface."
                        />
                    </TiltingContainer>
                </div>
                <SectionTitle>
                    <span>
                        Our mission
                        <Sparkles className="fill-paletteRed" />
                    </span>
                </SectionTitle>
                <SubTitle>
                    Our mission at Creastel Academy is to train the next generation of SaaS and
                    mobile application makers.
                </SubTitle>
                <CardSection>
                    <Problem
                        image={
                            <StaticImage
                                src="../../static/images/bulb.jpg"
                                alt="Bulb image"
                                height={100}
                                placeholder="none"
                                backgroundColor={BACKGROUND_DEFAULT}
                            />
                        }
                        title="Web applications"
                        description="Creastel Academy is dedicated to applications development using web technologies."
                    />
                    <Problem
                        image={
                            <StaticImage
                                src="../../static/images/coffee.jpg"
                                alt="Coffee image"
                                height={100}
                                placeholder="none"
                                backgroundColor={BACKGROUND_DEFAULT}
                            />
                        }
                        title="An holistic approach"
                        description="From needs identification to market launch through design and development, we teach how to build successful apps."
                    />
                    <Problem
                        image={
                            <StaticImage
                                src="../../static/images/error.jpg"
                                alt="Error image"
                                height={100}
                                placeholder="none"
                                backgroundColor={BACKGROUND_DEFAULT}
                            />
                        }
                        title="Cutting-edge tech"
                        description="Our teaching focuses on the most advanced, multi-platform technologies (mobile, desktop, VR)."
                    />
                </CardSection>
                <SectionTitle>
                    <span>
                        Why choose Creastel Academy?
                        <Laurels className="fill-paletteYellow" />
                    </span>
                </SectionTitle>
                <Feature
                    image={
                        <StaticImage
                            src="../../static/images/clock.jpg"
                            alt="Clock image"
                            height={120}
                            placeholder="none"
                            backgroundColor={BACKGROUND_DEFAULT}
                            layout="fixed"
                        />
                    }
                    title="Learning by doing"
                    description={
                        <>
                            We believe that the best way to learn is to practice. That's why our
                            courses are based on a practical approach, with many exercises and
                            projects. Students are encouraged to work on their own projects and
                            bring them to class.
                        </>
                    }
                />
                <Feature
                    image={
                        <StaticImage
                            src="../../static/images/files.jpg"
                            alt="Pedagogical expertise"
                            height={120}
                            placeholder="none"
                            backgroundColor={BACKGROUND_DEFAULT}
                            layout="fixed"
                        />
                    }
                    title="Pedagogical expertise"
                    description="Our courses are designed by pedagogical experts and are based on the latest research in cognitive science. We use the latest tools to make learning fun and effective."
                    inversedDirection
                />
                <Feature
                    image={
                        <StaticImage
                            src="../../static/images/computer.jpg"
                            alt="Networking and collaboration"
                            height={120}
                            placeholder="none"
                            backgroundColor={BACKGROUND_DEFAULT}
                            layout="fixed"
                        />
                    }
                    title="Networking and collaboration"
                    description="Students have the opportunity to connect with other students and also entreprise to collaborate on projects. We believe that the best way to learn is to learn from others."
                />
                <SectionTitle>
                    <span>
                        Our programs
                        <AcademyFill className="fill-paletteGreen" />
                    </span>
                </SectionTitle>
                <SubTitle>
                    For more information about our programs, please contact us by filling out the
                    form below.
                </SubTitle>
                <br />
                <PlanSection>
                    <Plan
                        to="/#download"
                        title="Full-time program"
                        image={
                            <StaticImage
                                src="../../static/images/weekly.png"
                                alt="Backup image"
                                height={140}
                                placeholder="none"
                            />
                        }
                        description="One-year program to become a complete app builder"
                    />
                    <Plan
                        to="/#download"
                        title="Apprenticeship"
                        image={
                            <StaticImage
                                src="../../static/images/monthly.png"
                                alt="Backup image"
                                height={140}
                                placeholder="none"
                            />
                        }
                        description="Ideal for students that want to learn with an income source"
                    />
                    <Plan
                        to="/#download"
                        title="Specific courses"
                        image={
                            <StaticImage
                                src="../../static/images/daily.png"
                                alt="Backup image"
                                height={140}
                                placeholder="none"
                            />
                        }
                        description="Students can join specific courses to learn about a specific topic"
                    />
                </PlanSection>
                <ButtonUnstyled
                    to="/#download"
                    ariaLabel="Student program"
                    className="flex justify-center"
                >
                    <span className="text-paletteBlue fill-paletteBlue">
                        If you are studing at university, you can join our specific courses. Contact
                        us to learn more.
                        <ChevronRight />
                    </span>
                </ButtonUnstyled>
                <SectionTitle>
                    <span id="download">
                        We'd love to hear from you!
                        <Sparkles className="fill-palettePurple" />
                    </span>
                </SectionTitle>
                <div>
                    <Columns columnsNumber={2}>
                        <div className="flex flex-col flex-1 gap-4">
                            <Body>
                                Please fill out the form below and we will get back to you as soon
                                as possible to give you more information about our programs.
                            </Body>
                            <EmailForm />
                        </div>
                        <div className="flex-1">
                            <TiltingContainer>
                                <StaticImage
                                    src="../../static/images/relax.png"
                                    alt="Zen image"
                                    width={460}
                                    placeholder="none"
                                    backgroundColor={BACKGROUND_DEFAULT}
                                />
                            </TiltingContainer>
                        </div>
                    </Columns>
                </div>
                <SectionTitle>
                    <span>
                        FAQ
                        <Megaphone className="fill-paletteBlue" />
                    </span>
                </SectionTitle>
                <FAQ
                    question="What is Creastel Academy?"
                    answer="Creastel Academy has been created by Creastel, a software company based in France. We've noticed that more and more developers want to launch their own applications, but don't have the right methods and tools to get started (market research, project management, market launch). Our mission is to train the next generation of SaaS and mobile application makers."
                />
                <FAQ
                    question="Do I need a background in web-development?"
                    answer="Yes, our programs are designed for people with a background in web-development. Our courses will focus on the product, design, business and market facets of application creation, as well as cross-platform integration technologies."
                />
                <FAQ
                    question="When does the program start?"
                    answer="The one-year program and apprenticeship program start in September each year. It is not possible to join a current program. However, it is possible to join specific courses during the year. Please contact us to consult our catalog."
                />
                <FAQ
                    question="How much do the programs cost?"
                    answer="Please contact us for prices of one-year programs and single courses. The apprenticeship program is fully financed by companies."
                />
            </MainContainer>
            <Footer />
            <Toaster position="bottom-right" />
        </div>
    );
};

export default Main;

// Head is automatically injected in the page by Gatsby
export const Head = () => (
    <>
        <html lang="en" />
        <title>Creastel Academy – Become the architect of tomorrow's apps</title>
        <meta
            name="description"
            content="Creastel Academy teach developers to build the applications that will shape the future."
        />
        <meta charSet="utf-8" />
    </>
);
