interface Props {
    title: string;
}

const Header = (props: Props) => {
    const { title } = props;

    return (
        <div className="w-full flex items-center justify-center">
            <h1 className="md:text-4xl sm:text-3xl text-2xl tracking-widest font-manrope text-primaryDark dark:text-primaryLight mt-2">
                {title}
            </h1>
        </div>
    );
};

export default Header;
