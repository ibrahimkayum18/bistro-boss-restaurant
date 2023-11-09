

const SharedTitle = ({header, subHeader}) => {
    return (
        <div className="text-center space-y-3 my-10 w-1/4 mx-auto">
            <p className="text-orange-300 text-xl">--- {subHeader} ---</p>
            <h2 className="border-y-4 py-3 text-3xl ">{header}</h2>
        </div>
    );
};

export default SharedTitle;