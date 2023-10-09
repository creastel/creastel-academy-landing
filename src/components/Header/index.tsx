import { AcademyFill } from 'gthibaud-icons-react';
import { Button } from '../Button/text';
import { ButtonUnstyled } from '../Button/unstyled';

export const Header = () => {
    return (
        <header>
            <nav className="flex w-full mx-auto items-center justify-between py-4 px-4 lg:px-6">
                <div className="flex">
                    <ButtonUnstyled
                        to="/"
                        ariaLabel="Home"
                    >
                        <p className="font-semibold text-xl text-left tracking-tight">
                            Creastel Academy
                            <AcademyFill
                                size="24px"
                                className="fill-paletteBlue"
                            />
                        </p>
                    </ButtonUnstyled>
                </div>
                <div className="flex justify-end shrink-0">
                    <Button
                        to="/#download"
                        className="bg-textBody hover:bg-textBody rounded-md"
                    >
                        Join the program
                    </Button>
                </div>
            </nav>
        </header>
    );
};
