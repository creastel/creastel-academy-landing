import { StaticImage } from 'gatsby-plugin-image';
import { Sparkles } from 'gthibaud-icons-react';
import { Columns } from '../components/Container/Columns';
import { MainContainer } from '../components/Container/Main';
import { TiltingContainer } from '../components/Container/Titling';
import { Header } from '../components/Header';
import { BigTitle } from '../components/Typography/BigTitle';
import { Body } from '../components/Typography/Body';
import { SubTitle } from '../components/Typography/SubTitle';

const BACKGROUND_DEFAULT = '#FFFFFF';

const Subscribe = () => {
    return (
        <div className="flex flex-col align-center">
            <Header />
            <MainContainer>
                <BigTitle>Thank you!</BigTitle>
                <SubTitle>
                    <span>
                        Your email has been sent
                        <Sparkles className="fill-paletteGreen" />
                    </span>
                </SubTitle>
                <div>
                    <Columns columnsNumber={2}>
                        <div className="flex flex-col flex-1 gap-4">
                            <Body>
                                Our team will contact you very soon to give you more information
                                about our programs.
                                <br />
                                See you soon!
                            </Body>
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
            </MainContainer>
        </div>
    );
};

export default Subscribe;

// Head is automatically injected in the page by Gatsby
export const Head = () => (
    <>
        <html lang="en" />
        <title>Creastel Academy – See you soon</title>
        <meta
            name="description"
            content="Creastel Academy teach developers to build the applications that will shape the future."
        />
        <meta charSet="utf-8" />
    </>
);
